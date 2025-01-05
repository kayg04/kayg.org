---
type:
  - Permanent Note
tags:
  - reverse-proxy
  - proxy
  - headers
  - requests
date: 2024-07-13 19:00
last edited: 2025-01-05 18:34
title: The X-Forwarded-For HTTP Header
---
## ❓ What?

  The `X-Forwarded-For` is a request header that should contain the originating IP address (client IP) and the proxies that the client passes through.
  
  For example:

```json
"X-Forwarded-For":["2406:b400:71:dc69:21d2:9629:89be:a2d4, 108.162.227.120"]
```

is of the format: `client, proxy1` where `client` is my home IP address and `proxy` is Cloudflare.

## ❔ Why?

  The header is important to indicate to the backend that the client might be passing through a proxy. 
  
  Without the header present OR If the proxy is not trusted by the backend, the proxy is assumed to be the originating IP and all applications would simply see one (or multiple) IPs as the client IPs, which are actually the IPs of the proxy / load-balancer. 

## 👓 References

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For

https://www.authelia.com/integration/proxies/forwarded-headers/

