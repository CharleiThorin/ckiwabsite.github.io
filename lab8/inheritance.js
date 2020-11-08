console.log("........Exercise 1: Filter Function ...........");
String.prototype.filter = function (bannedWord) {
    let split_words = this.split(" ");
    return split_words.filter(s => s !== bannedWord
).join(" ");
}
console.log("This house is not nice!".filter("not"));
console.log("........Exercise 1: ...........\n");


console.log("........Exercise 2: Bubble sort ...........");
Array.prototype.bubbleSort = function () {
    let len = this.length;
    for (let x = (len - 1); x >= 0; x--) {
        for (let y = (len - x); y > 0; y--) {
            if (this[y] < this[y - 1]) {
                let temp = this[y];
                this[y] = this[y - 1];
                this[y - 1] = temp;
            }
        }
    }
    return this;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());
console.log("........Exercise 2: ...........\n");


console.log("........Exercise 3: function Constructor ...........");
function Person(name) {
    this.name = name;
}
const teacher = new Person("Professor Tina Xing");
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
}
console.log(teacher.teach(" WAP"));
// Object.Create
console.log("\n ......Using Object Prototype: ");

const person = function () {
    return {name: "Charles"}
};
const teach = Object.create(person());
teach.name = "Professor Tina Xing";
teach.course = function (subject) {
    return this.name + " is now teaching " + subject
};
console.log(teach.course("WAP"));
console.log("........Exercise 3: function Constructor ...........\n");



console.log("........Exercise 4: Using Object Prototype ...........");
const Persons = {
    name: "Unknown",
    age: 20,
    greeting: function () {
        return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old"
    },
    salute: function () {
        return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!"
    }
}
const Student = Object.create(Persons);
Student.major = "Unknown";
Student.greeting = function () {
    return "Hey my name is " + this.name + " and I am studying " + this.major
};
Student.name = "Charles Kyewalabye";
Student.major = "WAP";
console.log(Student.greeting());
const Professor = Object.create(Persons);
Professor.department = "Unknown";
Professor.salute = function () {
    return "Good day Good day,\n" +
        "my name is " + this.name + " and I am in the " + this.department + " department.";
}

Professor.name = "Professor Tina Xing";
Professor.department = "Computer Science";
console.log(Professor.salute());
const professor = Object.create(Professor);
const student = Object.create(Student);
console.log(professor.salute());
console.log(student.greeting());
// 4b....function Constructor Aproach
console.log(" \n ..using function Constructor aproach......");

function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.prototype.greeting = function () {
    return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old";
}
Person1.prototype.salute = function () {
    return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!";
}
const Stud = new Person1("Charlei Thorin", 30);
Stud.major = "WAP";
Stud.greeting = function () {
    return "Hey my name is " + this.name + " and I am studying " + this.major
};
console.log(Stud.greeting());
const Profesor = new Person1("Professor Payman Salek", 46);
Profesor.department = "Computer Science";
Profesor.salute = function () {
    return "Good day Good day,\n" +
        "my name is " + this.name + " and I am in the " + this.department + " department.";
};
console.log(Profesor.salute());
const profesor = Object.create(Profesor);
const studnt = Object.create(Stud);
console.log(studnt.greeting());
console.log(profesor.salute());







