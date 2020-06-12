---
sno: 3
title: "Functional vs Class-Components in React"
date: "12th June 2020"
description: "Which is better class or functional components? \nLets find out!"
---

![Functional vs Class-Components](https://miro.medium.com/max/2698/1*QHPqOp2yWWJNZkEZAgKT8A.png)

#### The battle is real &#x2694;  
<br />

In this post I will show you the difference between a class component and function component.
<br/>
<br/>
Before diving if you want a brief introduction to React components 
you can refer to this [documentation](https://reactjs.org/docs/components-and-props.html).
<br/>
<br/>
Basic syntax for a functional component in React looks something like:
```javascript
const Example = (props) => {
    return <h1>Howdy!</h1>;
}
```
Class based component in React looks like:
```
class Example extends React.Component {
    render() {
        return <h1>Howdy!</h1>;
    }
}
```
Both versions are equivalent and will give you the exact same output.
Now you might ask yourself: “When should I use a function and when a class?”
<br/>
------------------------------------
<br/>

### Differences between functional and class-Components
#### State
As we know state is the basic building block of a component. Before [Hooks](https://reactjs.org/docs/hooks-intro.html) 
was introduced in React `(before React 16.8.)` functional component in react didn't comprise of state. So if you wanted
a state in you component you either needed a class component or you lift the state up to the parent component and pass
it down to the functional component.

Functional component with state after introduction of Hooks `(after React 16.8.)` looks like:
```
import React, { useState } from "react";

const Example = (props) => {
    const [count, setCount] = useState(0);
    return <div>
        <h1>You clicked {count} times</h1>
        <button onClick={() => setCount(count + 1)}>
            Increase Count
        </button>
    </div>;
}
```

Class Component with the same functionality looks like:
```
import React from "react";

class Example extends React.Component {
    state = {
        count: 0
    }
    render() {
        const { count } = this.state;
        return <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => this.setState({count: count + 1})}>
                Increase Count
            </button>
        </div>;
    }
}
```
<br/>

#### Life Cycle 
Another important feature of components which was missing from function components before Hooks came into play.
After Hooks functional components are now able to show the same life cycle evnts.

Life Cycle events in functional components `(after React 16.8.)`
```
import React, { useEffect } from "react";

const Example = () => {

    useEffect(() => {
        console.log("This works like componentDidUpdate");
    });

    useEffect(() => {
        console.log("This works like componentDidMount");
    }, []);

    useEffect(() => {
        return () => {
            console.log("This works like componentWillUnmount)
        };
    });

    return <h1>Howdy!</div>;
}
``` 
Life Cycle events in a class component look like:
```jsx{3,6,15}
import React from "react";

class Example extends React.Component {

    componentDidMount() {
        console.log("This will print after the component is mounted"):
    }

    componentDidUpdate() {
        console.log("This will print after averytime the component is updated/re-rendered"):
    }

    componentWillUnmount() {
        console.log("This will render when the component is unmounted")
    }

    render() {
        return <h1>Howdy!</div>;
    }
}
```
<br/>

#### So which one should you use?
Well I'll leave that upto you to choose by putting forward some facts :
- You end up with less code when you choose functional components.
- Functional components are much clear and easy to understand as it is more similar to functions in JavaScript.
- Complex class components become hard to understand.
- Classes confuse both people and machines, With classes you need to understand binding and the context in which functions are called, which often becomes confusion
- Functional component can be memoized in a similar way as `React.PureComponent` with Classes by making use of `React.memo` and you can pass in a comparator function as the second argument to `React.memo` that lets you implement a custom comparator.
- Functional components can potentially have a better performance
- Functional components are easy to debug
- Functional components are more reusable
<br/>
<br/>

##### That's all for this post, hope you'll choose wisely!