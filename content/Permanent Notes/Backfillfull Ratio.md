---
date: 2024-01-25 11:16
type: Permanent Note
last edited: 2024-04-27 14:58
tags:
  - ceph/osd
  - ceph
  - ceph/disk-ratios
---
## ❓ What?

The maximum or threshold percentage of disk space that can be used before an OSD is considered too full to backfill. This ratio is reached after crossing [[Nearfull Ratio]]. Once utilisation crosses [[Backfillfull Ratio]], it reaches [[Full Ratio]]. The default value is 0.90 or 90% of the total available space.

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

![[Backfillfull Ratio-571796D17254D71486AF8B02990E6B90.png]]
## 👓 References
---
https://docs.ceph.com/en/quincy/rados/configuration/mon-config-ref/#storage-capacity