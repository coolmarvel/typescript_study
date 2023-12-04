// 타입 가드(Guards)

function logText(el: Element) {
  console.log(el.textContent);
}
const h1El = document.querySelector("h1");
if (h1El instanceof HTMLHeadingElement) logText(h1El); // instanceof

function add(param: string | number | boolean) {
  let res = "Result -> ";
  if (typeof param === "number") res += param.toFixed(2); // typeof
  else if (typeof param === "string") res += param.toUpperCase();
  else res += param;

  console.log(res);
}
add(3.141592);
add("hello world");
add(true);
