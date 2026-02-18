function Person(first, last){
    this.firstName = first,
    this.lastName = last
}
const person1 = new Person("Elon","musk");
const person2 = new Person("Bill","Gates");

person1.age = 52;
//adding a method in the object
person2.greet = function(){
    console.log("Hello , Jerry Gerald");
    
}
person2.greet()

//Adding a method in a constructor function
//function Person(first, last){
    //this.firstName = first,
    ////this.lastName = last,
   // this.getFullname = function(){
      //  return this.firstName + " " + this.lastName//
   // }//
//}//
const person13 = new Person("Elon","musk");
const person24 = new Person("Bill","Gates");

console.log(person13.getFullname());



//Javascript object prototype
function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.gender = 'male';
const Person4 = new Person("Elon","Musk");
const Person5 = new Person("David","Silva");

console.log(Person4);



var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length







function Person54(){
    this.firstName = "jerry",
    this.lastName  = "Gerald"
}
