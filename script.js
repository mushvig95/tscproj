"use strict";
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
function greet(person) {
    console.log("Jey " + person.name);
    console.log("Jey " + person.age);
}
function change(person) {
    person.name = "Anna";
}
var person = {
    name: "Mika",
    age: 20
};
greet(person);
change(person);
greet(person);
