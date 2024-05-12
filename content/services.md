---
date: 2024-02-04 23:03
last edited: 2024-05-12 14:54
title: Services
---
## Overview

I host a bunch of services for the www / friends. Most of it is public and free to signup / use. However some services like Nextcloud or Immich which are primarily for data storage require you to send me an email to onboard you.

|Name|Usecase|Alternative To|Accessibility|
|---|---|---|---|
|[_Bitwarden_](https://vault.kayg.org/)|Manage passwords|Lastpass|Public|
|_[Immich](https://photos.kayg.org/)_|Store your pictures|Google Photos|Private|
|[_Nextcloud_](https://cloud.kayg.org/)|Cloud storage|Google Drive|Private|
|[_Privatebin_](https://bin.kayg.org/)|Share text securely|Pastebin|Public|
|_[SearX](https://search.kayg.org/)_|Search any part of the internet|Google Search|Public|

## Status

Obligatory [uptime-kuma reporting on incidents](https://status.kayg.org/status/kayg-org):

<iframe src="https://status.kayg.org/status/kayg-org"></iframe>

## Status Updates

### 2024-05-11 12:44

Updated DNS to the wrong CNAME first and then the correct CNAME record.
### 2024-05-10 15:07

Recent downtime is not really a downtime but is rather caused by the uptime-kuma docker container not being available. It was some docker bug that was caused by restarting caddy, and was fixed by updating packages and rebooting the machine.