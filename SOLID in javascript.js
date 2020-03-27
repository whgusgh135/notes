// SINGLE RESPONSIBILITY PRINCIPLE
// A class should have one, and only one, reason to change

// Bad approach
function createUserBadWay(name, email) {
    let isEmailValid = validateEmail(email);
    if (isEmailValid) {
        createUserInDatabase(name, email);
    }
}

// Good approach
function createUserGoodWay(name, email) {
    createUserInDatabase(name, email);
}

function validateRequest(req) {
    let isEmailValid = validateEmail(req.mail);
    if (isEmailValid) {
        createUserGoodWay(req.name, req.email);
    }
}


// OPEN/CLOSED PRINCIPLE
// Software entities (classes, modules, functions, etc) should be
// open for extension, but closed for modification

// Bad approach
function announceBad(collection) {
    collection.items.forEach(element => console.log(element));
}

let cities = ["Seoul", "Daegu", "Busan"];
announceBad(cities);
// what if we change cities to object rater than array?

// Good approach
function announceGood(collection) {
    collection.logItems();
}

let cities = {
    items: {
        "Korea": "Seoul",
        "NewZealand": "Wellington"
    },

    logItems: () => {
        Object.keys(this.items).forEach(key => {console.log(this.items[key])})
    }
}


// LISKOV SUBSTITUTION PRINCIPLE
// Any class that is the child of a parent class should be usable
// in place of its parent without any unexpected behaviour
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getEmployeeDetails() {
        console.log('Employee Name: ', this.name);
        console.log('Employee id: ', this.employee_id);
        console.log('Department is: ', this.department);
    }

    getSalaryDetails() {
        console.log('Basic Salary is: ', this.basic_salary);
    }
}

class Permanent extends Employee {
    constructor(name, id, department, designation, salary, tds){
        super(name, id, department, salary);
        this.type = 'Permanent';
        this.designation = designation;
        this.tds = tds;
    }

    getOtherDetails() {
        console.log('Department is: ', this.designation);
        console.log('Employee type is: ', this.type);
    }

    getSalaryDetails() {
        console.log('Basic salary is: ', this.basic_salary);
        console.log('TDS is: ', this.tds);
    }
}
// Derived class just extension of Base class without replacing the functionality of old class
// Employee class have getSalaryDetails() and Permanent, Contract classes also have getSalaryDetails() function.
// Means Base class getSalaryDetails() behaviour is changed by the Subtype classes(derived class).
// It should not be done according to the LSP


// INTERFACE SEGREGATION PRINCIPLE
// Clients should not be forced to depend upon
// interfaces that they do not use.
// If interface gets too big, break it up to smaller interfaces

// Bad way
class badInterface {
    calculate();
    print();
}

class badClass extends badInterface {
    // what if this class doesn't need print() method???
}

// Good way
class calculateInterface {
    calculate();
}

class printInterface {
    print();
}

class goodClass extends calculateInterface, printInterface {
    // can extend multiple interfaces so just get the ones needed
}


// DEPENDENCY INVERSION PRINCIPLE
// High-level modules should not depend on low-level modules
// Both should depend on abstractions
// Abstractions should not depend on details
// Details should depend on abstractions

// Bad way
// Low-level
function Wheels() {
    this.action = () => log("The wheels go 'round and 'round.");
    log("Made some wheels.");
}

function Engine() {
    this.action = () => log("The pistons fire up and down.");
    log("Made some pistons.");
}

// High-level
function Car() {
    this.wheels = new Wheels();
    this.engine = new Engine();
    this.action = () => {
        this.wheels.action();
        this.engine.action();
        log("The car drives by.");
    };
    log("Made a car.");
}

// Good way
class CarInterface {
    action();
}
class WheelsGood extends CarInterface {}
class EngineGood extends CarInterface {}

class Car {
    constructor(wheels, engine) {
        this.wheels = wheels;
        this.engine = engine;
    }
    action () {
        this.wheels.action();
        this.engine.action();
    }
}