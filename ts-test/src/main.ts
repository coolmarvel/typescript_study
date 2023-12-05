// /// <reference path="./main.d.ts" />
// 참조 태그로 선언된 파일을 읽기
import _ from "lodash";

const str = "the brown fox jumps over the lazy";

console.log(_.camelCase(str));
console.log(_.snakeCase(str));
console.log(_.kebabCase(str));
