---
date: 2024-01-17 16:38
last edited: 2024-02-12 01:09
type: Permanent Note
tags:
  - ceph
  - nearfull
  - osd
  - work
---
- A ceph cluster raises a nearfull warning when any OSD on the cluster reaches more than [[Nearfull Ratio]] (0.85 by default) usage.
- If a ceph OSD is nearfull, the whole cluster switches to sync writes instead of async writes. So every piece of data needs to be synced to the drive before the next one is written.
- This takes down the whole cluster performance.