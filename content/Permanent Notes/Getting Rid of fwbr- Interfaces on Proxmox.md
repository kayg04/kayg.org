---
type: Permanent Note
tags:
  - proxmox/firewall
  - project/learning-proxmox
  - project/learning-networking
  - networking
date: 2024-06-04 19:11
last edited: 2024-06-04 19:25
---
## ❓ What?

Proxmox creates fwbr interfaces when you start a VM with any bridge attached, as seen [[Virtual Router in Proxmox with the Skullsaints Onyx#Why are there multiple IPs?|here]]. This is done because firewall rules (using the proxmox firewall) cannot be set directly on a bridge, otherwise they will be set for all the vms using that bridge. Instead firewall rules are applied to the firewall interfaces instead.

> tap dev -> fwrbr -> fwrln <-> fwrpr -> vmbrX

This is apparently what the flow is. I need to dig deeper but the documentation on this is really sparse.

## ❔ Why?

I do not use the Proxmox firewall (disabled on the datacenter level) and having more interfaces is just overhead without any real purpose.  

## 🎤 How?

The solution is pretty simple: Disable the firewall checkbox on the nic. 

The following is when the firewall checkbox is enabled on virtual nic on a LXC:

```
root@compute01:~# ip a | grep 1200
171: veth12003i0@if2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue master fwbr12003i0 state UP group default qlen 1000
172: fwbr12003i0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue state UP group default qlen 1000
173: fwpr12003p0@fwln12003i0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue master sdntest state UP group default qlen 1000
174: fwln12003i0@fwpr12003p0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue master fwbr12003i0 state UP group default qlen 1000
```

This is after unticking the firewall checkbox on the nic of the lxc:

```
root@compute01:~# ip a | grep 1200
171: veth12003i0@if2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue master sdntest state UP group default qlen 1000
```

## 👓 References

My Proxmox clusters. 