---
date: 2024-01-25 11:25
type: Permanent Note
tags:
  - ceph
  - nearfull
  - osd
last edited: 2024-02-12 01:09
---
## ❓ What? 

`mon_osd_nearfull_ratio` is the maximum / threshold percentage of disk space used before an OSD is considered as a [[Nearfull OSD]]. When utilisation crosses [[Nearfull Ratio]], it can reach [[Backfillfull Ratio]] and [[Full Ratio]]. The default value is 0.85 or 85% of the total available space / capacity.

## ❔ Why?

The ratio is set as a way to alert and prevent OSDs/disks from reaching [[Backfillfull Ratio]] and [[Full Ratio]]. 

On croit / IBM / SUSE, once [[Nearfull Ratio]] is reached, pools in the cluster are marked read-only until the [[Nearfull Ratio]] is increased or more storage space is added or the cluster is balanced in a way that no OSD reaches [[Nearfull Ratio]]. 

On ceph, pools are read-only when [[Full Ratio]] is reached.

## 🎤 How?

It is set on the OSDMap during cluster creation with this parameter:

```toml
[global]
[...]
mon_osd_nearfull_ratio = 0.85
```

If the setting is to be changed after cluster creation, one can do so with:

```toml
ceph osd set-nearfull-ratio 0.85
```

On croit, one can do this by adjusting the sliders at Maintenance → Full Ratios (at the bottom):
 
![[croit-ratios.png]]
## 👓 References

https://docs.ceph.com/en/quincy/rados/configuration/mon-config-ref/#storage-capacity