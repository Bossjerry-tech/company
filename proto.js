function Person(){
     this.name = " Rayan Cherki"
}
Person.prototype.age = 25;
const person1 = new Person();
Person.prototype = {age: 52}
const person2 = new Person();
console.log(person1.age);
console.log(person2.age);


const person ={
     firstName:"laurent",
     lastName:"koscielny",
     age: 67
}

//let {firstName,lastName ,age} = person;//
 

console.log(age,firstName,lastName);


//object literal syntax extensions in ES6

let firstName = "karim";
let lastName = "benzema";


const person57 = {
     firstName,
     lastName
}
console.log(person57);


//class is a template for objects
function Person(name,age){
     this.name = name;
     this.age = age;
}
const person15 = new Person("Elon Musk",52);
console.log(person15);









//javascript class methods
//class Person{
   // constructor(name,age){
     //this.name = name;
    // this.age = age;
   // }
 //  get greet(){
  //      return "Hello " + this.name;

  //set changeName(newName){
   // this.nane = newName;
 // }
 //  }
//}
//const person1 = new Person("Elon Musk",52);
//person1.changeName = "Boss";
//console.log(person1);

//Getters and setters are special methods in javascript that allow you to control how properties are accessed and modified.
//defined using get and set keyword.
//getter method is called when a property is accessed.it can be used to do things like validate the value of the property or convert it to a different format.
 //class Man{
   // constructor(name,age){
      //  this.name = name;
      //  this.age = age;
   // }
   // set manName(newName){
      //  this.name = newName;
    //}
   // get manName(){
       // return this.name
   // }
// }
 //const man1 = new Man("Jerry Ritchie", 21);
// console.log(man1.manName);
// man1.manName = "Mtumba";
 //console.log(man1.manName);

 //Javascript class expression provides you with an alternative way to define a new class.

// let Car = class{
    //consrtuctor(name){
      //  this.name = name
  //  }
    //getName(){
    ////    return this.name
    //}
 //}
 //const car1 = new Car("Hernan Perez");
 //console.log(car1);