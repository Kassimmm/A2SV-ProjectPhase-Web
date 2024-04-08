// javascript class declaration

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello and welcome ${this.name}! You are ${this.age} years old`);
    }
}

// Javascript inheritance 

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade
    }

    study(){
        console.log(`${this.name} likes studying, so he had an ${this.grade} in his final exams`)
    }
}


//static class only accesible in the class

class Calculator{

    static square(num){
        return num * num
    }
}



// creating a new object
const john = new Student("John", 15, "A");

john.greet();
john.study();

console.log(Calculator.square(5))