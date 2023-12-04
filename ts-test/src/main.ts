// 타입 종류

// string
// let str: string;
// let red: string = "red";
// let green: string = "green";
// let myColor: string = `my color is ${red}`;
// let yourColor: string = `your color is ${green}`;

// number
// let num: number;
// let integer: number = 6;
// let float: number = 3.14;
// let infinity: number = Infinity;
// let nan: number = NaN;

// boolean
// let isBolean: boolean;
// let isDone: boolean = false;

// null / undefined
// let nul: null;
// let und: undefined;

// array
// const fruits: string[] = ["apple", "banana", "cherry"];
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
// const union: (string | number)[] = ["apple", 2, 3, "banana", 4, 5, "cherry"];

// object (typeof DATA === 'object')
// const obj: object = {};
// const arr: object = [];
// const func: object = function () {};

// interface User {
//   name: string;
//   age: number;
//   isValid: boolean;
// }
// const userA: User = { name: "coolmarvel", age: 27, isValid: true };
// const userB: { name: string; age: number; isValid: boolean } = { name: "mykim", age: 4, isValid: false };

// function
// const add: (x: number, y: number) => number = function (x, y) {
//   return x + y;
// };
// const a: number = add(1, 2);

// const hello: () => void = () => {
//   console.log("hello world!");
// };
// const h: void = hello();

// any
// let hello: any = "hello world";
// hello = 123;
// hello = false;
// hello = null;
// hello = {};
// hello = [];
// hello = function () {};

// unknown
// const au: any = 123;
// const ua: unknown = 123;

// const any: any = ua;
// const boo: boolean = ua;
// const nom: number = ua;
// const ary: string[] = ua;
// const obt: { x: string; y: number } = ua;

// tuple
// const tuple: [string, number, boolean] = ["1", 1, true];
// const users: [number, string, boolean][] = [
//   [0, "0", false],
//   [1, "1", true],
// ];

// void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}`);
// }
// const hi: void = hello("world");

// never
// const nev: [] = [];
// nev.push(3);

// union
// let union: string | number;
// union = "hello type";
// union = 123;
// union = false; // error

// intersection
interface User {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const coolmarvel: User & Validation = {
  name: "coolmarvel",
  age: 27,
  isValid: true,
};
