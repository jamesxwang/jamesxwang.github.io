---
title: Advanced JavaScript
date: 2019-09-15 16:12:15
tags: [JavaScript]
categories: ["Study Notes", "Front End"]
---

This article records Javascript questions that I think is important but often ignored by people.
![JavaScript](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/js/JavaScript.jpg)

<!-- more -->

---

# Array.prototype.map()
```js
['1', '2', '3'].map(parseInt)

what & why ?
```

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. See more in [Array.prototype.map() | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```js
const arr = [1, 2, 3];
arr.map((num) => num + 1); // [2, 3, 4]
```

For each iteration map, `parseInt()` passes two parameters: string and index. So the code actually executed is:
```js
['1', '2', '3'].map((item, index) => {
	return parseInt(item, index)
})
```
This will return
```js
parseInt('1', 0) // 1
parseInt('2', 1) // NaN
parseInt('3', 2) // NaN, 3 cannot be divided by 2
```
So:
```js
['1', '2', '3'].map(parseInt)
// 1, NaN, NaN
```
In order to achieve the function we want, we could do this:
```js
['1', '2', '3'].map(Number)

OR

['1','2','3'].map(n => parseInt(n,10))
```

---

# extends
```
Difference of extends method between ES5 and ES6 
```

## ES5

* Prototype Inheritance

```js
// Parent
function Parent (name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  return this.name;
}

// Children
function Children() {
  this.age = 24;
}

// Prototype extension
Children.prototype = new Parent('James');

// Children.prototype.constructor === Parent.prototype.constructor = Parent
var test = new Children();

// test.constructor === Children.prototype.constructor === Parent

test.age // 24
test.getName(); // James
```
We can find that the whole inheritance process is delegated through the pointing between prototype chains until the final result of "constructed by constructors" is formed.

* Constructor Inheritance

```js
// Parent
function Parent (name) {
  this.name = name;
}

function Children () {
  Parent.apply(this, arguments);
}

var test = new Children('Kiki');

test.name // Kiki
```

The key of constructor inheritance is to get the members and methods of the parent class on the newly created objects in the future by calling the parent class inside the child class, that is, by using the apply() or call() method.



## ES6
```js
class Father {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name:${this.name}， Age: ${this.age}`);
  }
};

class Son extends Father {};
let son = new Son('James', 24);

son.show(); // Name: James, Age: 24
```