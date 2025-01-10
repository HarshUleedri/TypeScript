type Point = { x: number; y: number };

const point1: Point = { x: 4, y: 6 };

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

type status = "active" | "inactive" | "pending";

interface Task {
  title: string;
  status: status;
}

const task1: Task = {
  title: "please concentrate",
  status: "active",
};

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

interface test {
  [keys: number]: string;
}

const rollNo: test = {
  1: "harsh",
  2: "Uleedri",
  3: "game on",
};

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
