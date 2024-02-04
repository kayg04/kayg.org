---
Created: 2024-01-17T16:38
Refers to:
  - "[[Ceph]]"
tags:
  - ceph
  - nearfull
  - osd
  - work
Type: Permanent Note
---
- A ceph cluster raises a nearfull warning when any OSD on the cluster reaches more than [[Nearfull Ratio]] (0.85 by default) usage.
- If a ceph OSD is nearfull, the whole cluster switches to sync writes instead of async writes. So every piece of data needs to be synced to the drive before the next one is written.
- This takes down the whole cluster performance.