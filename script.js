// complete this js code
function Person(name, age) {
	
}

person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {}

Employee.prototype.__proto__=person.prototype;

Employee.prototype.jobGreet=function(){
    console.log(`Hello, my name is ${}, I am ${} years old, and my job title is ${}.`)
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
