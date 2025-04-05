---
title: SwiftUI Navigation with `NavigationStack` and `NavigationLink`
type: 
tags:
  - area/swiftui
  - swiftui/navigation
date: 2025-04-05 21:20
last edited: 2025-04-05 21:21
uid: 20250405212024
---
## Concept  

- `NavigationStack` creates a navigation context for your views.  
- `NavigationLink` is used to push a new view onto the stack when tapped.

## Example

```swift
NavigationStack {
    List(items, id: \.self) { item in
        NavigationLink(destination: DetailView(item: item)) {
            Text(item)
        }
    }
}
```

## Sources  

- [Apple SwiftUI - NavigationStack](https://developer.apple.com/documentation/swiftui/navigationstack)  
- [Apple SwiftUI - NavigationLink](https://developer.apple.com/documentation/swiftui/navigationlink)