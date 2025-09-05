// types and interfaces
interface StringToBooleanFunction {
  (str: string): boolean;
}

type CompareStrings = (str1: string, str2: string) => boolean;

// 1
const sumEvenNumbers = (numbers: number[]): number =>
  numbers.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);

// 2
const isEmpty: StringToBooleanFunction = str => str === "";

// 3
const areEqual: CompareStrings = (a, b) => a === b;

// 4
const getLastElement = <T>(arr: T[]): T | undefined =>
  arr.length ? arr[arr.length - 1] : undefined;

// 5
const makeTriple = <T>(a: T, b: T, c: T): T[] => [a, b, c];

// TESTS
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(isEmpty(""));
console.log(isEmpty("hello"));
console.log(areEqual("abc", "abc"));
console.log(areEqual("abc", "def"));
console.log(getLastElement([10, 20, 30]));
console.log(getLastElement(["x", "y", "z"]));
console.log(makeTriple(1, 2, 3));
console.log(makeTriple("a", "b", "c"));
