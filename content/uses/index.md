---
title: Workspace
date: 2024-02-04 23:03
last edited: 2024-04-15 20:13
---
[The world has a `/uses` page](https://uses.tech/) and why shouldn't I? 

This is the gear that fuels my work and play.

![workspace](<./workspace.jpg>)

## Hardware

- Laptop: ![16 inch](<./macbook-lid-open.jpg>) ![Macbook Pro](<./macbook-lid-closed.jpg>) - M2 Max, 32 GB RAM, 1 TB NVMe
- Laptop Dock: [Cable Creation 8K@60 hz](https://www.amazon.in/CableCreation-Multiport-Delivery-Charging-Compatible/dp/B0B5CFPDD2)
- External Storage: [Samsung T7 Shield 4 TB](https://www.amazon.in/Samsung-Resistant-Photographers-MU-PE4T0S-WW/dp/B0BXBSYTZR)
- Laptop Arm: [Rife Laptop Arm](https://www.rifeindia.com/products/full-motion-articulation-gas-spring-laptop-desk-stand-arm-height-adjustable-notebook-riser-nags?variant=39325762486345)
- Lights: A mixture of Phillips Hue Play Bars, 9W (800 and 1100 lumens) E27 bulbs and (soon) Wiz bulbs, controlled by a Home Assistant instance that does not run at home.
- Monitor: LG C148 OLED
- Speakers: Samsung HW-Q990B
- Microphone: ![Fifine T669B](<./fifine-t669b.jpg>) (which is basically the Fifine K669B + Arm + Windscreen + Pop filter)
- Headphones
	- When I move around the house: ![Sony WH-1000XM5](<./sony-wh1000xm5.jpg>)
	- When I need some music at my desk: ![HiFiMan Sundara](<./hifiman-sundara.jpg>) paired with ![FiiO K5 Pro](<./fiio-k5-pro.jpg>)
- Keyboard: ![Fi](<./fifi-left.jpg>)![fi](<./fifi-right.jpg>) (https://github.com/raychengy/fifi_split_keeb) with the famous [Miryoku Keymap](https://github.com/manna-harbour/miryoku)
- Mouse: ![Glorious Model D Wireless](<./glorious-model-d-wireless.jpg>) (soon to be replaced by a USB C Magic Trackpad if Apple ever is kind enough to release one)

## Software

Would this page be really complete without the software that brings balance to the work/play?

### When I am home...

I am mostly glued to the inky blacks of the OLED TV that serves as a giant workspace to throw windows around. To supplement that, my laptop floats on an arm that serves as a scratch space / messaging app screen / occasional webcam mirror when my phone is running too low on battery to run [Droidcam](https://www.dev47apps.com/obs/). In that context, my setup would look something like this, sans the fluff.

> [!NOTE] What's on my screen?
> - [Mosaic](https://www.lightpillar.com/mosaic.html) as my window manager, curing my [FancyZones](https://learn.microsoft.com/en-us/windows/powertoys/fancyzones#snapping-to-multiple-zones) withdrawal
> - [iTerm2](https://iterm2.com/) on the top left - The perfect terminal for my needs. 
> - [Visual Studio Code](https://code.visualstudio.com/) on the top right - Just your software-engineer default.
> - [Arc](https://arc.net) on the bottom left - Firefox Multi-Account Containers-like, on Chromium, with infinitely better UIX.
> - [Raycast](https://www.raycast.com/) on the bottom center - The answer to every person's, "Why MacOS?"
> - [Obsidian](https://obsidian.md/) on the bottom right - Notion good but local first markdown with extensibility is better.

![desktop-on-tv-at-home](<./desktop-on-tv-at-home.png>)

### When I am on the go though...

the ![16 inch screen](<./macbook-lid-open.jpg>) serves its purpose more than my thinnest-ultrabook-seeker past self would have realised. Then my work desktop would look something like this.

> [!NOTE] What's on my screen?
> - [Apple Books](https://www.apple.com/apple-books/) on the left
> - [iTerm2](https://iterm2.com/) on the bottom right
> - [Visual Studio Code](https://code.visualstudio.com/) on the top right
> - [Orbstack](https://orbstack.dev/) on the center, an excellent replacement for my past WSL2 enjoyer self.
> - [Bartender](https://www.macbartender.com/Bartender5/) rounds and separates the menubar, and hides items behind an icon of my choice.
> - [iStat Menus](https://bjango.com/mac/istatmenus/) is the first item on the right menubar, and as you'd guess, it shows all the stats I want on the menubar.
> - [Aldente Pro](https://apphousekitchen.com/) is the second item on the right menubar, limits and handles battery charging behaviour to keep my battery health ![twitter-share worthy](<./aldente-pro.png>). 

![desktop-on-the-go](<./desktop-on-the-go.png>)

### What else is there?

There are other tools that fuel my workflow but have missed the highlights above.

- [BetterDisplay](https://github.com/waydabber/BetterDisplay#readme) - The first time I laid eyes on the MacOS ![Displays section in System Settings](<./macos-system-settings-displays.png>), I wondered if I was due for an eye checkup. When I first plugged my laptop into my LG OLED TV, MacOS also wouldn't let me do 4k@120 hz. Then I came across [this section on MacRumors](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/) that informed me that it's MacOS that's blind. After patching an alternative firmware for my dock through Windows and fooling MacOS into thinking it's using DisplayPort instead of HDMI, I was able to use 4k@120hz at 4:4:4 RGB again. None of this would have been possible without an excellent display / scaling manager like BetterDisplay. It lets me ![scroll through a wider catalogue of scaling options](<./betterdisplay-scaling.png>), informs me ![if a certain resolution or scaling option supports 10bit and HDR](<./betterdisplay-resolutions.png>), and lets me toggle dark mode / hdr / night light easily. 
- [BetterMouse](https://better-mouse.com/) - Scrolling using a mouse isn't the smoothest thing on MacOS, and why would it be? Apple has also never been smooth about discouraging you from using third party accessories, especially when [their own rendition of it has a port on the bottom](https://youtu.be/MpzRUiAV6do). Anyways, I know [MOS](https://mos.caldis.me/) and [LinearMouse](https://linearmouse.app/) exist, but BetterMouse is miles ahead in its UI and the functionality it offers. Of course, it allows you to fix smooth scrolling first but it also lets you fine-tune ![scrolling acceleration](<./bettermouse-scroll.png>), ![cursor acceleration](<./bettermouse-mouse.png>) and ![actions for your unused mouse keys](<./bettermouse-buttons.png>).  
- [Parallels](https://www.parallels.com/) - You may have heard of VMWare, used Virtualbox on the desktop but nothing beats the level of integration and ease of use that Parallels brings to the table. Yes, it's not cheap, but I could just play *Witcher 3* in a Windows VM inside Parallels as a test with very decent framerates. What's more is that home folders of MacOS and Windows are automatically linked, the apps that I install on Windows ![appear as MacOS apps](<./parallels-windows-apps.png>) which open in ![their own window](<./parallels-windows-paint.png>).
- [SetApp](https://setapp.com/) to bring all my app subscriptions under one umbrella and serve as the primary platform for finding apps (The other is [r/macapps](https://old.reddit.com/r/macapps)). I am only going to talk about the apps I use (other than the ones I already mentioned above). The others are just the ones I have installed, don't care about or am just exploring. ![setapp](<./setapp.png>)
	- [BetterTouchTool](https://folivora.ai/) - I have nothing but respect for the developer. BTT is a swiss army knife for MacOS, allowing you to go wild with hotkeys and automations. 
	- [Cleanshot X](https://cleanshot.com/) - the best screenshot tool I have found on MacOS, and has a terrible pricing model. A free alternative is [Shottr](https://shottr.cc/). If you don't care about an additional tool for your screenshots, you can make your own pasta with BetterTouchTool and the built-in MacOS screenshotting functionality.
	- [Commander One](https://commander-one.com/) - Another app with a horrible pricing model but is the only app with reliable MTP functionality. I am a MacOS / Android enjoyer, and occasionally I need to transfer files over the wire. Yes, [OpenMTP](https://github.com/ganeshrvel/openmtp) exists, but in my experience Commander One has a much more stable and reliable MTP implementation. 
	- [Gemini](https://macpaw.com/gemini) is a duplicate file finder that does the same thing as [jdupes](https://www.jdupes.com/) but with a pretty GUI.
	- [Swish](https://highlyopinionated.co/swish/) is another window manager that makes it easy to snap windows around with the trackpad. It complements Mosaic nicely [when I am on the go](<#when-i-am-on-the-go-though>).

