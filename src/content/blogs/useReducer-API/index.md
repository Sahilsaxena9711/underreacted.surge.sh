---
sno: 4
title: "Use Reducer then, useReducer &#x2693; now.."
date: "13th June 2020"
description: "Have you ever useReducer?"
---

<br />

With the introduction of Hooks &#x2693; in React 16.8. many cool features were also made available. Hooks are the new cool cause 
they are easy to implement as compared to Class Component in React. 

The built-in Hooks in React are as follows:
- Basic Hooks
    - `useState`
    - `useEffect`
    - `useContext`
- Additional Hooks
    - `useReducer`
    - `useCallback`
    - `useMemo`
    - `useRef`
    - `useImperativeHandle`
    - `useLayoutEffect`
    - `useDebugValue`

Well that's how the [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html) categorize it.<br/>
In this post we are going to talk about the usage of `useReducer` Hook in React. If you are not too familiar with the concept 
of Hooks you can read this [documentation](https://reactjs.org/docs/hooks-intro.html). So let's learn what useReducer is all 
about.
<br/>
<br/>
<br/>

### How to useReducer?
```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

An alternative to `useState` is useReducer, Accepts a reducer of type `(state, action) => newState`, and returns the current 
state paired with a `dispatch` method. (If you’re familiar with Redux, you already know how this works. If not take this for [reference](https://redux.js.org/introduction/getting-started))<br/>
useReducer is preffered over useState when it comes to complex state logic which involves multi-sub values.
<br/>
<br/>
<br/>

#### Syntax
Look at this counter example for reference:
```jsx
const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
} 
```
<br/>

##### Okay let me break it down for you:
- At first we will create a constant `initialState` which will be the initial state of the reducer,

```jsx
const initialState = {count: 0};
``` 
<br/>

- Now we will create a `reducer` function which contains our state manipulation logic, The `reducer` function
takes two arguments `state` (current state of the reducer) and `action` (payload that you can pass to 
this function to performing a state logic).

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}
```
<br/>

- At the end we will create a Functional Component `Counter` and call the useReducer Hook and pass in the `reducer` 
and `initialState` to it, we will destructure `state` and `dispatch` method from it. Now we will call the dispatch 
method on each button click with different action type in-order to increment and decrement the counter, in addition 
to display the counter value we will display it like so `{state.count}`.

```jsx
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```  
<br/>

And that's really what useReducer Hook is all about. Apart from the fact that you can make much more complex structures
within it's
state and playaround with it.
<br/>
<br/>

Hope you liked the post and also it helps you in one way or the other to understand the concept of useReducer Hook and it's usage.
