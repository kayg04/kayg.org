---
date: 2024-02-04 21:30
Type: Permanent Note
---
## ❓ What?

The maximum or threshold percentage of disk space that can be used before an OSD is considered too full to backfill. This ratio is reached after crossing [[Nearfull Ratio]]. Once utilisation crosses [[Backfillfull Ratio]], it reaches [[Full Ratio]]. The default value is 0.90 or 90% of the total available space.

## ❔ Why?

  

## 🎤 How?

The parameter is set during cluster creation in the OSDMap as:

```toml
[global]
[...]
mon_osd_backfillfull_ratio = 0.95
```

Afterwards, it can be changed by running the following on the admin node:

```toml
ceph osd set-backfillfull-ratio
```

On croit, it can be changed by navigating to Maintenance → Full Ratios (at the bottom):

![[croit-ratios.png]]
## 👓 References
---
https://docs.ceph.com/en/quincy/rados/configuration/mon-config-ref/#storage-capacity