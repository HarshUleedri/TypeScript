/* Q1: What will be the inferred type of the following variables?

typescript
let count = 10;
let message = "Hello, TypeScript!";
let isComplete = false;
*/

function double(arg: number) {
  return arg * 2;
}

function multiply(a: number, b: number): number {
  return a + b;
}

interface user {
  name: string;
  age: number;
  isAdmin: boolean;
}
var user1: user = {
  name: "harsh",
  age: 24,
  isAdmin: true,
};
