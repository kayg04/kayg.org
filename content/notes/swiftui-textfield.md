---
title: SwiftUI User Input with `TextField`
type: 
tags:
  - area/swiftui
  - swiftui/textfield
date: 2025-04-05 21:17
last edited: 2025-04-05 21:18
uid: 20250405211746
---
## Concept  

- A `TextField` captures text input by binding its content to a `@State` variable.  
- The `$` operator creates the binding, ensuring the state updates as the user types.

## Example

```swift
struct InputView: View {
    @State private var text: String = ""
    var body: some View {
        TextField("Enter text", text: $text)
    }
}
```

## Source  

- [Apple SwiftUI - TextField](https://developer.apple.com/documentation/swiftui/textfield)