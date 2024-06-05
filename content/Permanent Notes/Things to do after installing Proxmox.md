---
type: Permanent Note
tags:
  - proxmox
  - project/learning-proxmox
  - zfs
date: 2024-06-05 19:57
last edited: 2024-06-05 20:21
---
## ❓ What?

  There are a few tweaks I make after installing proxmox. This is when installing Proxmox is done through the provided liveiso. Usually though however I use the [Debian OpenZFS guide](https://openzfs.github.io/openzfs-docs/Getting%20Started/Debian/Debian%20Bookworm%20Root%20on%20ZFS.html) to install Debian first and I then install Proxmox on top of it so I can apply all the tweaks right during installation. 

After installation, I create a separate dataset for Proxmox CT/VMs as `zfs create rpool/pve`. I name the storage is proxmox as `zfs-<deviceclass>` to keep it really simple and consistent across different installations, and also for migration to be possible without using shared storage. 

### Tweaks after Installation
  
  The changes are automatically inherited from the parent dataset, so there's no need to set it for nested datasets. Also, these modifications will only apply to new files. The default proxmox installation is quite small at `1.2G` so I don't really mind. Finally, the tweaks:
  
- Disable access time updation completely. This information is irrelevant to me and I only care about when a file was last modified. So it's disabled with `zfs set atime=off rpool` globally.
- Enable extended attribute storage for POSIX ACLs with `zfs set xattr=sa dnodesize=auto rpool/pve`. [This apparently improves xattr performance significantly](https://github.com/openzfs/zfs/commit/82a37189aac955c81a59a5ecc3400475adb56355). It's not recommended to set these properties globally as GRUB2 still does not support all features of zfs and `dnodesize=auto` is one of them. For reference, Proxmox's default installation partitioning looks like this: 
  ```bash
root@minipc01-at-home:~# fdisk -l
Disk /dev/nvme0n1: 238.47 GiB, 256060514304 bytes, 500118192 sectors
Disk model: BK-256GB NVME SSD
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: D6CFEE1E-1CF2-414D-8772-E73DB3EDBE61

Device           Start       End   Sectors   Size Type
/dev/nvme0n1p1      34      2047      2014  1007K BIOS boot
/dev/nvme0n1p2    2048   2099199   2097152     1G EFI System
/dev/nvme0n1p3 2099200 500118158 498018959 237.5G Solaris /usr & Apple ZFS  
```
- Enable POSIX ACLs globally with `zfs set acltype=posixacl rpool`. This is just a preference that helps to create snapshots on LXCs.

### Tweaks during Installation

During installation too, I make some really general tweaks such as:

- Increase `ashift` to `12` because all modern drives have 4K physical sectore sizes and there's no need to live with the old emulated 512 bytes sectors.
- Select `compression` method as `zstd` instead of the default `lz4`. I mean, compression is cheap, doesn't really hinder cpu time noticeably so if I can save some space, why not save it where I can?
- Increase ARC size max to (1/2) x RAM. Proxmox [recently introduced a](https://pve.proxmox.com/wiki/ZFS_on_Linux#sysadmin_zfs_limit_memory_usage) change to lower the amount of RAM ZFS is allowed to use for its cache to 10% of the total available RAM. I know ZFS loves RAM and I have 32G of it, and I don't really mind zfs using half of it as long as zfs gives it back to applications when they ask for it, which it does.

## 👓 References

https://openzfs.github.io/openzfs-docs/Getting%20Started/Debian/Debian%20Bookworm%20Root%20on%20ZFS.html

https://pve.proxmox.com/wiki/ZFS_on_Linux

https://pve.proxmox.com/wiki/ZFS:_Tips_and_Tricks
