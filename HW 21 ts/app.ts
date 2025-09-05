// 1

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound = (): string => "Bark";
}

class Cat extends Animal {
  makeSound = (): string => "Meow";
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(a => console.log(a.makeSound()));


// 2

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  constructor(public radius: number, public color: string) {
    super();
  }

  calculateArea = (): number => Math.PI * this.radius * this.radius;
}

class ColoredRectangle extends ColoredShape {
  constructor(public width: number, public height: number, public color: string) {
    super();
  }

  calculateArea = (): number => this.width * this.height;
}

const shapes: ColoredShape[] = [
  new ColoredCircle(3, "red"),
  new ColoredRectangle(4, 5, "blue")
];

shapes.forEach(s => console.log("Color:", s.color, "Area:", s.calculateArea()));


// 3

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn = () => console.log("Washing machine ON");
  turnOff = () => console.log("Washing machine OFF");
}

class Refrigerator extends Appliance {
  turnOn = () => console.log("Refrigerator ON");
  turnOff = () => console.log("Refrigerator OFF");
}

const devices: Appliance[] = [new WashingMachine(), new Refrigerator()];

devices.forEach(d => {
  d.turnOn();
  d.turnOff();
});


// 4

abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private balance = 0;
  private rate = 0.05;

  deposit = (amt: number): void => {
    this.balance += amt;
    console.log("Balance:", this.balance);
  };

  withdraw = (amt: number): void =>
    this.balance >= amt
      ? (this.balance -= amt, console.log("Balance after withdrawal:", this.balance))
      : console.log("Not enough money");

  addInterest = (): void => {
    this.balance += this.balance * this.rate;
    console.log("After interest:", this.balance);
  };
}

class CheckingAccount extends Account {
  private balance = 0;
  private fee = 2;

  deposit = (amt: number): void => {
    this.balance += amt;
    console.log("Balance:", this.balance);
  };

  withdraw = (amt: number): void => {
    const total = amt + this.fee;
    this.balance >= total
      ? (this.balance -= total, console.log("After withdrawal with fee:", this.balance))
      : console.log("Not enough money");
  };
}

const save = new SavingsAccount();
save.deposit(1000);
save.addInterest();
save.withdraw(200);

const check = new CheckingAccount();
check.deposit(300);
check.withdraw(50);


// 5

abstract class Media {
  abstract play(): void;
}

class MyAudio extends Media {
  play = (): void => console.log("Playing audio");
}

class MyVideo extends Media {
  play = (): void => console.log("Playing video");
}

const media: Media[] = [new MyAudio(), new MyVideo()];

media.forEach(m => m.play());
