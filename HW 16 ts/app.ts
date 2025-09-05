// Task 1: Greeting function
function greetUser(name: string): void {
  console.log(`Hello, ${name}!`);
}

greetUser("Bro");

// Task 2: Function with an object as a parameter
type Person = {
  name: string;
  age: number;
  city: string;
};

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}

const user: Person = {
  name: "Alex",
  age: 30,
  city: "New York"
};

printPersonInfo(user);

// Task 3: Simple typing for a numeric parameter
function squareNumber(num: number): number {
  return num * num;
}

console.log(`The square of 5 is: ${squareNumber(5)}`);

// Task 4: Function with boolean typing
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(`Is 4 even? ${isEven(4)}`);
console.log(`Is 7 even? ${isEven(7)}`);

// Task 5: Creating a type for an object
type Student = {
  name: string;
  grade: number;
};

function printStudentInfo(student: Student): void {
  console.log(`Student: ${student.name}, Grade: ${student.grade}`);
}

const student1: Student = {
  name: "Maria",
  grade: 5
};

printStudentInfo(student1);

// Task 6: Function with void type
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Message successfully logged to the console.");
