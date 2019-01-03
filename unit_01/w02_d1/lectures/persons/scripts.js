
//  What does it mean to be a person...?
class Person {
  constructor(name) {
    this.name = name;  // ... it means I hold on to a name!
  }
}

//  The painter... the object that knows what a person should... look like
class PersonView {
  constructor(personInstance) {
    this.personInstance = personInstance;  // I should remember who i am drawing
    this.el = document.createElement('li');  // I need a blank canvas to draw on
  }
  render() {  //  draw the painting
    this.el.innerHTML = this.personInstance.name;  // draw in the person's name
  }
}

const people = [  //   a bunch of people!
  new Person('Lichard'),  // new person instance... with the name Lichard
  new Person('Kathew'), // new person instance... with the name Kathew
  new Person('Omily'), // new person instance... with the name Omily
  new Person('Joy'), // new person instance... with the name Joy
];

const ulNode = document.querySelector('.name-list');  // Grab from the dom... the ul
let personPainter;

for (let person of people) {  // for each of the person
  personPainter = new PersonView(person); // create a view object for the person
  personPainter.render() // ask that view object to render itself
  ulNode.appendChild(personPainter.el) // place the view object's element on the ulNode (defined above)
}
