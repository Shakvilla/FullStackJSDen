
## **Lexical Structure of Javascript**

Every language has a set of rules that govern how to fluently speak the language. How to pronounce certain words, how to spell, etc. Let’s apply this analogy to programming languages too. Every programming language has some set of rules that spell out how we write and execute code in the language. This set of rules specifies how we declare variables, write comments, separate two lines of code from each other, should use reserved words etc. In this chapter, we will have a look at the low-level Javascript syntax. A better understanding of the Javascript lexical structure will help us become better Javascript developers. We will cover;

- Statements / Expressions
- Comments
- Whitespaces
- Identifiers
- Reserved Words
- Semicolons
- Unicode

{% callout %}
Javascript borrows a lot of low-level syntaxes from other languages like Java, C++, C, Awk, Perl, and Python but still differs in some other ways from these languages.
{% /callout %}

### **Statements / Expressions**

A statement refers to a block of code that instructs the Javascript engine, to perform a particular task. Statements are separated by a semicolon `;` in Javascript. We will discuss semicolon in the following sections. Even though semicolon is optional, we must add semicolon to separate multiple statements that are written in one line. And it is considered a best practice to always add a semicolon in our Javascript code. The code below declares two variables `firstName` and `lastName` which are assigned values `“John”` and `“Doe”` respectively.

```jsx
let firstName = "John"; let lastName = "Doe";
console.log(firstName, lastName);
```

### **Case Sensitivity**

Javascript is case-sensitive, what this means is that variables, function names, identifiers, and reserved words must be declared and called using a consistent capitalisation of letters. Example;

```jsx
let firstName = "John"
```

The variable `firstName` is not the same as `FirstName, FIRSTNAME, and firstname` and a violation of this syntax rule will result in an error. So we must always watch out for this kind of mistake.

### **Comments**

Comments give us the ability to add hints in our code for our reference or any developer who is reading our code. This part of the code will be ignored by the Javascript engine and will not be executed. Adding comments to your code is very vital and considered very good practice for readability and understanding of the code. 

We write lots and lots of lines of code when building a real world application and we sometimes lose track of what each line of code is doing, so commenting our code will help us or any developer understand what the code is doing. There are two popular ways of adding comments in Javascript;

- **Single-Line Comments**
    
    We use two forward slashes  (`//`) to implement a single-line comment in Javascript. Any texts that follow the two forward slashes will be commented and ignored by the Javascript engine. Example;
    
    ```jsx
    // this is a single-line comment. this will be ignored by the engine
    // you can write multiple comments like this.
    ```
    
  {% callout %}
     Note: single-line comments always work in one line of code, if you have multiple comments, consider using multi-line and just bring the two forward-slashes in the next line.
  {% /callout %}    
    
- **Multi-Line Comments**
    
    We use multi-Line comments to write long comments and comments that we will possibly need multiple lines to implement. To add multi-line comments, we use a forward slash with asterisks `/*`  as the start and ends with the opposite `*/`. Example;
    
    ```jsx
    /*
    * This is a multi-line comment. Use this to add multiple lines of comments in * your code.
    */
    ```
    
    {% callout %}
    Note: You might also see a third type of comment syntax at the start of some JavaScript files, which looks something like this: `#!/usr/bin/env node`.This is called hashbang comment syntax, and is a special comment used to specify the path to a particular JavaScript engine that should execute the script. See [Hashbang comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) for more details.
    
    {% /callout %}
    

### **Whitespaces**

In Javascript, whitespaces allows us to add spaces between characters. We use tab, New Line, Carriage return, and space to add whitespaces to our code. The JS engine ignores whitespaces. Whitespaces are often used to format our code to make it readable. Example of code without whitespaces;

```jsx
function fullName(firstName, lastName){console.log(firstName, lastName)}; fullName("John", "Doe")
```

The code above doesn’t have whitespaces and we can see that if we write thousands of lines of code in this format, we will find it difficult to read our code. Let’s have a look at the same example with whitespaces.

```jsx
function fullName(firstName, lastName){

	console.log(firstName, lastName);
};

fullName("John", "Doe");
```

### **Identifiers**

An identifier simply refers to a name of a constant, variable, function, classes, properties and labels for certain loops. An identifier can begin with an underscore(`_`), a dollar sign `$` a letter from `a-z` or `A-Z` and the following character can be any letter, `a-z` or `A-Z`, numbers (`0-9`), underscore(`_`) and dollar sign (`$`).

Note: Digits are not allowed to begin an identifier, this is for the JS engine to distinguish identifiers from numbers. Examples of acceptable identifiers in Javascript may include, 

`a`, `country`, `_code`, `$country`, `m23` etc.

### **Reserved Words**

Javascript has some keywords that are reserved for specific usages in the language. These reserved words cannot be used as identifiers for constants, variables, function names, or classes. 

The table below contains reserved keywords in Javascript based on [ecma262](https://tc39.es/ecma262/#sec-intro)

| let | as | const | if | export | break |
| --- | --- | --- | --- | --- | --- |
| null | void | function | class | async | await |
| continue | extends | import | false | in | set |
| catch | delete | for | while | do | else |
| from | debugger | return | throw | target | yield |
| case | new | switch | typeof | try | var |
| this | with | instanceof | static | default | true |
| finally | of | super | char | synchronized | volatile |
| protected | private | short | long | native | float |
| final | interface | eval | boolean | arguments | byte |
| enum | int | float | package | public | double |