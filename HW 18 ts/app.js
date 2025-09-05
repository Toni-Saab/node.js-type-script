var superAdmin = {
    name: "Jane Doe",
    permissions: ["manage-users", "access-logs"],
    email: "jane.doe@example.com"
};
console.log("AdminUser:", superAdmin);
function printCarInfo(car) {
    console.log("Make: ".concat(car.make, ", Model: ").concat(car.model));
    console.log("Engine Type: ".concat(car.engine.type, ", Horsepower: ").concat(car.engine.horsepower));
    car.year ? console.log("Year: ".concat(car.year)) : null;
}
var myCar = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301
    },
    year: 2022
};
printCarInfo(myCar);
var calculateDiscount = function (product, discount) {
    return product.price * (1 - discount);
};
var newPrice = calculateDiscount({ name: "Laptop", price: 1000 }, 0.1);
console.log("New price after discount:", newPrice);
var employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 75000 }
];
var getSalaries = function (emps) { return emps.map(function (e) { return e.salary; }); };
var salaries = getSalaries(employees);
console.log("Employee salaries:", salaries);
var student = {
    firstName: "Max",
    lastName: "Power",
    grade: 95
};
var printStudentInfo = function (s) {
    console.log("Full Name: ".concat(s.firstName, " ").concat(s.lastName));
    console.log("Grade: ".concat(s.grade));
};
printStudentInfo(student);
var concatStrings = function (a, b) { return a + b; };
var result = concatStrings("Hello, ", "world!");
console.log("Concatenated string:", result);
