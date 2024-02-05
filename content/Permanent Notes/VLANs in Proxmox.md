---
type: Permanent Note
date: 2024-02-03 22:22
last edited: 2024-02-06 02:55
tags:
  - proxmox
  - vlan
  - networking
---
## ❓ What?
  
VLANs in [[Proxmox]] are a method to segment existing networking interfaces, bridges or bonds. If `eth0` is the interface name, `eth0.2` would be the vlan interface name where `2` is the vlan tag. The vlan tag 1 is reserved for untagged traffic and is often the default vlan in most networks, including Proxmox. VLAN IDs range from 0 - 4096.

## ❔ Why?
  
VLANs are used to separate traffic into different [Broadcast Domains](https://www.notion.so/Broadcast-Domains-a640e2b460274ea9bf3a404e9417b085?pvs=21). This is useful in managing networking traffic, creating a logical separation between, say, different tenants on the same host. However, VLANs can also span multiple hosts if the hosts are connected by a switch with [Trunk Port](https://www.notion.so/Trunk-Port-5c6c934e5854458d95bf25a1263dd98d?pvs=21) configuration. [Intra-VLAN Traffic](https://www.notion.so/Intra-VLAN-Traffic-211f84daadc344c1ad5d838b7876e9a5?pvs=21) is permitted by default and [Inter-VLAN Traffic](https://www.notion.so/Inter-VLAN-Traffic-0c257ad5f69e4fababed1757d7440537?pvs=21) is disallowed.

## 🎤 How?

### Create VLANs

> [!Assumptions] Assumptions
>  `eno1` - NIC 
>  `eno1.Z` - VLAN on the NIC eno1 with a the VLAN tag Z 
>  `vmbrX` - Bridge 
>  `vmbrX.Y` - VLAN on the bridge `vmbrX` with the VLAN tag Y

There are two ways to create a VLAN on Proxmox:

#### Transparent configuration

The VM’s virtual network device has to be assigned a network tag and the network device has to be marked VLAN aware.
    
1. Visit the Network tab under the node and create a Linux bridge:
        
        ![[Pasted image 20240206024045.png]]
        
2. Tick the “VLAN Aware” box.
        
        ![[Pasted image 20240206024507.png]]
        
3. Create a “Linux VLAN” too as we want the Proxmox Host to do the routing. Here we want to define a subnet as the VM will be permitted to set an IP within this subnet.
        
        ![[Pasted image 20240206024536.png]]
4. On the VM, goto the Hardware Tab. While creating the network device or editing a network device, add the vlan tag.
        
        ![[Pasted image 20240206024555.png]]
        
5. Under VM → Cloud-init, add IPs belonging the VLAN’s subnet to the VMs.
        
        ![[Pasted image 20240206024609.png]]
        
        ![[Pasted image 20240206024627.png]]
        
	Make sure to click on “Regenerate Image” to apply changes.
        
6. Start both VMs and get them to ping each other.
        
        ![[Pasted image 20240206024647.png]]
        
#### Traditional configuration
 
 The VLAN tagging is done directly on the interface and the VLAN interface is referred to by a linux bridge. This VLAN interface on the physical interface is created dynamically when the linux bride is active and is in use.
    
1. Create a Linux Bridge under System → Network that refers to a VLAN on the NIC:
        
        ![[Pasted image 20240206024832.png]]
        
	This time the bridge is **not marked VLAN-Aware**, as the tagging is done directly on the NIC. The bridge port here is the vlan tag we want to create on the NIC - `2048` in this example. `eno1.2048` will be created and destroyed dynamically. 
	
2. Use the bridge `vmbr2` on two test VMs to put them in the same VLAN. The VLAN tag on the VM itself is empty because the VM network device does not know it belongs to a VLAN, the bridge itself does.
        
        ![[Pasted image 20240206024849.png]]
        
3. Under VM → Cloud-init, make sure the VM has an IP that belongs to our VLAN bridge:
        
        ![[Pasted image 20240206024951.png]]
        
        ![[Pasted image 20240206025004.png]]
        
        Make sure to click on “Regenerate Image” for changes to apply to the VM.
        
4. Start the VMs and try to ping each other.
        
        ![[Pasted image 20240206025019.png]]
        

### Why does inter-VLAN traffic work?

However, now that we have two VLANs (one on a bridge, one on a NIC), when we ping from one VLAN to the other…. this happens.

![[Pasted image 20240206025505.png]]

This is because of a sysctl property that makes IP forwarding possible. The property is disabled by default on Proxmox but for a routed configuration, where traffic has to be forwarded from one interface to another, it needs to be enabled everytime on startup like this:

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

OR permanently like this:

```bash
echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.d/99-tailscale.conf
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.d/99-tailscale.conf
sudo sysctl -p /etc/sysctl.d/99-tailscale.conf
```

Now Tailscale docs mention a very important side effect of allowing IP forwarding:

> When enabling IP forwarding, ensure your firewall is set up to **deny traffic forwarding by default.** This is a default setting for common firewalls like `ufw` and `firewalld`, and **ensures your device doesn’t route traffic you don’t intend.**

Thus, the host here acts like a router and forwards all traffic, even the unintended bits (between two VLANs).

### Fixing inter-VLAN traffic
---
This can be solved by setting a default forwarding policy of `DROP` with iptables and then allowing traffic we intend to.
- Allow communication between the NIC and the bridge.
    ```bash
    iptables -A FORWARD -i eno1 -o vmbr+ -j ACCEPT
    iptables -A FORWARD -i vmbr+ -o eno1 -j ACCEPT
    ```
- Allow communication between the VLANs and the bridge.
    ```bash
    iptables -A FORWARD -i vmbr5 -o vmbr5.+ -j ACCEPT
    Iptables -A FORWARD -i vmbr5.+ -o vmbr5 -j ACCEPT
    ```
- Allow communication on the VLANs (not required with traditional VLANs - when VLANs are not on the bridge)
    ```bash
    iptables -A FORWRAD -i vmbr5.100 -o vmbr5.100 -j ACCEPT
    ```
- Drop everything else
    ```bash
    iptables -A FORWARD -j DROP
    ```


## 👓 References

[7.4. FORWARD and NAT Rules Red Hat Enterprise Linux 4 | Red Hat Customer Portal](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/4/html/security_guide/s1-firewall-ipt-fwd)

[Subnet routers and traffic relay nodes](https://tailscale.com/kb/1019/subnets?tab=linux#enable-ip-forwarding)

[Explain the term broadcast domain, and what are multicast and unicast?](https://www.perplexity.ai/search/Explain-the-term-L2lx9DkaRs65wuoSsXkZYw?s=c)

[Internal working of rules in forward chain for NAT](https://superuser.com/questions/255705/internal-working-of-rules-in-forward-chain-for-nat)

[iptables: rules to forward incoming packets from a static IP on one interface to a dynamic IP on another interface](https://serverfault.com/questions/880244/iptables-rules-to-forward-incoming-packets-from-a-static-ip-on-one-interface-to)

