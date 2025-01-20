/* 
Q1: Basic Function Type Definition
Define a function add that takes two parameters: a (number) and b (number), and returns their sum as a number. Specify the function type for add.

*/

function add(a: number, b: number): number {
  return a + b;
}

const sum1 = add(2, 5);

/* 
Q2: Optional Parameters
Define a function greet that takes two parameters: name (string) and message (optional string). If the message is not provided, it should default to "Hello". The function should return a greeting message that includes the name and message.

Create examples where the message is provided and where it is not.

*/

function greet(name: string, message: string = "hello"): string {
  return `${message} ${message}`;
}

greet("harsh");
greet("harsh", "good moring");

// arrow function

const greeting = (name: string, message: string = "hello"): string => {
  return `${message} ${message}`;
};

/*
Q3: Default Parameters
Define a function multiply that takes two parameters: a (number) and b (number, default value of 1). The function should return the product of a and b. Demonstrate how to call the function with and without the second parameter.

*/

function multiply(a: number, b: number = 1): number {
  return a * b;
}

multiply(4, 3);
multiply(4);

/*
Q4: Rest Parameters
Define a function sum that takes any number of arguments (all of type number) and returns their sum. Use the rest parameter syntax (...numbers) to allow the function to handle multiple inputs.

Create an example call of the sum function with a varying number of arguments.

*/

function sum(...numbers: number[]) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 3, 4, 5, 5, 6));
console.log(sum(5, 5, 6));

/*
Q5: Overloading Functions
Define an overloaded function concat that behaves differently based on the number and type of arguments:

When the function is called with two strings, it returns a concatenated string.
When the function is called with an array of strings, it returns a single string where the array elements are joined by a space.
Provide examples for both cases: calling concat with two strings and with an array of strings.
*/

function concat(str1: string, str2: string): string;
function concat(strings: string[]): string;

function concat(arg1: string | string[], arg2?: string): string {
  if (Array.isArray(arg1)) {
    return arg1.join(" ");
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1 + arg2;
  }
  throw new Error("Invalid argument");
}

// Case 1: Concatenating two strings
console.log(concat("Hello", "World")); // Output: "HelloWorld"

// Case 2: Joining an array of strings
console.log(concat(["Hello", "World", "from", "TypeScript"])); // Output: "Hello World from TypeScript"

/*
Q6: Function Type with Multiple Return Types
Define a function parseInput that takes a string as a parameter. It should return either a number (if the input can be parsed into a number) or null (if the input cannot be parsed). Specify the function type so that it returns number | null.

Test the function with both valid and invalid inputs.
*/

function parseInput(a: string): number | null {
  const parse = parseFloat(a);
  return isNaN(parse) ? null : parse;
}

console.log(parseInput("42")); // Output: 42 (valid number)
console.log(parseInput("3.14")); // Output: 3.14 (valid number)
console.log(parseInput("abc")); // Output: null (invalid input)
console.log(parseInput("123abc")); // Output: 123 (valid number, parses until non-numeric part)
console.log(parseInput("")); // Output: null (empty string cannot be parsed)
console.log(parseInput("0")); // Output: 0 (valid number)

/*
Q7: Function with Multiple Optional Parameters
Define a function createPerson that takes the following parameters:

firstName (string, required)
lastName (string, required)
middleName (string, optional)
age (number, optional)
The function should return a greeting message. If the middleName and age are provided, include them in the message; otherwise, omit them.
*/

function createPerson1(
  firstName: string,
  lastName: string,
  middleName?: string,
  age?: number
): string {
  if (middleName && age) {
    return `Good moring ${firstName} ${middleName} ${lastName} ${age}`;
  } else {
    return `Good moring ${firstName} ${lastName} `;
  }
}

function createPerson(
  firstName: string,
  lastName: string,
  middleName?: string, // Optional parameter
  age?: number // Optional parameter
): string {
  let message = `Hello, ${firstName} ${
    middleName ? middleName + " " : ""
  }${lastName}.`;

  if (age !== undefined) {
    message += ` You are ${age} years old.`;
  }

  return message;
}

console.log(createPerson("John", "Doe"));
// Output: Hello, John Doe.

console.log(createPerson("John", "Doe", "Michael"));
// Output: Hello, John Michael Doe.

console.log(createPerson("John", "Doe", undefined, 30));
// Output: Hello, John Doe. You are 30 years old.

console.log(createPerson("John", "Doe", "Michael", 30));
// Output: Hello, John Michael Doe. You are 30 years old.

/*
Q8: Function with Optional and Default Parameters
Define a function calculateDiscount that calculates a discount for a product:

The price (number) is required.
The discountPercentage (number) is optional and defaults to 10%.
The function should return the discounted price. Demonstrate both with and without specifying the discountPercentage.

*/

function calculateDiscount(
  price: number,
  discountPercentage: number = 10
): number {
  const discountAmount = (price * discountPercentage) / 10;
  return price - discountAmount;
}

// Example 1: Using the default discount of 10%
const price1 = 100;
const discountedPrice1 = calculateDiscount(price1); // No discount percentage passed
console.log(`Price with default discount (10%): $${discountedPrice1}`);

/*
Q9: Overloading with Different Argument Types
Define an overloaded function formatData that accepts two types of arguments:

If passed a string and a boolean, it should return a formatted string (e.g., "Data: string" or "Data: string (formatted)").
If passed a number, it should return the number formatted as a string (e.g., "Number: 123").
Provide examples for both cases.

*/

function formatData(arg1: string | number, arg2?: boolean): string {
  if (typeof arg1 === "string" && typeof arg2 === "boolean") {
    return `Data: ${arg1} ${arg2 ? "(formatted)" : ""}`;
  }
  if (typeof arg1 === "number") {
    return `Number: ${arg1}`;
  }
  return "invalid input";
}

// Example 1: Passing a string and a boolean
const result1 = formatData("Hello", true);
console.log(result1); // Output: Data: Hello (formatted)

// Example 2: Passing a string and a boolean with false
const result2 = formatData("World", false);
console.log(result2); // Output: Data: World

// Example 3: Passing a number
const result3 = formatData(123);
console.log(result3); // Output: Number: 123

/*
Q10: Function with Callback
Define a function processNumbers that takes an array of numbers and a callback function as parameters. The callback should be applied to each number in the array. The function should return a new array containing the results.

The callback function should take a number and return a modified number.
Example: If the callback multiplies by 2, the result would be an array of doubled values.

*/

type callback = (number: number) => number;

function processNumber(arg1: number[], callback: callback) {
  return arg1.map(callback);
}

const multiplyByTwo: callback = (number: number) => number * 2;
const addFive: callback = (number: number) => number + 5;

// Example 1: Using the multiplyByTwo callback
const numbers1 = [1, 2, 3, 4];
const result4 = processNumber(numbers1, multiplyByTwo);
console.log(result4); // Output: [2, 4, 6, 8]

const numbers2 = [10, 20, 30];
const result5 = processNumber(numbers2, addFive);
console.log(result5); // Output: [15, 25, 35]

/*
Q11: Function Overloading with Different Return Types
Define an overloaded function convert that accepts a string or number:

If the argument is a string, return the string's length.
If the argument is a number, return its string representation.
Provide examples for both cases.

*/

function convert(input: string): number; // If input is a string, return its length
function convert(input: number): string; // If input is a number, return its string representation

function convert(arg: string | number) {
  if (typeof arg === "string") {
    return arg.length;
  } else if (typeof arg === "number") {
    return arg.toString();
  }
  return "";
}

// Example 1: Argument is a string
const result6 = convert("Hello");
console.log(result6); // Output: 5 (length of the string 'Hello')

// Example 2: Argument is a number
const result7 = convert(123);
console.log(result7); // Output: "123" (string representation of the number 123)

/*
Q12: Functions with Multiple Rest Parameters
Define a function combineStrings that takes multiple parameters:

One string parameter separator.
Then, any number of string arguments as a rest parameter.
The function should return a combined string where all the string arguments are joined by the separator. For example, combineStrings("-", "apple", "banana", "cherry") should return "apple-banana-cherry".
*/

function combineStrings(separator: string, ...strings: string[]) {
  return strings.join(separator);
}

// Example 1: Combining with a dash separator
const res1 = combineStrings("-", "apple", "banana", "cherry");
console.log(res1); // Output: "apple-banana-cherry"

// Example 2: Combining with a space separator
const res2 = combineStrings(" ", "Hello", "world", "from", "TypeScript");
console.log(res2); // Output: "Hello world from TypeScript"

// Example 3: Combining with a comma separator
const res3 = combineStrings(", ", "apple", "orange", "banana");
console.log(res3); // Output: "apple, orange, banana"

/*
Q13: Function Types with Object Parameters
Define a function type PersonInfo that describes a function that:

Takes an object with name (string) and age (number).
Returns a greeting message, e.g., "Hello, my name is {name} and I am {age} years old."
Create a function greetPerson that implements this function type.

*/

interface obj {
  name: string;
  age: number;
}

function PersonInfo(obj: obj): string {
  return `Hello my name is ${obj.name} and I am ${obj.age}year old`;
}

const personobj = {
  name: "Harsh",
  age: 12,
};

PersonInfo(personobj);

/*
Q14: Using this in Functions
Define a function Person as a class with:

A property name (string).
A method greet that uses this to access the name property.
Create an instance of Person and call the greet method.

*/

class Person1 {
  constructor(public name: string) {}
  greet(): string {
    return this.name;
  }
}

const PersonInstance = new Person1("harsh");

PersonInstance.greet();

/*
Q15: Function Returning a Function
Define a function createMultiplier that takes a number multiplier and returns a function. The returned function should take a number and multiply it by the multiplier value.

Test the function by creating a multiplier and using it with different numbers.

*/

function createMultiplier(multiplier: number): (value: number) => number {
  return function (value: number): number {
    return value * multiplier;
  };
}

const double1 = createMultiplier(2); // Creates a function that doubles numbers
console.log(double1(5)); // Output: 10
console.log(double1(10)); // Output: 20

const triple = createMultiplier(3); // Creates a function that triples numbers
console.log(triple(5)); // Output: 15
console.log(triple(10)); // Output: 30

/*
Q16: Function Overload for Union Types
Define an overloaded function processValue that can process both number and string:

If passed a number, return its square.
If passed a string, return the string in uppercase.
Provide examples of calling processValue with both a number and a string.

*/

// Overloaded function declarations
function processValue(value: number): number;
function processValue(value: string): string;

// Function implementation
function processValue(value: number | string): number | string {
  if (typeof value === "number") {
    return value * value; // Return square of the number
  } else if (typeof value === "string") {
    return value.toUpperCase(); // Return uppercase string
  }
  throw new Error("Invalid input"); // Handle unexpected types
}

// Examples
console.log(processValue(5)); // Output: 25 (number squared)
console.log(processValue("hello")); // Output: "HELLO" (string in uppercase)
