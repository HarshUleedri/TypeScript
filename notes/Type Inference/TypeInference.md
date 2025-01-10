Q1: What will be the inferred type of the following variables?

typescript
Copy code
let count = 10;
let message = "Hello, TypeScript!";
let isComplete = false;

Answer

the inference type of count is number.
the inference type of message is string
the inference type of inComplete is boolean

---

Q2: Write a function double that takes a number as input and returns its double. Use type inference for the return type.

```
function double (arg: number) {
  return arg*2
}
```

---

Q3: Declare an array colors initialized with ["red", "blue", "green"]. What is the inferred type of colors?

```
let colors = ['red','blue','green'];

the inferred type of colors is string
```

---

Q4: Examine the following code and identify the inferred type of result:

typescript
Copy code
const add = (a: number, b: number) => a + b;
const result = add(5, 10);

Answer
the inferred type of rusult is number.

---

Q5 Rewrite the following code using explicit type annotations:

typescript
Copy code
let username = "JohnDoe";
let age = 30;
let isActive = true;

Answer

```
let username: string =  "JohnDoe";
let age: number = 30;
let isActive: boolean = true

```

---

Q6: Write a function multiply that:

Takes two parameters: a (number) and b (number).
Returns their product. Add explicit type annotations for both the parameters and the return type.

Answer
typescript

```
function multiply(a: number, b: number): number{
  return a+b
}

```

---

Q7: Create a variable user with an object type annotation. The object should include:

name as a string.
age as a number.
isAdmin as a boolean.

```
var user: {name: string; age: number; isAdmin: boolean; } = {
  name: string = "Harsh"
  age: numver = 24
  isAdmin: boolean = true
}

```

---

Q8: Rewrite this function with type annotations for both parameters and the return type:

typescript

const greet = (name, age) => `Hello ${name}, you are ${age} years old.`;

Answer

typeScript

```
const greet = (name: string, age: number):string =>{
  return  `Hello ${name}, you are ${age} year old.`
}

```

---

Q9: Declare an array scores with explicit type annotation to accept only numbers. Initialize it with [95, 85, 76].

Answer

typeScript

```
let arr: number[] = [95, 85, 76]

```

---

Q10: Write a function formatMessage that:

Accepts a message (string) and timestamp (number).
Returns a string like: "Message received at {timestamp}: {message}". Use type inference for the return type but type annotations for the parameters.

Answer

typscript

```
function formatMessage( message: string, timestamp: number){
  return `Message received at ${timestamp}: ${message}`
}

```

---

Q11: Declare a variable data with type annotation any, but assign it different values (e.g., string, number, etc.). Then reassign it to a specific type like string and perform an operation on it.

Answer

typescript

```
 let data: any;
 data = "harsh"
 data = 24;
 data = true

 data = "harsh ramesh uleedri"

 console.log(data.toUpperCase())

```

---

Q12: Examine the following code snippet:

let items = [1, "two", true];
What is the inferred type of items?
How would you rewrite it to allow only string or number?

Answer

the inferred type of items
let items: ( boolean | number | string[]) = [1, "two", true]

```
let items (number | string)[] = ["harsh", uleedri];

```

---

Q13: Write a function getArea that:

Takes one parameter, shape, which can be "circle" or "square".
If the shape is "circle", return Math.PI _ radius^2.
If the shape is "square", return side _ side. Use explicit type annotations for parameters and type inference for the return type.

```
function getArea(shape: (circle | square ), size: number){

  if(shape === "circle"){
    return Math.PI * size ** 2
  }
  else if (shape === "square"){
    return size * size
  }

}
getArea(circle, 23)
getArea(square, 23)

```
-----

