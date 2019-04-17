# TS instanceof bug

This repo demonstrates a bug in the Typescript compiler that causes an indentical piece of JS code run through `tsc` to produce a different result than executing the code as is.

Creating a class that extends the `Error` constructor causes a bug in `instanceof` where an object created using the new class isn't an instance of the class itself.

Running the JS code directly with `yarn run-js` outputs

```javascript
true
true
true
```

While transpiling the code with `tsc` using the script `yarn run-ts` outputs

```javascript
true
true
false
```

In other words, the test case `new Y() instanceof Y` fails.

This bug was found and tested using version 3.4.3 of Typescript release.
