---
type:
  - Permanent Note
tags:
  - proxmox
  - networking
  - project/learning-networking
  - project/learning-proxmox
  - networking/bridge
  - networking/mtu
date: 2024-08-09 17:14
last edited: 2025-01-05 18:44
title: Bridge MTUs in Proxmox
---
## ❓ What?

General Networking says that:

- if 1 packet < 1x MTU → packet goes through (that's why most VPNs choose a low enough MTU to cater to all networks)
- if 1 packet > 1x MTU → packet might go through via fragmentation meaning a performance penalty or dropped silently to avoid said performance penalty
- if 1 packet = 1x MTU → packet goes through

So if LXC / VM NIC MTU isn't the same as bridge MTU, in the logs there might a few cases of:

- recv error - connection reset by peer
- i/o timeout

and if it's a web service then the page might appear to be loading or get stuck partially loaded.

## ❔ Why?

  This is a cause of MTU mismatch. With Proxmox LXCs, the veths already take on the value of the Proxmox network bridge. The veth configuration looks like this:

![[proxmox-lxc-veth-mtu.png]]

But with VMs, that is not the case. A value of `1` needs to be entered manually.

![[proxmox-vm-nic-mtu.png]]

## 🎤 When is it a problem?

One of the problems can be [[epvn-vxlan-proxmox-sdn]] where the [bridge MTU size is 1450](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#pvesdn_zone_plugin_evpn) while all VM NICs have a default of 1500 MTU. Of course one might never notice it if they rely on a VPN like tailscale for all inter-vm communication like I do but if there's a time where VMs have to be reached via the EVPN network then MTU mismatch is definitely a showstopper.

## 👓 References

https://pve.proxmox.com/pve-docs/pve-admin-guide.html#pvesdn_zone_plugin_evpn