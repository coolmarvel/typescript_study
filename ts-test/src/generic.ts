// Generic
// Function

interface Obj {
  x: number;
}
type Arr = [number, number];

// function toArray(a: string, b: string): string[];
// function toArray(a: number, b: number): number[];
// function toArray(a: boolean, b: boolean): boolean[];
// function toArray(a: Obj, b: Obj): Obj[];
// function toArray(a: Arr, b: Arr): Arr[];

function toArray<T>(a: T, b: T) {
  return [a, b];
}

console.log(toArray<number>(1, 2));
console.log(toArray<string>("lee", "seonghyun"));
console.log(toArray<boolean>(true, false));
console.log(toArray<Obj>({ x: 1 }, { x: 2 }));
console.log(toArray<number[]>([1, 2], [3, 4, 5])); // number[]
console.log(toArray<Arr>([1, 2], [3, 4])); // Arr(Tuple)
