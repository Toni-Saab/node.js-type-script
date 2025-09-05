// 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.sound = function () {
        console.log("The animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, breed) {
        var _this = _super.call(this, name, species) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.sound = function () {
        console.log("The dog barks");
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy", "Canine", "Labrador");
myDog.sound();
// 2
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.prototype.addBook = function () {
        Library.totalBooks++;
    };
    Library.totalBooks = 0;
    return Library;
}());
var lib1 = new Library();
var lib2 = new Library();
lib1.addBook();
lib2.addBook();
lib2.addBook();
console.log("Total books:", Library.totalBooks);
// 3
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, type) {
        var _this = _super.call(this, make, model) || this;
        _this.type = type;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
var bike = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log(bike);
