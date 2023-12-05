// 클래스(Class)

// 접근 제어자(Access Modifiers)
// public 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
// protected 나와 파생된 후손 클래스 내에서 접근 가능
// private 내 클래스에서만 접근 가능

// class UserA {
//   //   public first: string = "";
//   //   protected last: string = "";
//   //   private age: number = 0;

//   constructor(public first: string = "", public last: string = "", public age: number = 0) {
//     // this.first = first;
//     // this.last = last;
//     // this.age = age;
//   }

//   public getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   }
// }

// class UserB extends UserA {
//   getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   }
// }

// class UserC extends UserB {
//   getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   }
// }

// const coolmarvel = new UserA("Lee", "SeongHyun", 27);
// console.log(coolmarvel.first);
// console.log(coolmarvel.last);
// console.log(coolmarvel.age);

// coolmarvel.getAge();
