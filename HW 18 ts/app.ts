type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

type Product = {
  name: string;
  price: number;
};

interface CalculateDiscountFunction {
  (product: Product, discount: number): number;
}

interface Employee {
  name: string;
  salary: number;
}

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

interface ConcatStringsFunction {
  (str1: string, str2: string): string;
}

const superAdmin: AdminUser = {
  name: "Jane Doe",
  permissions: ["manage-users", "access-logs"],
  email: "jane.doe@example.com"
};

console.log("AdminUser:", superAdmin);

function printCarInfo(car: Car): void {
  console.log(`Make: ${car.make}, Model: ${car.model}`);
  console.log(`Engine Type: ${car.engine.type}, Horsepower: ${car.engine.horsepower}`);
  car.year ? console.log(`Year: ${car.year}`) : null;
}

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301
  },
  year: 2022
};

printCarInfo(myCar);

const calculateDiscount: CalculateDiscountFunction = (product, discount) =>
  product.price * (1 - discount);

const newPrice = calculateDiscount({ name: "Laptop", price: 1000 }, 0.1);
console.log("New price after discount:", newPrice);

const employees: Employee[] = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 75000 }
];

const getSalaries = (emps: Employee[]): number[] => emps.map(e => e.salary);

const salaries = getSalaries(employees);
console.log("Employee salaries:", salaries);

const student: Student = {
  firstName: "Max",
  lastName: "Power",
  grade: 95
};

const printStudentInfo = (s: Student): void => {
  console.log(`Full Name: ${s.firstName} ${s.lastName}`);
  console.log(`Grade: ${s.grade}`);
};

printStudentInfo(student);

const concatStrings: ConcatStringsFunction = (a, b) => a + b;

const result = concatStrings("Hello, ", "world!");
console.log("Concatenated string:", result);
