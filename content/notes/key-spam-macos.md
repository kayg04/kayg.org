---
type:
  - Permanent Note
tags:
  - macos
  - keyboard
  - macos/defaults
date: 2024-04-22 13:20
last edited: 2025-01-05 18:46
title: Enable Key Spam or Disable Special Characters on MacOS
---
## ❓ What?

  MacOS has this behaviour where if you hold a key, such as in my case, holding `k` to move up in VSCode, a special character popup appears where you can choose an alternative character for the key pressed.
  
   ![[enable-key-spam-or-disable-special-characters-on-macos-1.mp4]]
## 🎤 The fix

```bash
defaults write -g ApplePressAndHoldEnabled -bool false
```

Run the command in your terminal app of choice, close/reopen app or logout/login or simply reboot. Since [[enable-key-spam-or-disable-special-characters-on-macos-2.png|I am an uptime masochist]], I simply close and reopen apps.

I am not sure if a help page exists inside MacOS to query the different values of the keys for `defaults`. However, in my search, I found this page which serves as an alternative: https://macos-defaults.com/ 

## 👓 References

https://macos-defaults.com/keyboard/applepressandholdenabled.html

https://superuser.com/questions/363252/how-to-enable-keyboard-repeat-on-a-mac