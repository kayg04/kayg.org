---
title: SwiftData and Property Wrappers
type: 
tags:
  - area/swiftui
  - swiftui/swiftdata
date: 2025-04-05 21:30
last edited: 2025-04-05 21:30
uid: 20250405213004
---
## Concept  

- SwiftData is Apple’s modern persistence framework, designed to be Swift-friendly.  
- It uses property wrappers to define how properties are stored. Examples include:
  - `@Attribute` (which can accept parameters such as `.unique` or `.defaultValue`) for persistent attributes.
  - `@Transient` (or, in some contexts, `@Ephemeral`) for properties that aren’t meant to be stored persistently.

## Example:

```swift
struct MyModel {
    @Attribute(.unique) var id: UUID
    @Attribute(.defaultValue(0)) var count: Int
    @Transient var tempValue: String  // temporary value not stored persistently
}
```

## Sources  

- [Hacking with Swift - Introducing SwiftData](https://www.hackingwithswift.com/articles/216/introducing-swiftdata)  
- [Apple Developer Documentation](https://developer.apple.com/documentation/)
