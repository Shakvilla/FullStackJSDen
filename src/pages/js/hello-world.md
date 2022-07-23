---
title: Hello World
description: Our First Javascript Code
---


## **Writing your first code in Javascript ?**

### Hello World!

Every programming language is governed by certain syntaxes, and violation of these syntaxes would result in errors, and Javascript is not an exception. In the previous section, we added some code in the web dev console, which printed `Hello World!` to the console. That was just to explain how you can execute your code in the console,  because once you reload the browser page, your work will be lost, which is really bad. So if we need to build real world Javascript applications, then we need to write them in a file with the `.js` extension or even add our code in an `html`file. 

In this tutorial, we will learn how to embed Javascript into an html page. We embed Javascript into `HTML` page by using the `<script>` element. There are two ways we can use the `<script>` element in an `HTML` Page.

- Embedding Javascript code directly in  html file
- Writing your code in an external file and referencing in the `html`

**Embedding Javascript Code Directly in HTML File**

If you wish to quickly test a proof of concept, then you can use this approach but it is generally not recommended for real-world projects. The code snippet below shows how you can do this. Create an `index.html` file and copy and paste the code below

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script in Head Tag</title>
  <script>
    function helloWorld(){
  alert('Hello World')
}
  </script>
</head>
<body>

	<p>Click on the click me button to display Hello World!</p>

  <button type="button" onclick="helloWorld();">Click Me</button>

</body>
</html>
```

The code above will display `Hello World` in the page. Now let’s try to understand what is happening here. 

We assume you already have some basic experience with HTML and CSS. If you don’t have experience with HTML. Click on this [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) to learn more. So we won’t explain the HTML part.

The `<script>` element tells the browser that the code within this `tag` is Javascript and should be executed as such.

Don’t worry about  `document.getElementById("test").innerHTML` for now, by the time you are done with this course, you will have a better understanding of each element.  The `"Hello World";` part of the code is what will be printed on the browser. Notice how I have added a semi-colon `;` at the end of the Statement. In Javascript, we specify the end of a statement by adding a semi-colon. Even though this is optional when you always move to the next line to write the next statement, but if you have multiple statements in one line, then the semi-colon must be specified to tell the browser that the line contains multiple statements and the semi-colon indicates the end of each statement.

{% callout %}
💡 Note: Statement simply refers to instructions in Javascript and are separated by the `;`
{% /callout %}



**Writing your code in an external file and referencing in the HTML file.**

Another way and perhaps the best way of adding Javascript to HTML is writing your code in a separate file with the extension of `.js` and referencing it in your HTML file. The `<script>` is used to pull in the Javascript code into the html. 

We will use the same example above but we shall extract the code within the 

`<script></script>` into an external file named `app.js`

- Create a file with the extension `.js` so we will have `app.js`
- Copy and paste the code below in your `app.js`

```jsx

function helloWorld() {
  document.getElementById("demo").innerHTML = "Hello World.";
}
```

- Now add this code in the `index.html`  file by editing the `<script>` tag like so;

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script in body</title>
</head>
<body>

	<p>Click on the click me button to display Hello World!</p>

  <button type="button" onclick="helloWorld();">Click Me</button>

  <script src="./app.js"></script>
</body>
</html>
```

You can notice that now we have put the code in a function `helloWorld()` don’t worry if you don’t understand these yet, we will discuss it in a jiffy.

**Where to place the <script> element.** 

The script element can be added in the `<head>` tag, this works well for when you don’t have multiple `.js` files in your application. Javascript loads files from top to bottom, so when you have multiple files, your browser will have to wait until the first file finishes loading before loading the next file. This might cause a lot of issues for you. The solution to this is to add your files at the bottom, just before the `</body>` tag. This will prevent the blank page your might be getting as a result of your code being loaded late.

**The `async` and `defer` attributes.**

In modern applications, Javascript codes are often heavier than `html`  and this usually causes the browser to spend more time trying to process the scripts. The browser has wait for the scripts to be downloaded, execute it and then continue with rendering the rest of the page. 

There are two `<script>` element attributes that can help us with this issue,  and they are `defer` and `async`

- **defer**
    
    This attribute tells the browser not to wait for the script, but instead go ahead and load the HTML and build the DOM. The script loads in the background and then executes when the DOM is fully built. To do this, we simply add the `defer` attribute to the `<script>`  like so
    
    ```jsx
      <script defer src="./app.js"></script>
    ```
    
- **async**
    
    > Scripts loaded using the `async` attribute will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. You get no guarantee that scripts will run in any specific order. It is best to use `async` when the scripts in the page run independently from each other and depend on no other script on the page.
    > 
    
    To do this, we simply add the `async` attribute to the `<script>`  like so
    
    ```jsx
      <script async src="./app.js"></script>
    ```