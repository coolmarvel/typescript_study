// 타입 종류

// string
let str: string;
let red: string = "red";
let green: string = "green";
let myColor: string = `my color is ${red}`;
let yourColor: string = `your color is ${green}`;

// number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// boolean
let isBolean: boolean;
let isDone: boolean = false;

// null / undefined
let nul: null;
let und: undefined;

// array
const fruits: string[] = ["apple", "banana", "cherry"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ["apple", 2, 3, "banana", 4, 5, "cherry"];

// object (typeof DATA === 'object')
const obj: object = {};
const arr: object = [];
const func: object = function () {};

interface User {
  name: string;
  age: number;
  isValid: boolean;
}
const userA: User = { name: "coolmarvel", age: 27, isValid: true };
const userB: { name: string; age: number; isValid: boolean } = { name: "mykim", age: 4, isValid: false };

// function
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
const a: number = add(1, 2);

const hello: () => void = () => {
  console.log("hello world!");
};
const h: void = hello();

// any

// unknown

// tuple

// void

// never

// union

// intersection
