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
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.makeSound = function () { return "Bark"; };
        return _this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.makeSound = function () { return "Meow"; };
        return _this;
    }
    return Cat;
}(Animal));
var animals = [new Dog(), new Cat()];
animals.forEach(function (a) { return console.log(a.makeSound()); });
// 2
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var ColoredShape = /** @class */ (function (_super) {
    __extends(ColoredShape, _super);
    function ColoredShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColoredShape;
}(Shape));
var ColoredCircle = /** @class */ (function (_super) {
    __extends(ColoredCircle, _super);
    function ColoredCircle(radius, color) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.color = color;
        _this.calculateArea = function () { return Math.PI * _this.radius * _this.radius; };
        return _this;
    }
    return ColoredCircle;
}(ColoredShape));
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(width, height, color) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.color = color;
        _this.calculateArea = function () { return _this.width * _this.height; };
        return _this;
    }
    return ColoredRectangle;
}(ColoredShape));
var shapes = [
    new ColoredCircle(3, "red"),
    new ColoredRectangle(4, 5, "blue")
];
shapes.forEach(function (s) { return console.log("Color:", s.color, "Area:", s.calculateArea()); });
// 3
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnOn = function () { return console.log("Washing machine ON"); };
        _this.turnOff = function () { return console.log("Washing machine OFF"); };
        return _this;
    }
    return WashingMachine;
}(Appliance));
var Refrigerator = /** @class */ (function (_super) {
    __extends(Refrigerator, _super);
    function Refrigerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnOn = function () { return console.log("Refrigerator ON"); };
        _this.turnOff = function () { return console.log("Refrigerator OFF"); };
        return _this;
    }
    return Refrigerator;
}(Appliance));
var devices = [new WashingMachine(), new Refrigerator()];
devices.forEach(function (d) {
    d.turnOn();
    d.turnOff();
});
// 4
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.rate = 0.05;
        _this.deposit = function (amt) {
            _this.balance += amt;
            console.log("Balance:", _this.balance);
        };
        _this.withdraw = function (amt) {
            return _this.balance >= amt
                ? (_this.balance -= amt, console.log("Balance after withdrawal:", _this.balance))
                : console.log("Not enough money");
        };
        _this.addInterest = function () {
            _this.balance += _this.balance * _this.rate;
            console.log("After interest:", _this.balance);
        };
        return _this;
    }
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.fee = 2;
        _this.deposit = function (amt) {
            _this.balance += amt;
            console.log("Balance:", _this.balance);
        };
        _this.withdraw = function (amt) {
            var total = amt + _this.fee;
            _this.balance >= total
                ? (_this.balance -= total, console.log("After withdrawal with fee:", _this.balance))
                : console.log("Not enough money");
        };
        return _this;
    }
    return CheckingAccount;
}(Account));
var save = new SavingsAccount();
save.deposit(1000);
save.addInterest();
save.withdraw(200);
var check = new CheckingAccount();
check.deposit(300);
check.withdraw(50);
// 5
var Media = /** @class */ (function () {
    function Media() {
    }
    return Media;
}());
var MyAudio = /** @class */ (function (_super) {
    __extends(MyAudio, _super);
    function MyAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.play = function () { return console.log("Playing audio"); };
        return _this;
    }
    return MyAudio;
}(Media));
var MyVideo = /** @class */ (function (_super) {
    __extends(MyVideo, _super);
    function MyVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.play = function () { return console.log("Playing video"); };
        return _this;
    }
    return MyVideo;
}(Media));
var media = [new MyAudio(), new MyVideo()];
media.forEach(function (m) { return m.play(); });
