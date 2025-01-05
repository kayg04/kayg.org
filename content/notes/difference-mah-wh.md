---
title: Difference between mAh and Wh Battery Metrics
tags:
  - power
  - current
  - voltage
  - battery
date: 2024-01-17 16:53
last edited: 2024-12-28 16:45
---
## ❓ What?

- mAh is very inaccurate because it doesn't take voltage into account
	- a 5V battery with 50 Wh will have: `(50 Wh * 1000 / 5) = 10000` mAh capacity
	- a 10V battery with 50 Wh will have `(50 Wh * 1000 / 10) = 5000` mAh capacity
- mAh converts to Wh by multiplying with voltage as: `(mAh / 1000) * V`
- A higher voltage can lead to higher consumption of current, provided resistance stays the same. The relation is: `P = V * I` and `I = V / R`.
## 📖 Source

https://twitter.com/Cartidise/status/1756313496134762930?t=hBhHiBOnsNFuFmZC2sSw9w&s=19

https://www.perplexity.ai/search/Difference-between-mAh-kXlySjVoSFSVILjqmKfxKg?s=m#9179724a-3568-4854-9520-b8ea98a7f12a