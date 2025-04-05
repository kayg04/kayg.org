---
title: SwiftUI `@State` and `@Binding`
type: 
tags:
  - area/swiftui
  - swiftui/propertywrapper
date: 2025-04-05 21:11
last edited: 2025-04-05 21:17
uid: 20250405211145
---
## Concept  

- `@State` declares a view’s own mutable state. When its value changes, the view automatically updates.  
- `@Binding` lets a child view reference and modify a state value that’s owned by a parent view.

## Example

```swift
struct ParentView: View {
    @State private var isOn: Bool = false
    var body: some View {
        ChildView(isOn: $isOn)
    }
}

struct ChildView: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("Switch", isOn: $isOn)
    }
}
```

## Sources  

- [Apple SwiftUI - State](https://developer.apple.com/documentation/swiftui/state)  
- [Apple SwiftUI - Binding](https://developer.apple.com/documentation/swiftui/binding)