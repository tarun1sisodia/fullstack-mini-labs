# Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Installation

To get started, you'll need to install Express in your project:

```bash
npm install express
```

## Basic "Hello World" Example

Here's a simple example of an Express application:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## Understanding `app.use()`

In Express, `app.use()` is used to mount middleware functions at a specified path. If no path is specified, the middleware is executed for every request to the router.

Syntax: `app.use([path], callback [, callback...])`

-   `path`: The path for which the middleware function is invoked.
-   `callback`: A middleware function or a series of middleware functions.

## How Middleware Works

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. The `next` function is a function in the Express router which, when invoked, executes the next middleware in the stack.

Think of middleware as a series of "checkpoints" that a request goes through before it reaches the final route handler.

### A Simple Logger Middleware

Here is an example of a simple middleware function that logs the request method and URL:

```javascript
const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

app.use(logger); // Apply the logger middleware to all routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
```

### The Middleware Chain

When a request comes in, it goes through the middleware functions in the order they are defined.

1.  Request hits the server.
2.  `logger` middleware is executed. It logs the request and then calls `next()`.
3.  Control is passed to the next function in the chain, which is the route handler for `GET /`.
4.  The route handler sends the response "Hello World!".

If `next()` is not called within a middleware function, the request will be left hanging, and the subsequent middleware or route handlers will not be executed.

This mechanism allows you to:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.
