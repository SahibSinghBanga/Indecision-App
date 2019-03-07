class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;       // !!undefined => false
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.` // a = a + b => a += b
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreetings() {
        let greetings = super.getGreetings();

        if (this.homeLocation) {
            greetings += ` I am travelling from ${this.homeLocation}.`
        }

        return greetings;
    }
}

const person1 = new Traveller("Andrew", 20, 'New York');
console.log(person1.getGreetings());

const person2 = new Traveller();
console.log(person2.getGreetings());

