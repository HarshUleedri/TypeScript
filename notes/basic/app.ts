//Q2: Write a function greet that takes a string parameter and returns a greeting message in the format: Hello, {name}!

function greet(name: string): string {
  return `hello ${name}!`;
}
greet("harsh");

//Q3: Create an array scores of numbers and initialize it with values [10, 20, 30].
let arr: number[] = [1, 2, 3, 4];
let arr2: Array<number> = [1, 2, 3, 4];
let arr3: string[] = ["harsh", "Ramesh", "Uleedri"];
let arr4: (string | number)[] = [1, " harsh", 34];

//Q4: Write a function getFirstElement that accepts an array of strings and returns the first element.

function getFirstElement(arr: number[]): number {
  return arr[0];
}
let num = [1, 3, 4, 5];
console.log(getFirstElement(num));

//Q5: Define a tuple user that contains a string (username) and a number (age). Initialize it with appropriate values.

let user: [string, number] = ["harsh", 24];

//Q6: Write a function swap that accepts a tuple of [number, string] and returns a tuple of [string, number].

function swap(tuple: [number, string]): [string, number] {
  return [tuple[1], tuple[0]];
}
//Q7: Create an enum Role with values Admin, User, and Guest.
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
  member = 12,
}
Role.Admin;

/*Q8: Write a function getRoleMessage that takes a parameter of type Role and returns a message:

"Welcome Admin" if Role is Admin.
"Welcome User" if Role is User.
"Welcome Guest" if Role is Guest.
*/
type role = "admin" | "user" | "guest";

function getRoleMessage(obj: role): string {
  switch (obj) {
    case "admin":
      return "your welcome admin";
    case "user":
      return "your welcome user";
    case "guest":
      return "your welcome guest";
    default:
      return "Unknown user";
  }
}

/*Q9: Declare a variable randomData with type any and assign it a value of any type. Write code to:

Access it without any type checks.
Cast it to a specific type. */

let random: any = "this a ramdom string";
let castedData = random as string;

console.log(castedData.toLowerCase);

let randomData: any = 242;

let numeric = randomData as number;

console.log(numeric + 6);

/*
Q10: Declare a variable unknownData with type unknown and assign it a value. Write code to:

Check its type using typeof.
Narrow its type to string and perform a string operation.
*/

let unknownData: unknown = " harsh Ramesh Uleedri";

console.log(typeof unknownData);

if (typeof unknownData === "string") {
  console.log(unknownData.toLowerCase);
} else {
  console.log("it is not a string");
}

//Q11: Write a function logMessage that takes a string and logs it to the console. Ensure the function returns void.

function logMessage(arg: string): void {
  console.log(arg);
}

logMessage("there is an error");

//Q12: Write a function throwError that always throws an error. Ensure its return type is never.

function throwError(message: string): never {
  throw new Error(message);
}
throwError("there is an error");

//Q13: Create a variable nullableValue that can hold string or null. Assign both values at different points.

let nullableValue: string | null;
nullableValue = "harsh";
nullableValue = null;

/*
Q14: Write a function combine that takes two parameters:

The first parameter can be number or string.
The second parameter can be string or boolean. Return a combined string like:
"10true" if the inputs are 10 and true. 
*/

function combine(arg1: number | string, arg2: string | boolean): string {
  return `${arg1}${arg2}`;
}

combine(10, true);


