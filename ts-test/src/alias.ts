// 타입 별칭(Alias)

// type TypeA = string;
// type TypeB = string | number | boolean;
// type User = { name: string; age: number; isValid: boolean } | [string, number, boolean];

// const userA: User = {
//   name: "marvel",
//   age: 27,
//   isValid: true,
// };
// const userB: User = ["marvel", 27, false];

// function someFunc(param: TypeB): TypeA {
//   switch (typeof param) {
//     case "string":
//       return param.toUpperCase();
//     case "number":
//       return param.toFixed(2);
//     default:
//       return "true";
//   }
// }

// type TypeUser = {
//   name: string;
//   age: number;
//   isValid: boolean;
// };
// interface InterfaceUser {
//   name: string;
//   age: number;
//   isValid: boolean;
// }

// const marvel: TypeUser = {
//   name: "marvel",
//   age: 27,
//   isValid: true,
// };

// const windfall: InterfaceUser = {
//   name: "mykim",
//   age: 4,
//   isValid: true,
// };
