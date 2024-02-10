---
date: 2024-01-17 16:47
last edited: 2024-02-10 17:29
type: Permanent Note
tags:
  - ceph
  - osd
  - disk-failure
---
## ❓ What?

Drives that are failing might emit errors in one of the parameters of the SMART log which can be obtained with: 
```bash
smartctl -a <drive>
```
Those errors are visible in the `SMART ERROR Log` or in the OSD logs that can be obtained with `journalctl -fu ceph-osd@<osd-num>.service` or in the kernel log: `dmesg -T` or a combination of all of the above. A short smartctl test (`smartctl -t short <drive>`) can also be run to further confirm that the drive is dying but is often not necessary.

## ❔ Why?

A [[Ceph]] cluster over time can have drives that are either completely non-functional or emitting read/write errors because of sustained use or manufacturing defects. In that case, a replacement of the drive is necessary to ensure configured data redundancy and sustained performance. 

## 🎤 How?

### Symptoms

When there's a failed drive/OSD, there are two situations:

- The drive is dying but still has data available.

- The disk is dead and no data can be retrieved from it.

### Procedure

- In both cases, the disk can be marked out of the [[Ceph]] cluster with `ceph osd out <osd.num>` or `ceph osd reweight 0` (Both are equivalent operations).

- [[Ceph]] drains the dying OSD and moves data OR if the disk is dead, ceph rebuilds data from redundant bits / parity to _other OSDs on the same node_. This may cause a [[Nearfull OSD]] situation.
 
- To prevent such a situation, the trick here is to set `ceph osd crush reweight 0`.  This makes sure that the data is distributed to _other OSDs on all the nodes / throughout the crushmap_. See [[Difference Between OSD Reweight and CRUSH Reweight]].

- Wait till the OSD has been drained (0 PGs) if the disk is still alive. If the disk is dead, it can be replaced immediately.

- The OSD can be destroyed and recreated thereafter.

## 👓 References

https://ceph.io/en/news/blog/2014/admin-guide-replacing-a-failed-disk-in-a-ceph-cluster/

