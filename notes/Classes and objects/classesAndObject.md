### Classes and objects

- class defination
- constructors
- Access Modifiers ( piblic, private, protected)
- Readonly properties
- Optional properties
- Perameter properties
- Getters and setters
- Static Members
- Abstract classes and methods

---

## Basic Class Definition

Define a class Person with the following:

Properties: name (string), age (number)
A method greet that logs a greeting message including the person's name and age.
Create an instance of the Person class and call the greet method.

```typescript
class Person {
  name: String = "harsh";
  age: number = 24;
  greet(): void {
    console.log(`Good moring ${this.name}`);
  }
}

const p1 = new Person();

p1.greet();
```

Q2: Constructors
Define a class Car with the following:

Properties: make (string), model (string), year (number)
Use a constructor to initialize these properties.
Create an instance of the Car class with sample data.

```typescript
class car {
  constructor(public make: string, public price: number) {}
}
let c1 = new car("mgb", 12234);
```

Q3: Access Modifiers
Define a class BankAccount with the following:

A private property balance (number) initialized to 0.
Public methods deposit(amount: number) and withdraw(amount: number).
A public method getBalance() that returns the current balance.
Create an instance of BankAccount and demonstrate its usage.

```typescript
class BankAccount {
  private balance: number = 0;

  public deposite(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("the amount must be positive");
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`withdrew: $${amount}`);
    } else if (amount > this.balance) {
      console.log(`insufficient balance`);
    } else {
      console.log("withdrawak amount must be positive");
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount();

myAccount.deposite(100);
myAccount.withdraw(49);
myAccount.getBalance();
```

Q4: Readonly Properties
Define a class Book with the following:

A readonly property isbn (string).
Properties: title (string), author (string).
A constructor to initialize all properties.
Attempt to modify the isbn property after an instance is created and observe the behavior.

```typescript
class book {
  public readonly isbn: string;
  public title: string;
  public author: string;

  constructor(isbn: string, title: string, author: string) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
  }
}

const myBook = new book("2948", "typescript", "harsh");

myBook.isbn = "08783";

// we cannot change the value of readonly property
```

Q5: Optional Properties
Define a class Employee with the following:

Properties: id (number), name (string), department (optional string).
A constructor to initialize the properties.
A method getInfo to log the employee's details.
Create instances of the Employee class with and without the department property.

````typescript

class employee {
public id: number;
public name: string;
public department?: string;
constructor(id: number, name: string, department?: string) {
this.id = id;
this.name = name;
this.department = department;
}

public getInfo(): void {
console.log(
`id${this.id} name${this.name} department${
        this.department ?? "not Assigned"
      }`
);
}
}

````

Q6: Parameter Properties
Define a class Rectangle with the following:

Use parameter properties in the constructor to define length (number) and width (number).
A method getArea to calculate and return the area of the rectangle.
Create an instance of the Rectangle class and calculate the area

``` typescript

class rectangle {
constructor(public length: number, public width: number) {}

getArea(): number {
return this.length \* this.width;
}
}

const myRectangel = new rectangle(49, 20);

myRectangel.getArea();

```

Q7: Getters and Setters
Define a class User with the following:

A private property \_password (string).
A getter password that returns "**\*\*\*\***".
A setter password that allows setting a new password but ensures it is at least 8 characters long.
Create an instance of the User class and demonstrate the usage of the getter and setter.

``` typescript

class user2 {
private \_password: string = "";
get password(): string {
return "**\*\*\*\***";
}
set password(password: string) {
if (password.length >= 8) {
this.\_password = password;
console.log("password set successfully");
} else {
console.log("password must be at least 8 characters");
}
}
}

const newUser = new user2();

newUser.password;
newUser.password = "upwroiewi";

// we can use get and set method for getting and setting a value

```

Q8: Static Members
Define a class MathUtils with the following:

A static method add(a: number, b: number): number that returns the sum of two numbers.
A static property PI with the value of 3.14159.
Demonstrate how to call the static method and access the static property without creating an instance.

``` typescript

class mathUtils {
static add(a: number, b: number): number {
return a + b;
}
static PI: number = 3.14159;
}

mathUtils.add(5, 6);
mathUtils.PI;

// we don't need make instance for calling property or method

```

Q9: Abstract Classes
Define an abstract class Shape with the following:

An abstract method getArea() that returns a number.
A non-abstract property color (string) and a constructor to initialize it.
Create two subclasses:

Circle with a radius property and implement getArea.
Square with a side property and implement getArea.
Create instances of both subclasses and calculate their areas.

``` typescript

abstract class Shape {
abstract getArea(): number;
constructor(public color: string) {}
}

class Circle extends Shape {
constructor(color: string, public radius: number) {
super(color);
}
getArea(): number {
return Math.PI _ this.radius _ this.radius;
}
}

class Square extends Shape {
constructor(color: string, public side: number) {
super(color);
}
getArea(): number {
return this.side \* this.side;
}
}

const circle = new Circle("yellow", 10);
circle.getArea();

const square = new Square("blue", 4);
square.getArea();

```

Q10: Access Modifiers and Inheritance
Define a class Animal with the following:

A protected property species (string).
A constructor to initialize the species.
A public method getSpecies that returns the species.
Create a subclass Dog with:

A private property breed (string).
A constructor to initialize the species and breed.
A method getDetails to log both species and breed.
Create an instance of Dog and demonstrate its functionality.

``` typescript

class Animal {
constructor(protected species: string) {}

public getSpecies(): string {
return this.species;
}
}

class Dog extends Animal {
constructor(species: string, private breed: string) {
super(species);
}
getDetails(): void {
console.log(`species${this.species}, breed${this.breed}`);
}
}

const myDog = new Dog("Canine", "Golden Retriever");

// we have to use super for the property which is taken from parent class

```

Q11: Combining Concepts
Define a class Product with the following:

Properties: id (number), name (string), price (number), discount (optional number).
A constructor to initialize all properties.
A method getDiscountedPrice to calculate the price after discount.
Use private, protected, or readonly access modifiers where applicable.
Create an instance of the Product class and calculate the discounted price.

``` typescript

class Product {
constructor(
public id: number,
public name: string,
public price: number,
protected discount1?: number
) {}
public getDiscountPrice(): number {
if (this.discount1) {
return this.price - (this.price \* this.discount1) / 100;
}
return this.price;
}
}

const product = new Product(101, "Laptop", 1500, 10);

```

Q12: Advanced Getters and Setters
Define a class Temperature with the following:

A private property \_celsius (number).
A getter fahrenheit that converts and returns the temperature in Fahrenheit.
A setter fahrenheit that accepts a Fahrenheit value and updates the Celsius property.
Create an instance of Temperature, set a Fahrenheit value, and retrieve both Celsius and Fahrenheit values.

``` typescript

class Temperature {
constructor(private \_celsius: number) {}
get fahrenheit(): number {
return (this.\_celsius \* 9) / 5 + 32;
}

set fahrenheit(fahrenheit: number) {
this.\_celsius = ((fahrenheit - 32) \* 5) / 9; // Fahrenheit to Celsius formula
}

get celsius(): number {
return this.celsius;
}

set celsius(celsius: number) {
this.celsius = celsius;
}
}

const temp = new Temperature(25);

temp.fahrenheit = 100;

console.log(`Celsius: ${temp.celsius}`); // Output: Celsius: 37.77777777777778
console.log(`Fahrenheit: ${temp.fahrenheit}`); // Output: Fahrenheit: 100

```

Q13: Polymorphism with Abstract Classes
Define an abstract class Transport with:

An abstract method getFuelEfficiency() that returns a number.
A property fuelCapacity (number) and a constructor to initialize it.
Create subclasses:

Car that implements getFuelEfficiency based on mileage.
Plane that implements getFuelEfficiency based on a fixed formula.
Demonstrate polymorphism by calling getFuelEfficiency on instances of both classes.

``` typescript

abstract class Transport {
constructor(public fuelCapacity: number) {}
abstract getFuelEfficiency(): number;
}

class car1 extends Transport {
constructor(fuelCapacity: number, public mileage: number) {
super(fuelCapacity);
}
getFuelEfficiency(): number {
return this.mileage / this.fuelCapacity;
}
}

class plane extends Transport {
constructor(fuelCapacity: number) {
super(fuelCapacity);
}

getFuelEfficiency(): number {
return (this.fuelCapacity \* 2) / 1000;
}
}

const car2 = new car1(50, 500); // 50 liters of fuel, mileage 500 miles
const plane2 = new plane(20000); // 20,000 liters of fuel

//Polymorphism: The main idea is that you can call the same method on different objects, but each object can respond to that method in its own way.
```

