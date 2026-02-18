


function Person(fName, lName) {
    this.firstName = fName,
    this.lastName = lName
}

Person.prototype.gender = "Male";

const person1 = new Person("Elon","Musk");
const person2 = new Person("Betty","Kyalo");

console.log(person1.gender);



