---
date: 2024-02-04 20:57
Type: Permanent Note
---
## ❓ What?
  
The maximum / threshold percentage of disk space usage before an OSD is considered `full`. This happens after usage has crossed and [[Nearfull Ratio]]. The default value is 0.95 or 95% of the total available space / capacity.

## ❔ Why?

  
When a ceph cluster approaches full ratio, it sacrifices high availability: the cluster goes read-only at this ratio. All writes that are halted will result in degraded objects (objects that have less than [[Pool Size]] (`size`) ideal copies). Furthermore if the cluster has `min_size 1` then it results in data loss. Therefore it’s not a good production practice.

## 🎤 How?
  
[[Full Ratio]] is set during cluster creation on the OSDMap as follows:

```TOML
[global]
[...]
mon_osd_full_ratio = 0.95
```

Afterwards, it can be changed with:

```Bash
ceph osd set-full-ratio
```

In croit, [[Full Ratio]] can be changed by visiting Maintenance → Full Ratios (at the bottom):

![[croit-ratios.png]]
## 👓 References

https://docs.ceph.com/en/quincy/rados/configuration/mon-config-ref/#storage-capacity