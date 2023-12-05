import { getFullName, User } from "./export";

const marvel: User = {
  firstName: "lee",
  lastName: "seonghyun",
  age: 27,
  isValid: true,
};

const fullName = getFullName(marvel);
console.log(fullName);
