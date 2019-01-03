//Objectives:
// - Define prototype based inheritance.
// - Identify properties inherited by Object's prototype.
// - Diagram and discuss a prototype chain.

// Please, close your laptops, as you won't need it for next 15 min.

// This morning you have learned about objects. A quick refresher:
// there are 2 ways to create objects in JS:
// ---- literal notation
// object literal, does not enable to create new instances
var Obj = {
  kate: "Kate",
  jason: "Jason",
  jasonLikesCats: function() {
    console.log("YAAAASSSSS");
  }
}
// ---- using a constructor function.
// Let's focus on it at this moment.
//constructor function, blueprint to give ability to create multiple instances,
//still just a function
function Creature(name, age) {
  this.name = name;
  this.age = age;
}
//will create a new object with properties 'name', 'age'
var joy = new Creature('Joy', 0.6);
//What if I want Joy to talk?
//How would you do it?
//......
//OK
joy.talk = function(){
  console.log("Hello");
}
//YOU DO: take 5 min and create more creatures.....
//And give them abilities....
//How do you feel? Tedious, right? What is you want ALL creatures to talk?
//What are your thoughts on how to accomplish this?
//NOW ALL CREATURES WILL KNOW HOW TO SAY "HELLO"
Creature.prototype.hello = function() {
  console.log("hello");
};

//Draw a prototype chain on the board...
// Discuss


//WRAP UP:
// Can we define prototype based inheritance?
// > in most languages things inherit from classes
// since there really are no classes in JS
// things inherit from the prototype chain
// its a two step process
// look inside the object itself
// What properties are inherited by Object's prototype?
// >
