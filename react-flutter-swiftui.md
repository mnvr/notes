---
title: React, Flutter and SwiftUI
description: 3 hello worlds
date: 2024-01-10
---

# React, Flutter and SwiftUI

_3 hello worlds_

React has become pervasive. React, the library, may flourish or not, but React,
the idea, has had an big impact.

Here is hello world in React:

```js
function Counter() {
  const [c, setC] = useState(0);
  const handleClick = () => setC(c + 1);
  return <button onClick={handleClick}>{c}</button>;
}
```

In SwiftUI:

```swift
struct Counter: View {
  @State var c = 0
  var body: some View {
    Button("\(c)") { c = c + 1 }
  }
}
```

And in Flutter:

```dart
class Counter extends StatefulWidget {
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _c = 0;

  @override
  Widget build(BuildContext context) {
    return TextButton(
        onPressed: () { setState(() { _c++; }); },
        child: Text('$_c'));
  }
}
```

React started with classes, then evolved to its current function components.
While hooks and function components are an evolution of the same concept, there
was something smothering about the class based approach for me. I feel it is
only with function components that React, the idea, finally come to its full
fruition.

There are traces of this evolution are in React's copies too. Flutter forked
React before function components were the vibe, and so it still lives on in the
class based (and in my opinion, inferior) approach. SwiftUI forked after
function components, and that’s the DNA it reflects.

At the surface level, SwiftUI might look like it uses the class based approach,
but that’s not the case - those SwiftUI structs are actually stateless, and what
looks like an inheritance from "View" is protocol conformance. So the
`struct Counter: View` in the SwiftUI example above can be thought of as
equivalent to the stateless JavaScript functions that form React components.

A part of the practical popularity of React comes because of JSX, which is an
elaborate macro system built on top of JavaScript. The "React-y code" we write,
JSX, is transformed by bundlers into the actual JavaScript that gets sent to the
browser.

This same pattern also happened in SwiftUI, where the powers to be changed the
language itself to add “ViewBuilders”, Swift's JSX-y macro analogue.

> React itself is similar to how Haskell deals with the problem of doing I/O in
> a purely functional language. What seems like a logical impossibility can be
> solved with the clever mathematics of category theory, giving us the IO monad.
