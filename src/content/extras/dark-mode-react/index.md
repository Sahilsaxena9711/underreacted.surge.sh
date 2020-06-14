---
title: "Dark Mode for React Apps"
date: "11th June 2020"
description: "Make you React web application support Dark Mode"
sno: 2
---


Dark Mode is the new cool when it comes to modern age web applications.
Ever since Dark Mode was introduced everyone is keen to have it on their application.

Well to be honest it is quiet simple to implement, I recently added such functionaity in one of my project and thought that wouldn't it be helpful to create a such a package which servers this purpose.


##### I present to you [Blacked](https://www.npmjs.com/package/blacked)

#### What is Blacked?
It's a minimal library that enables the dark mode functionality in react apps. Let’s check out.

#### Installation

```
npm install blacked or yarn add blacked
```

#### Usage

- Import Blacked
```
 import Blacked from 'blacked';
```

- Wrap your component
```
<Blacked>
    <ComponentName />
</Blacked>
```

#### Props

position : (top-right, top-left, bottom-right, bottom-left)

//default is "top-right"

Example :-
```
<Blacked position={"top-right"}>
    <ComponentName />
</Blacked>
```

Thats it! Its that easy to implement in your web applicantion.