// 1
var sumEvenNumbers = function (numbers) {
    return numbers.filter(function (n) { return n % 2 === 0; }).reduce(function (sum, n) { return sum + n; }, 0);
};
// 2
var isEmpty = function (str) { return str === ""; };
// 3
var areEqual = function (a, b) { return a === b; };
// 4
var getLastElement = function (arr) {
    return arr.length ? arr[arr.length - 1] : undefined;
};
// 5
var makeTriple = function (a, b, c) { return [a, b, c]; };
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
