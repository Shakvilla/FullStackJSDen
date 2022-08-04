---
title: Data Types
---

This chapter is a very important part of Javascript programming, just like in all programming languages. We need to understand that computer programs work by reading and manipulating texts and values. These are called `types`. Javascript has support for several data types that we need to familiarise ourselves with, to become good at Javascript. This is just an introductory section on data types, once we have some basic foundation of Javascript, we shall revisit Data types in detail.  After this chapter, we will look into variables and constants, which are fundamental to the Javascript language.

Javascript has two data types categories: *`primitive`* and *`object`* types.  The `primitive` category consists;

- String Type
- Number Type
- Boolean Type
- Null Type
- Symbol Type
- BigInt Type
- Undefined Type

{% callout %}
 A primitive value refers to an immutable(unchangeable) datum that is represented at the lowest level of the language implementation.

{% /callout %}

Any value that is not a `primitive` value is considered an `object` data type in Javascript. We will discuss each type in a jiffy 😊.  We need to understand that Javascript is loosely and dynamically typed. It means [variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and reassigned) values of all types:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

{% callout %}
 An object in Javascript refers to a collection of properties where each property has a name and a value(either a primitive value or another object).

{% /callout %}

## **Primitive Data Types**

### **String Type**

Strings in Javascript simply refer to textual values in Javascript. For instance, when we are declaring variables or constants whose values are texts, we have to declare them as Strings. 

A value of type `string` can be wrapped within single quotes `‘...’`, double quotes `“...”` or back-ticks  ``...``. Let's look at these examples below;

```jsx
let singleQuoteStr = 'This is a string wrapped within a single quote'
```

Let’s try to understand the code above. We create a variable named `singleQuoteStr` with the `let` keyword and assign `This is a string wrapped within a single quote` using single quotes. This is acceptable in Javascript and once the JS Engine parses this code, it will assign the values within the single quotes to `singleQuoteStr`

```jsx
let doubleQuoteStr = "This is a string wrapped within a single quote"
```

This code is the same as the first example but with double quotes  `“...”` instead of single quotes `‘...’`

```jsx
let backticksStr = `This is a string wrapped within a single quote`
```

Another way we can create values of string type is using the template literal ``...``. The back-ticks characters is known as *template literals* in Javascript. Template literals allows us to write multi-line strings and we can also write Javascript within template literals. Let's see how we implement this.

```jsx
let fullName = 'John Doe'

let greetings = `Good Morning ${fullName}. Welcome to FullStackJS`

 console.log(greetings);

 // prints: Good Morning John Doe. Welcome to FullStackJS

```

Notice how we use `${}` in the example above. Javascript code is always executed within a block and `{}` represents a block in Javascript. The `${}`  will inform the JSEngine that the code is within a block and must be treated as Javascript code. We will make use of this in more complex ways in this course.

{% callout %}
 Note: Strings are immutable(unchangeable), once we declare a variable or constant and assign it a value of string, we can’t modify it but we can create new strings from the existing string. For Example;

{% /callout %}

```jsx
let str = "Javascript is"

str = str + " Awesome"

// prints: Javascript is Awesome
```

### **Number Type**

Javascript uses `number` type for values that are integer and floating point numbers. If you are coming from other programming languages like C++ and Java which are statically typed languages, Javascript handles that for us. Once we create a variable or a constant, Javascript treats them as values of type `number` under the hood. For example;

```jsx
let integerValue = 12354
let floatingPoint = 15.395
```

In the first example, we assign the integer value `12354` to the variable `intergerValue`. In the second example, we assign 15.395 to the variable `15.396` which is a floating point value. 

We can also perform some mathematical operations on values of type `number` like the addition `+`, subtraction `-`, multiplication `*`, division `/` and so on.

We also have the special numeric values of `NaN`, `Infinity` and `-Infinity`. Don’t worry if these things don’t make sense to you yet, we will discuss them later in this course.

### **Boolean Type**

The boolean type has two values, which are `true` and `false`. In Javascript, there are cases where we want to just assign true or false to a `variable` or a `constant`. The variable has a type of boolean. For example

```jsx
let isConfirming = true
let isConfirmed = false
```

The code above is an example of how we can use Boolean type. To check for any value type, we can use Javascript’s built-in method `typeof()`. The code below will print Boolean as the type.

```jsx
alert(typeof(isConfirming)) // boolean
```

Booleans are mostly used in for taking decisions that require a true or false answer to execute a task. We will have a look at the Boolean in detail later in the course.

### **Null Type**

The `null` type is pretty straightforward, when we create a variable but don’t initialise(assign a value)  to it, the JS Engine reads it as a `null` value. 

{% callout %}
Note: the null type and the undefined type are very similar. They are the same, the undefined results in undefined and the null type results in null. Let’s do a little exercise

{% /callout %}

```jsx
let str = null
console.log(str) // undefined
console.log(typeof(str)) // object
```

### **Undefined Type**

When we create a variable or a constant without initialising (assigning a value ), the variable gets undefined. The `undefined` type is very similar to `null` type.

### **Null vs Undefined types**

The two are very similar and have the same effects, just a subtle difference between them.

`undefined` is Javascript’s default way of saying that the variable is *“not initialised”* or *“not existing”* but `null` means the developer is intentionally absenting the object value

### **BigInt Type**

This type was recently added to Javascript to take care of numbers that are larger than 

`2^53 - 1` and has a type of `bigint`. BigInt Values can be created by just appending `n` at the end of the integer literal or we can invoke the built-in method `BigInt()` and pass the integer or string value as an argument to it.  

```jsx
let bigIntegerValue = 9007199254740991n 

let bigIntegerValueFunction = BigInt(9007199254740991) // 9007199254740991n

typeof bigIntergerValue // bigint

typeof bigIntergerValueFunction // bigint

```

Observe the `n` at the end of the integer literal in the first example. In the second example, we invoke the BigInt function and pass the integer literal as an argument to `BigInt()`. We then as it to the `bigIntegerValueFunction` variable. We will discuss BigInt in detail later in this course

### **Symbol Type**

This data type was added in ES6. This is a special primitive type which allows us to create unique values. We create a symbol type by calling the `Symbol()` function and this creates a unique value of symbol type.

```jsx
const sym = Symbol('Javascript')  
```

## **Object Data Type**

An object in Javascript simply refer to a collection of unordered properties where each property has key-value pairs( values with corresponding keys).Object is a broad topic in Javascript and we will come back to get more understanding.  Example of an object data type.

```jsx
const emptyObject = {} 

const navigation = {
	page: "Home",
	link: "/home"
	icon: "fa-home"
} 


```

Observe how we have added content to the second example, we have provided keys and values( key-value pairs). `page` is a key and its matching value is `“Home”`.

The example above is to show us one way we create objects in Javascript. There are other ways we can create objects and we will look at them later in this course.

{% callout %}
 Note: This chapter is an introductory part on all the data types in Javascript. We will revisit all of the types in much detail with more complex code examples in subsequent chapters to come. For now, we just need a basic understanding of Javascript’s data types.

{% /callout %}