// 타입 단언(Assertion)
// '단언' 주저하지 아니하고 딱 잘라 말함

// 단언 키워드          : as
// Non-null 단언 연산자 : !

// 1)
// const el = document.querySelector("body") as HTMLBodyElement;
// el.textContent = "hello world"; // as

// const el = document.querySelector("body");
// el!.textContent = "hello world"; // non-null

const el = document.querySelector("body");
if (el) el.textContent = "hello world"; // type-guard

// 2)
function getNumber(x: number | null | undefined) {
  // return Number((x as number).toFixed(2)); // as
  // return Number(x!.toFixed(2)); // non-null
  if (x) return Number(x.toFixed(2)); // type-guard
}
getNumber(3.1415926535);
getNumber(null);

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) return Number((x as number).toFixed(2));
  return (x as string).toUpperCase();
}
getValue("hello world", false);
getValue(3.1415926535, true);

// 할당 단언(Assertion)
// 할당 단언을 할때에는 : 앞에 !를 붙인다.

let a!: number;
console.log(a);
a = 123;
