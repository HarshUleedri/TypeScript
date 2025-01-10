### Interfaces and Type Aliases

Define an interface Person that describes a person object with the following properties:

name (string)
age (number)
isEmployed (boolean)
Create a variable person1 and assign it values that match the Person interface.

---

```typescript
interface Person {
  name: string
  age: number
  isEmployed: boolean
}

let person1: Person {
  name: "harsh",
  age: 22
  isEmployed: true
}

```

---

Q2: Interface with Optional Properties
Define an interface Car that describes a car with the following properties:

make (string)
model (string)
year (number)
color (optional string)
Create a variable car1 and assign it values that match the Car interface.

Answer

```typescript
interface car {
  make: string
  model: string
  year: number
  color?: string
}

let car1: car {
  make: "build"
  model: "F1"
  year: 2024
  color: navy blue
}

```

---

Q3:Extending Interfaces
Define an interface Animal with the following properties:

name (string)
age (number)
Then define another interface Dog that extends Animal and adds the following properties:

breed (string)
isFriendly (boolean)
Create a variable dog1 that conforms to the Dog interface.

```typescript
interface Animal {
  name: string
  age: number
}

interface Dog extends Animal {
  breed: string
  isFriendly: boolean
}

const dog1: Dog {
  name: frank
  age: 3
  breed: Golden Retriever
  isFriendly: true
}

```

---

Q4:Using Type Aliases
Create a type alias Point that represents a point in a 2D plane with the following properties:

x (number)
y (number)
Then, create a variable point1 with x and y values that match the Point type.

```typescript
type Point = {x: number, y:number}

const point1: Point = {
  x:5 ,
  y: 10
}

```

---

Q5:Intersection Types
Define two interfaces:

Address with properties street (string), city (string), and zipCode (string).
User with properties username (string), email (string), and isActive (boolean).
Create a type alias UserWithAddress using an intersection type that combines User and Address. Then, create a variable userWithAddress1 that has all the properties from both interfaces.

```typescript

interface Address {
  street: string;
  city: string;
  zipCode: string;
}
interface user2 {
  username: string;
  email: string;
  isActive: boolean;
}

type userWithAddress = user2 & Address;

let userWithAddress1: userWithAddress = {
  street: "mumbai",
  city: "navi mumbai",
  zipCode: "234234234",
  username: "harsh",
  email: "c@gmai.com",
  isActive: true,
};

```

Q6:Implementing Interface with Functions
Define an interface Product with the following properties:

id (number)
name (string)
price (number)
discount (function that takes a percentage as a number and returns the discounted price)
Create a variable product1 that implements the Product interface, and implement the discount function to calculate the discounted price.

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  discount: (percentage: number) => number;
}

const Product1: Product = {
  id: 902,
  name: "bottel",
  price: 103,
  discount: (percentage: number) => {
    return Product1.price - (Product1.price * percentage) / 100;
  },
};

```

---

Q7: Type Aliases with Union Types
Create a type alias Status that can be either "active", "inactive", or "pending". Then, define an interface Task with properties:

title (string)
status (Status)
Create a variable task1 that matches the Task interface.

```typescript
type status = "active" | "inactive" | "pending";

interface Task {
  title: string;
  status: status;
}

const task1: Task = {
  title: "please concentrate",
  status: "active",
};

```

---

Q8: Interface for Array of Objects
Define an interface Book with properties:

title (string)
author (string)
year (number)
Then, create a variable books that is an array of Book objects and contains at least 3 books.

```typescript
interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  {
    title: " You can do",
    author: " harsh",
    year: 2025,
  },
  {
    title: " You can do",
    author: " harsh",
    year: 2025,
  },
  {
    title: " You can do",
    author: " harsh",
    year: 2025,
  },
];

```

---

Q9: Index Signature
Define an interface Inventory where each item in the inventory can have a name (string) and a quantity (number). Use an index signature to allow the interface to accept items with any name and quantity.

```typescript
interface Inventory {
  [items: string]: number;
}

const inventory: Inventory = {
  apple: 1,
  mango: 5,
  Bananan: 6,
};

inventory["apple"]; // foe accessing
inventory["grapes"] = 15; // for assigning

```

---

Q10: Readonly Properties
Define an interface UserProfile with properties:

id (number)
username (string)
email (string)
Make the id and username properties readonly, so they cannot be modified after the object is created. Create a variable user1 that adheres to the UserProfile interface.

```typescript
interface userProfile {
  readonly id: number;
  readonly username: string;
  readonly email: string;
}

const UserProfile: userProfile = {
  id: 902348,
  username: "harsh",
  email: "ulidari2@gmail.com",
};

```

---

Q11: Combining Type Aliases and Interfaces
Create an interface Vehicle with the following properties:

make (string)
model (string)
year (number)
Create a type alias ElectricVehicle that extends Vehicle and adds the following properties:

batteryCapacity (number)
range (number)
Create a variable electricCar1 that conforms to the ElectricVehicle type.

```typescript
interface Vehical {
  make: string;
  model: string;
  year: number;
}

type ElectricVehical = Vehical & {
  batteryCapacity: number;
  range: number;
};

const electricVehical1: ElectricVehical = {
  make: "harsh",
  model: "F!",
  year: 2025,
  batteryCapacity: 999999999,
  range: 99999999999,
};


```

---

Q12: Interface with Function Signature
Define an interface Operation with a method calculate that takes two numbers and returns a number. Then, create an object addition that implements the Operation interface and performs addition.

```typescript
interface Operation {
  calculate: (par1: number, par2: number) => number;
}

const addition: Operation = {
  calculate: (par1: number, par2: number): number => {
    return par1 + par2;
  },
};

const result = addition.calculate(5, 6);
console.log(result);


```

---
