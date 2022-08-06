---
title: Variables in Javascript
---

## **The concept of variables.**

The concept of variables in programming is an important part of the language. Computers are machines we use to process data and output information. Before a computer can process any data, it has to be saved to memory, before the computer can process that data, this is where variables come in.

### **The `let` keyword**

A variable refers to a storage space assigned to a particular data. In the previous chapters, we have been using the `let` keyword, when the JS engine detects this keyword, preceding any value, it automatically allocates storage to hold the value for later usage. Example of creating a variable using the `let` keyword

```jsx
//Example 1:
let variableData; // undefined
	variableData = "Javascript is awesome"
	alert(variableData)
	
//Example 2:
let variableData = "Javascript is awesome"
	alert(variableData)
	variableData = "We can mutate this variable"

//Example 3:

let firstName = "John", secondName = "Doe", childName = "John Doe Jr"

// Example 4:
let variable_data = "Javascript is awesome" // camel_casing
	alert(variable_data)

//Example 5:  
let $function = "reserved word prevented" // reserved word prevented

//Example 6;
let function = "a reserved keyword used " //Uncaught SyntaxError: Unexpected token 'function’ 

//Example 7:
let _currency = "dollar"

//Example 8;
let 7days_of_the_week = "seven days make up a week" // Uncaught SyntaxError: Invalid or unexpected token
```

**In example 1**, we declared the variable `variableData` and assign no value to it, so by default, `undefined` will be assigned to it, we then call `variableData` and assign “Javascript is awesome” to it, so now the container holding the value for the variable will be updated with the new value assigned.

**In example 2**, we declared the variable and assigned the value to it right away, this will work like the first one, just that, the engine’s work has been made easier. Observe how we changed(mutated) the value of the variable. So with `let` we can reassign a different value to a variable already declared and assigned to a previous value.

**In example 3,** observe how we have declared multiple variables in a single line by using just a single `let` keyword. This is acceptable in Javascript, but this way of declaring multiple variables is not recommended. Declare each variable in a single line for the sake of readability. For example, let us rewrite example 3.

```jsx
let firstName = "John";
let secondName = "Doe";
let childName = "John Doe Jr";

```

**Example 4**,  we show how we can declare a variable using the [camelCasing](https://en.wikipedia.org/wiki/Camel_case) technique. When a variable name contains more than 2 words, it is recommended to use this casing technique. 

**In example 5**, we intentionally used a reserved keyword but the JS engine won’t complain because we added the `$` before the `function` which tells the engine to accept the variable name. 

{% callout %}
 Note: We will get the error below if we do not add the `$` sign or `_` before using any reserved keyword for our variable naming.  Like in example 6
`Uncaught SyntaxError: Unexpected token 'function’` 
Recommendation: Try to desist from using any keyword as a variable name in general.

{% /callout %}

**In example 7**, observe how the variable name starts with the underscore character. This is another way of declaring variables’ names in Javascript.

### **Naming Variables**

There are some restrictions to how we can name variables in Javascript

- Like in example 8, we can’t start our variable name with a digit. Javascript will throw a syntax error.
- We can’t use a reserved keyword as our variable name in Javascript. We can see that in example 5. If you must use a reserved keyword then add the `$` at the beginning of the variable
- Our variable names can only include digits(0-9), letters(a-z, A-Z) and symbols( `$`, `_` ). But adhere to the first point about digits
- Javascript is case sensitive, what this means is that `country` is not the same as `Country`, `COUNTRY`, `CountRY` etc. Make sure when you declare a variable, call the same variable when you want to use it and pay attention to the case.

### **The `const` Keyword**

In Javascript, we can create a constant(immutable) variable with the `const` keyword. When we are sure that the value of a variable will not change in the code, then the recommended keyword to use is `const`. This will prevent us from unknowingly changing the value of the variable later. 

```jsx
const constantVariable = "this is a constant variable and will not change" // constantVariable will always never change

const PI = 3.14159 // The PI Variable is immutable
```

As developers we strive to make our processed much easier and smooth, based on that, developers often use uppercase constants and underscores for difficult-to-remember values like colours, mathematical formulae etc and then assign the constants to variables. 

```jsx
const COLOR_BLUE = "#00F";
let primary_color = COLOR_BLUE;

const PI = 3.14159 
const radius = 4
let circumference = 2 * PI * radius
alert(circumference) // 25.13272
```

In the example above, we create a constant(immutable) colour `COLOR_BLUE` and assign that `primary_color` which is mutable. Basically, we can reassign a different constant to `primary_color` because we use `let` keyword there. 

In the second example, we create a constant variable, the value for `PI` which never changes, we create a `radius`  constant which doesn’t change as well, then calculate for the circumference of our imaginary circle. 

### **The `Var` Keyword:**

We have decided to talk about this now because this way of declaring variables is no longer widely used in modern  Javascript and I will explain to you why.

The `var` keyword is an old way of declaring variables in Javascript. This was used prior to ES6 and old browsers still work with this, but 99% of modern browsers work with `let`, `var` and `const`. When we create a variable with the `var` keyword, the variable is *function-scoped(can be accessed within the function it is declared in)* or *globally-scoped(can be accessed globally within the code).* We will explain these terms in detail later in this course. 

{% callout %}
 Note: Do not use var in your projects. This section is just for you to understand old legacy Javascript code.

{% /callout %}