---
title: SwiftUI Data Flow with `@EnvironmentObject`
type: 
tags:
  - area/swiftui
  - swiftui/propertywrapper
date: 2025-04-05 21:14
last edited: 2025-04-05 21:15
uid: 20250405211430
---
## Concept  

- `@EnvironmentObject` injects shared, observable data into the view hierarchy, allowing any child view to access it without explicit passing.

## Example

```swift
class UserData: ObservableObject {
    @Published var username: String = ""
}

struct ContentView: View {
    @StateObject var userData = UserData()
    var body: some View {
        NavigationStack {
            HomeView().environmentObject(userData)
        }
    }
}
```

## Source  

- [Apple SwiftUI - EnvironmentObject](https://developer.apple.com/documentation/swiftui/environmentobject)