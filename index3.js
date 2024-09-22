class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        // Call the parent constructor using 'super'
        super(name, age);
        
        // Validate roll number
        if (rollNumber <= 0) {
            throw new Error("Roll number must be positive.");
        }
        
        this.rollNumber = rollNumber;
    }

    introduce() {
        // Override the introduce method
        return `${super.introduce()} My roll number is ${this.rollNumber}.`;
    }

    study(subject) {
        return `${this.name} is studying ${subject}.`;
    }
}

try {
    const student1 = new Student("Jane", 20, 12345);
    console.log(student1.introduce());
    
    const student2 = new Student("John", 22, -1); // This will throw an error
} 
catch (error) {
    console.error(error.message);
}

const student3 = new Student("Ria", 21, 67890);
console.log(student3.study("Mathematics"));