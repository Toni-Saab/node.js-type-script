// Task 1: Greeting function
function greetUser(name) {
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Bro");
function printPersonInfo(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", City: ").concat(person.city));
}
var user = {
    name: "Alex",
    age: 30,
    city: "New York"
};
printPersonInfo(user);
// Task 3: Simple typing for a numeric parameter
function squareNumber(num) {
    return num * num;
}
console.log("The square of 5 is: ".concat(squareNumber(5)));
// Task 4: Function with boolean typing
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 4 even? ".concat(isEven(4)));
console.log("Is 7 even? ".concat(isEven(7)));
function printStudentInfo(student) {
    console.log("Student: ".concat(student.name, ", Grade: ").concat(student.grade));
}
var student1 = {
    name: "Maria",
    grade: 5
};
printStudentInfo(student1);
// Task 6: Function with void type
function logMessage(message) {
    console.log(message);
}
logMessage("Message successfully logged to the console.");
