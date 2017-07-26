<!--
Creator: Jesse Shawl
Last Edited by: Jean, Brianna
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# ES6

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

ES6 (ECMAScript6) is the most recent version of JavaScript, and more and more tools are being converted to ES6 every day. Additionally, ES6 added many convenient and useful features to JavaScript. Taking advantage of these will make you a more effective developer.

## Learning Objectives

- Explain the history of ES and JS
- Compare/contrast features of ES5 and ES6
- Explain when to use `var` vs `let` vs `const`
- Use template literals to interpolate variables and strings
- Use deconstruction to extract values from objects and arrays
- Use default parameters and arrow functions

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- Read and write ES5-style JavaScript, including functions.
- Describe JavaScript scope.
- Explain the meaning of `this` in JavaScript. 
- For classes: explain constructor functions and prototypes; recognize prototype-based inheritance. 
- For `=>`: give an example of a "closure" in JavaScript, and explain what it does.



## Framing

Today, we are going to be looking at a new way to write Javascript by playing with some of the new features released in ES6.


The JavaScript standard is officially referred to as [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

JavaScript is so widely used that any changes would affect the whole web. Because of this, a body known as TC39 or Ecma International formally approves official versions of ECMAScript for release.

Each version contains features or changes to be added to the language. The most recent is ECMAScript6.  Most people shorten ECMAScript versions to ES, like 'ES6'.

In short, ECMAScript defines a language, and JavaScript is an implementation of that language.


#### Evolution of JavaScript

> Complete [this awesome visualization](http://shaunlebron.github.io/solar-system-of-js/#0) of the current state of the JavaScript universe

Condensed timeline:

- 1999 - ES3 released, the first widespread use of the language.
- ES4 never released, largely due to  political reasons.
- 2009 - ES5 released, what we've been writing so far in class.
- 2015 - ES6 publishe,d releasing a wide set of new features and syntax.

#### Why now?

Many plugins, frameworks, and modules still use ES5 because it can take time to refactor projects and because browser support for
the new version of the language is [still not quite universal](http://caniuse.com/#search=es6).  However, the new syntax and features
of ES6 are increasingly becoming more and more widespread among open-source projects and in the developer world at large. Also, you are very likely to see ES6 in the documentation of some technologies we use in this course.

Today is all about exploring some of the [new features](https://github.com/lukehoban/es6features) of ES6 and getting comfortable with the new syntax.

> For more backstory, we recommend checking out [this talk](https://www.youtube.com/watch?v=PlmsweSNhTw) from Brendan Eich on what he views as the future of JavaScript.

## New Features

### Block Scope

<details>
<summary>What does the concept of scope refer to in JS?</summary>

In short, the notion of which variables are available where.

</details>

---

<details>
<summary>So far in class, what is the primary way to control scope in JS?</summary>

Through the use of functions to create new local scopes.

</details>

#### `let`

So far, the primary way to control scope in an application has been through the use of functions:

```js
// es5
var a = 1;
function myFunction() {
  a = 2;
  console.log(a);
}
console.log(a);
myFunction();
```

ES6 introduces the concept of block scoping, which allows us to limit the scope
of a variable declared with `let` to a given block `{ ... }`

```js
// es6
var a = 1;
{
  let a = 2;
  console.log(a);
}
console.log(a);
```

You're more likely to see `let` declarations inside an `if` or `for` block:

```js
//es5
for(var i = 0; i < 10; i++){
  console.log(i)
}
console.log("outside loop:", i)

// versus

//es6
for(let j = 0; j < 10; j++){
  console.log(j)
}
console.log("outside loop:", j)
//throws an error
```

`let` is great for temporary variables that don't need to last through the entire function.  

Unlike with `var`, `let` or `const` will throw an error if you redeclare the same variable within the scope.

#### `const`

ES6 introduces another keyword for declaring variables: `const`

`const` is an identifier for variables that won't be reassigned:

```js
const a = 1;
a = 2;
// Throws an error in chrome
const a = 2;
// throws an error
var a = 2;
// throws an error
```

`const` is also block scoped.

#### You do: Block Scope Exercises

Complete exercises 1 and 2 in the exercises folder.


### Template Literals

We previously used "concatenation" to insert variables into strings.

```js
var name = "Inigo Montoya"
var killee = "my father"
var prepareTo = "die"

console.log("Hello. My name is "+ name + ". You killed " + killee +". Prepare to " + prepareTo + ".")
```

In ES6, we can "interpolate" strings with variables using template literal syntax. You'll recognize template literal strings because they're surrounded by backtics (`\`\``).

```js
let name = "Inigo Montoya"
let killee = "my father"
let prepareTo = "die"

console.log(`Hello. My name is ${name}. You killed ${killee}. Prepare to ${prepareTo}.`)

```

There are serious security issues with inserting user input into your code.


#### You do: Template Exercise

Complete exercise 8.

### Default parameters

<details>
<summary>How would you set a missing argument in an ES5 function?</summary>

The way we previously dealt with optional arguments in JavaScript was with the `||` operator:

```js
function hello(name){
  name = name || "stranger";
  console.log("Hello, " + name);
}

hello() // Hello, stranger
hello("Jessie") // Hello, Jessie!
```
</details>


With ES6, we now have the option add set a default value directly as part of the functions' parameters.

```js
function hello(name = "stranger"){
  console.log("Hello, " + name)
}

hello() // Hello, stranger
hello("Jessie") // Hello, Jessie
```

One of the main benefits is that this makes it easier to allow optional arguments that might be falsy. As an example, what could go wrong with the ES5 optional argument strategy in the function below?

```js
function pluralize(baseWord, suffix){
  suffix = suffix || 'es';
  return baseWord + suffix;
}

console.log(pluralize('shrimp', ''));
```

<details><summary>How could you handle intentionally falsy argument values with the ES5 strategy that relies on the `||` operator?</summary>
You could more specifically check whether the argument is `undefined`:

`suffix === undefined ? 'es' : suffix`
</details>

#### You do: Default Parameters Practice

Complete exercises 3 and 4 in the exercises folder.


### Arrow Functions

Arrow functions are a new shorthand syntax for defining anonymous functions:

```js
// es5
var foods = ["pizza","mac n cheese","lasagna"]
foods.forEach(function(food){
  console.log("I love " + food)
})

// es6
let foods = ["pizza","mac n cheese","lasagna"]
foods.forEach( food => console.log(`I love ${food}`) )
```

If there is more than one parameter for the anonymous function, the parameters have to be wrapped in parentheses.

```js
let foods = ["pizza","mac n cheese","lasagna"]
foods.forEach( (food,i) => console.log(`My #${i} favorite food is ${food}`) )
```

Arrow functions also have the benefit of not creating a new value of `this` inside the function ([read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this)). Compare the two code samples below.  

```js
// es5
var pizza = {
  temperature: 0,
  toppings: ["cheese", "ham", "pineapple"],
  bake() {
    setInterval(function(){ // note that the setInterval function belongs to the window object
      this.temperature++
    }, 1000)
  }
}

// es6
var pizza = {
  temperature: 0,
  toppings: ["cheese", "ham", "pineapple"],
  bake() {
    setInterval( () => {
      this.temperature++
    }, 1000)
  }
}

pizza.bake();
console.log(pizza.temperature);
```

Additionally, the `return` statement is not needed with **single line** arrow functions. There is an implicit return.

```js
// es6
let add = (x, y) => x + y
add(2, 3) //5
```

```js
// es5
function subtract(x,y){ x+y } // es5 needs explicit return
subtract(2, 3) // undefined
```

If the arrow function is multi-line, you still need to explicitly return:

```js
let add = (x,y) => {
  return x + y
}
add(2,3)
//undefined in console
```

The single line return can be faked by wrapping the expression in parentheses:

```js
let add = (x,y) => (
  x + y
)
```

#### You do: Arrow functions

Complete exercise 10.



### Destructuring

"Destructuring" is a kind of assignment that makes it possible to pull out multiple variables from data inside arrays and objects.

Here's an array example:
```js
let [a,b] = [1,2]
a //= 1
b //= 2
let nums = [1,2,3,4,5]
let [first, second, third] = nums
first //= 1
second //= 2
third //= 3
```

And an example with an object:

```js
var user = {
   id: 1,
   name: "Bob",
   age: 43 ,
   profile_url:  "http://api.co/users/1",
   location: "DC"
}
```

#### You do: Destructuring Practice

Complete exercise 5.

### Concise Object Properties and Methods

ES6 allows us to shorten object literals in a few ways.

First, we can omit `function` for method definitions within object literals.  

```js
// es5
var car = {
  drive: function(){
    console.log("vroom")
  }
}
```

Spot the differences between the ES5 code above and the ES6 code below.

```js
// es6
let car = {
  drive(){
    console.log("vroom")
  }
}
```

Second, when a key is the same as the variable storing the value, there's a new shorthand for that as well.

```js
// es5
var x = 1
var y = 2
var obj = {x:x, y:y}


//es6
let x = 1
let y = 2
let obj = {x,y}
```

We can combine these features to rewrite some function definitions. What is happening below?

```js
// ES5
function greetUser (user) {
  console.log("Hello " + user.name + ", how's the weather in " + user.location)
}

// In ES6 becomes

function greetUser ({ name, location })  {
  console.log("Hello " + name + ", how's the weather in " + location)
}

// You would call both by using: greetUser(user) if you have a user variable
// set up with the proper structure.
```

#### You do: Concise methods and properties practice

Complete exercise 6.


### Classes  
ES6 adds class-based object-oriented programming. Click to expand more information about ES6 classes.

Classes in ES6 are defined as "syntactical sugar" on top of the prototypal patterns.

```js
// es5
function Animal(name){
  this.name = name
}
Animal.prototype.speak = function(){
  console.log("my name is " + this.name)
}

function Dog(name){
  this.name = name
}
// prototype-based inheritance
Dog.prototype = new Animal()

var lassie = new Dog("lassie")
lassie.speak()
```

```js
// es6
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

// class-based inheritance
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var lassie = new Dog("lassie")
```

#### You do: Classes

Practice with ES6 classes to complete exercises 12 and 13. 


### Modules  

ES6 added built-in support for modules to help organize code on a larger scale. This feature is not avialable in browsers (yet), but many libraries support it. 

Node.js has a module structure with `export` and `require`, like this:

```js
// ES5
// routes.js file
module.exports = {
  index: function(){
    console.log("index route");
  }
}
// app.js
var routes = require("./routes.js");
routes.index();
```

ES6 modules are not the same ([read more here](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)).  They have named `import`s and `export`s, which allow us to import functions and
objects with a name tied to them:

```js
// ES6
// routes.js
export function index(){
  console.log("index route")
}
export function show(){
  console.log("show route")
}
```

```js
// app.js
// import just a few of the exports from a module
import {index, show} from 'routes'
index()
show()
```

```js
// ES6
// import everything from a module
import * as routes from 'routes'
routes.index()
routes.show()
```


```js
// ES6
// export a single value
export default function twice(x) {
  return x * 2;
}
```


## Legacy Browser Support

Support for ES6 is great! - https://kangax.github.io/compat-table/es6/

If you need to support a legacy browser, check out the following tools:
- [Traceur](https://github.com/google/traceur-compiler/wiki/Getting-Started)
- [Babel](https://babeljs.io/)

## Resources

- [ES6](http://webapplog.com/es6/)
- [You Don't Know ES6](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)
- [Block Scope](https://www.sitepoint.com/joys-block-scoping-es6/)
- [Destructuring](http://www.2ality.com/2015/01/es6-destructuring.html)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)

## Additional Practice

### Template Literals  
There are serious security issues with inserting user input into your code. Complete exercise 9 to learn about and practice a more secure approach.

### Getters and Setters  
ES6 adds special support for getter and setter methods for objects.  Research getters and setters, and complete exercise 7. If you've done exercise 13, also complete exercise 14. <details><summary>Click to expand more information about getters and setters.</summary>

Getters and setters in ES6 allow us to define pseudo-properties on objects.

Consider the following example:

```js
let person = {
  firstName: "Jesse",
  lastName: "Shawl",
  get fullName(){   // creates a reader for person.fullName
    return this.firstName + " " + this.lastName
  },
  set fullName(newName){ // creates a writer for person.fullName
    var names = newName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
  }
}
person.fullName = "j dog" // notice -  no parentheses
```
</details>


### Spread operator  
The spread operator `...` allows an expression to be expanded into multiple elements. Complete exercises 11. <details><summary>Click to expand more information about the spread operator.</summary>
This is useful for separating an array into individual elements:

```js
var dimensions = [10, 5, 2];
var volume = function(height, width, length){
  return height * width * length;
}

// es5
volume(dimensions[0], dimensions[1], dimensions[2]);

// es6
volume(...dimensions);
```

This also makes it very easy to create copies of an array for functions where we want to modify data without changing the input array:

```js
var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
function reversedDays(arr){
  return arr.reverse();
}
// this returns a reversed version of the days array, ...
console.log(reversedDays(days))
// ... but now the original days array is reversed, too
console.log(days)
```

There are strategies to fix this in either version of JavaScript.

```js
// es5
function reversedDays(arr){
  var newArray = [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i]);
  }
  return newArray.reverse();
}

// es6
function reversedDays(arr){
  return [...arr].reverse()
}

// either way, we are now keeping the original days array in order
console.log(reversedDays(days))
console.log(days)
```
</details>


## Keep Going

There are lots more features of ES6 that we have not covered:

- [Symbols](http://es6-features.org/#SymbolType)
- [Iterator & `for..of` operator](http://es6-features.org/#IteratorForOfOperator)
- [Generators](https://davidwalsh.name/es6-generators)
- [Proxies](https://ponyfoo.com/articles/es6-proxies-in-depth)
- [Reflection and meta-programming](http://www.2ality.com/2011/01/reflection-and-meta-programming-in.html)
