
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


 //javascript class inheritance 3.23.25
// enhances code reusability.
 class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello "   + this.name);
    }
 }
 // javascript super method
class Student extends Person{
      greet(){
        console.log("Hello  student"   + this.name);
    }
   }
  

const student1 = new Student("Peter");
student1.greet();

//method or property overriding

class Animal{
  constructor(name){
this.name = name;
  }

  static greet(G){
    console.log("Hello!" + G.name);
    
  }
}

const animal1 = new Animal("Benoa");
Animal.greet(animal1);



// private methods
class House{
  constructor(firstName,lastName){// this initialises object properties.
  this.firstName = firstName;
  this.lastName = lastName;
  }
  #fullName(){//private method
    return this.firstName + "" +this.lastName;//
  }
  display(){
    console.log(this. #fullName());
    
  }//
}
const house1 = new House("Oaks","Heights");
house1.display();


// private static method
class Toy{
  constructor(firstName,lastName){// this initialises object properties.
  this.firstName = firstName;
  this.lastName = lastName;
  }
  static #fullName(X){//private method
    return X.firstName + " " +X.lastName;//
  }
  display(){
    console.log(Toy.#fullName(this));
    
  }
}
const toy1 = new Toy("pickup","cabin");
toy1.display();

 <script src="cons.js"></script>


































 