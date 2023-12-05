// interface

// 선택     속성   : ?
// 읽기 전용 속성   : readonly

// interface User {
//   name: string;
//   readonly age: number;
//   isValid?: boolean;
// }

// const marvel: User = {
//   name: "seonghyun",
//   age: 27,
//   isValid: true,
// };
// marvel.isValid = false;

// const windfall: User = {
//   name: "mykim",
//   age: 4,
// };

// 함수      타입 : 호출 시그니쳐(Call signature)
// interface GetName {
//   (message: string): string;
// }

// interface User {
//   name: string;
//   age: number;
//   getName: (message: string) => string;
//   // getName: GetName;
// }
// const marvel: User = {
//   name: "coolmarvel",
//   age: 27,
//   getName(message: string) {
//     console.log(message);
//     return this.name;
//   },
// };
// marvel.getName("hello");

// 인덱스 가능 타입 : 인덱스 시그니쳐(Index signature)
// 배열
// interface Fruits {
//   [item: number]: string;
// }
// const fruits: Fruits = ["apple", "banana", "cherry"];
// console.log(fruits);

// // 객체
// interface User {
//   [key: string]: unknown;
//   name: string;
//   age: number;
// }
// const marvel: User = { name: "coolmarvel", age: 85 };
// marvel["isValid"] = true;
// marvel["emails"] = ["marvel97@naver.com", "marvel97@wemade.com"];
// console.log(marvel);

// interface Payload {
//   [key: string]: unknown;
// }
// function logValues(payload: Payload) {
//   for (const key in payload) {
//     console.log(payload[key]);
//   }
// }
// logValues(marvel);

// 확장(상속)
// interface UserA {
//   name: string;
//   age: number;
// }
// interface UserB extends UserA {
//   isValid: boolean;
// }
// const marvel: UserA = {
//   name: "coolmarvel",
//   age: 27,
// };
// const windfall: UserB = {
//   name: "mykim",
//   age: 4,
//   isValid: true,
// };

// interface FullName {
//   firstName: string;
//   lastName: string;
// }
// interface FullName {
//   middleName: string;
//   lastName: string;
// }
// const fullName: FullName = {
//   firstName: "Lee",
//   middleName: "Seong",
//   lastName: "Hyun",
// };
