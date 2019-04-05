/*let myName: string = "Mikaaa";
console.log(myName);

let age: number;

let a: number[] = [1, 2, 3, 4, 5];
//tuples
let b: [string, number, string] = ["hey", 5, "hey"];
//enum
enum colors {
  gray,
  green,
  blue
}
let color: colors;
color = colors.gray;
//any
let car: any;
car = "~BMW";
car = {
  brand: "BMW"
};
//types with functions
function returnName(name: string): string {
  return name;
}
console.log(returnName(myName));

const aa = (c: number, b: number): number => {
  return c * b;
};
console.log(aa(3, 5));

//function types
let fname: (val: string) => string;
fname = returnName;

// object
let userData: { name: string; age: number } = {
  name: "Mika",
  age: 24
};

//type creation
type complexType = { data: number[]; output: (all: boolean) => number[] };

let complex: complexType = {
  data: [1, 2, 3, 5, 6],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//union types

let data: number | string;
data = 27;
data = "27";*/

//exercise
/*let bankAccount: { money: number; deposit: (val: number) => number } = {
  money: 2000,
  deposit(value: number): number {
    return (this.money += value);
  }
};

let myself: {
  name: string;
  bankAccount: { money: number; deposit(val: number): number };
  hobbies: string[];
} = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
let res: number;
res = myself.bankAccount.deposit(4000);

console.log(res);*/

// exercise 2

/*var double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = function(name: string = "Max"): void {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var { firstName, experience } = scientist;
console.log(firstName, experience);*/

/*class Friend {
  name: string;
  private status: string;
  protected age: number = 27;

  constructor(name: string, status: string, age: number) {
    this.name = name;
    this.status = status;
    this.age = age;
  }
  printAge() {
    console.log(this.age);
  }
  setStatus(status: string) {
    this.status = status;
    console.log(this.status);
  }
}

const friend = new Friend("Ulvi", "close", 27);
//friend.setStatus("nearlyclose");
//console.log(friend);

class Friend2 extends Friend {
  color: string;
  constructor(name: string = "Msu", color: string) {
    super(name, status, 0);
    this.color = color;
  }
}

const deb = new Friend2("Afaq", "white");

console.log("hey" + deb.name);*/

//getters setters
/*class Plant {
  private _species: string = "default";
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "def";
    }
  }

  get species() {
    return this._species;
  }
}

let plant = new Plant();
plant.species = "";
console.log(plant.species);*/

/*class Friend {
  name: string;
  age: number;
  friendName: string;
  protected workAt: string = "unknown";
  constructor(name: string, age: number, friendName: string, workAt: string) {
    this.name = name;
    this.age = age;
    this.friendName = friendName;
    this.workAt = workAt;
  }
  get work() {
    return this.workAt;
  }
  set work(val: string) {
    this.workAt = val;
  }
}

let friend1 = new Friend("Ulvi", 28, "Samir", "Ibar");
console.log(friend1.work);

class Bro extends Friend {
  stat: string;
  constructor(stat: string) {
    super("Mushvig", 23, "Ulvi", "Pasha");
    this.stat = stat;
  }
}

let friend2 = new Bro("close");

console.log(friend2.work);*/

// Exercise 1 - How was your TypeScript Class?
/*function Car(name) {
  this.name = name;
  this.acceleration = 0;

  this.honk = function() {
      console.log("Toooooooooot!");
  };

  this.accelerate = function(speed) {
      this.acceleration = this.acceleration + speed;
  }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);*/

//Exercise 1
/*class Car {
  name: string;
  acceleration: number = 0;
  honk() {
    console.log("Toooooooooot!");
  }
  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
  constructor(name: string, acceleration: number) {
    this.name = name;
    this.acceleration = acceleration;
  }
}
var car = new Car("BMW", 0);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);*/

// Exercise 2 - Two objects, based on each other ...
/*var baseObject = {
  width: 0,
  length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());*/

/*class baseObject {
  width: number = 0;
  length: number = 0;
  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }
}
class Rectangle extends baseObject {
  constructor() {
    super(5, 2);
  }
  calcSize() {
    return this.width * this.length;
  }
}

let obj = new Rectangle();
console.log(obj.calcSize());

// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class Person {
  private _firstName: string = "";
  set name(val: string) {
    val.length > 3 ? (this._firstName = val) : "";
  }
  get name() {
    return this._firstName;
  }
}

let object = new Person();
object.name = "Max";
console.log("hey " + object.name);
object.name = "Maximilian";
console.log(object.name);*/

//namespace

/*namespace myWork {
  const a = 2;
  export const func = (val: string): string => {
    return val;
  };
}

console.log(myWork.func("hey"));*/

// interface
interface int1 {
  name: string;
  age?: number; //optional property
  [propName: string]: any;
}

function greet(person: int1): void {
  console.log("Jey " + person.name);
  console.log("Jey " + person.age);
}

function change(person: int1): void {
  person.name = "Anna";
}

const person = {
  name: "Mika",
  age: 20
};

greet(person);
change(person);
greet(person);
