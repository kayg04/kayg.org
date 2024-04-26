---
type: Permanent Note
tags:
  - ceph/s3
  - ceph
  - ceph/rgw
date: 2024-04-27 02:43
last edited: 2024-04-27 03:14
---
## ❓ What?

Storage classes in [[Ceph]] correspond to a certain [[data pool]]. They are a subsection of [[Placement Rules]] that link them to [[data pool]]s. A [[Storage Class]] is unique to a [[Placement Rules|placement rule]] but [[Placement Rules|placement rules]] can have many [[Storage Class|storage classes]]. Every [[Placement Rules|placement rule]] has a [[Storage Class|storage class]] called `STANDARD` by default but this `STANDARD` might correspond to different data pools for different [[Placement Rules|placement rules]].
### Changing Default Storage Class for a User

**The default storage class for a placement rule (and therefore a bucket) cannot be modified.** If it's desired that a certain user's uploads, by default, goto a different storage class, this can be done by modifying the `default_storage_class` key for the specific user with `radosgw-admin` .

```bash
$ radosgw-admin user info --uid test-user
{
    "user_id": "test-user",
    "display_name": "test-user",
    "email": "",
    "suspended": 0,
    "max_buckets": 1000,
    "subusers": [],
    "keys": [
        {
            "user": "test-user",
            "access_key": "QTAQHWDZBLBSPAK3MEL3",
            "secret_key": "Oe9oqCDY1c3DIgqnK34CBo0M4IWyXkYtTP7MP3Yf"
        }
    ],
    "swift_keys": [],
    "caps": [],
    "op_mask": "read, write, delete",
    "default_placement": "",
    "default_storage_class": "",
    "placement_tags": [],
    "bucket_quota": {
        "enabled": false,
        "check_on_raw": false,
        "max_size": -1,
        "max_size_kb": 0,
        "max_objects": -1
    },
    "user_quota": {
        "enabled": false,
        "check_on_raw": false,
        "max_size": -1,
        "max_size_kb": 0,
        "max_objects": -1
    },
    "temp_url_keys": [],
    "type": "rgw",
    "mfa_ids": []
}

$ radosgw-admin user modify \
      --uid test-user \
      --placement-id default-placement \
      --storage-class hot_storage_class
{
    "user_id": "test-user",
    "display_name": "test-user",
    "email": "",
    "suspended": 0,
    "max_buckets": 1000,
    "subusers": [],
    "keys": [
        {
            "user": "test-user",
            "access_key": "QTAQHWDZBLBSPAK3MEL3",
            "secret_key": "Oe9oqCDY1c3DIgqnK34CBo0M4IWyXkYtTP7MP3Yf"
        }
    ],
    "swift_keys": [],
    "caps": [],
    "op_mask": "read, write, delete",
    "default_placement": "default-placement",
    "default_storage_class": "hot_storage_class",
    "placement_tags": [],
    "bucket_quota": {
        "enabled": false,
        "check_on_raw": false,
        "max_size": -1,
        "max_size_kb": 0,
        "max_objects": -1
    },
    "user_quota": {
        "enabled": false,
        "check_on_raw": false,
        "max_size": -1,
        "max_size_kb": 0,
        "max_objects": -1
    },
    "temp_url_keys": [],
    "type": "rgw",
    "mfa_ids": []
}
```

Otherwise, a storage class can also be specified during the time of the upload like in [[Placement Rules#Bucket Creation with Non-Default Placement Rule with AWS CLI|the placement rule example]].

## ❔ Why?

Storage classes help users and administrators to prioritise space and costs by having different types of storage classes corresponding to different types of [[Device Class|device classes]]. For example, frequently accessed data may reside on NVMe while archives may reside on HDD. This type of [[Transitioning Data to a Different Storage Class|transitioning]] is made possible with [[Lifecycle Policy|lifecycle policies]]. 

## 🎤 How?

  
A storage class can be created like so:

![[storage-class-1.png]]
Same over the command line:

```bash
radosgw-admin zonegroup placement add \
      --rgw-zonegroup default \
      --placement-id default-placement \
      --storage-class hot_storage_class

radosgw-admin zone placement add \
      --rgw-zone default \
      --placement-id default-placement \
      --storage-class hot_storage_class \
      --data-pool hot.rgw.data \
      --compression lz4
```

## 👓 References

https://docs.ceph.com/en/latest/radosgw/placement/#adding-a-storage-class