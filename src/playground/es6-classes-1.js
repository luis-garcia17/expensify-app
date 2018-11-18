class Person {
    constructor(name = `Anonymous`, age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi my name is ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() { return !!this.major};
    getDescription() {
        // let description = super.getDescription();
        if(this.hasMajor()) {
            return `${super.getDescription()} and their major is ${this.major}`
        } else {
            return super.getDescription()
        }
    }
};

class Traveler extends Person {
    constructor(name, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
          greeting += ` I'm visiting from ${this.homeLocation}`;
        } 
         return greeting;
    }
};

// const me = new Student(`Luis`, 30, `Software developer`);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getGreeting());
// console.log(other.getDescription());

const me = new Traveler(`Luis`, `Reynosa`);
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
