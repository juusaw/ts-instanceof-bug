class X {}

class Y extends Error {}

console.log(new X() instanceof X);
console.log(new Y() instanceof Error);
console.log(new Y() instanceof Y);
