
console.log("*** \
Demo to show Object literal example ***");


//Object literal example
const animal = {
    name: 'Duck',
    hobby: 'Paddling'
  };

//Object literal example

var tempobj = {};

console.log(animal.name+" "+animal.hobby);
console.log("type of tempobj "+typeof tempobj);

console.log("*** \
Object creation example ***");

const animal2 = new Object();
animal2.name = 'Cat';
animal2.hobby = 'hunt';

console.log(animal2.name+" "+animal2.hobby);
console.log("type of animal2 "+typeof animal2);

console.log("*** \
Object literal example with string literal as attribute ***");

const dataobj = {
    hobbies: ['tennis', 'kayaking'],
    'my hobbies': ['tennis', 'kayaking']
  };
  
  console.log(dataobj.hobbies);       // Easy
  console.log(dataobj['my hobbies']); // Burdensome


  console.log("*** \
  You can also use computed property names (delimited by square brackets) to add dynamically \
  named items to an object literal: ****");

  const dataobj2 = {  ['item' + (1 + 2)]: 'foo'};
  console.log(dataobj2); // => { item3: "foo" }
  console.log(dataobj2.item3); // => "foo"
  

console.log("*** \
Demo to show how toString() can be used to use attributes as property *****");

  const me = {
    name: 'James',
    location: 'England',
    toString() {
      return [this.name, this.location].join(', ')
    }
  };
  
  console.log(me.toString()); // => "James, England"
  console.log(String(me)); // => "James, England"


//when object struing conversion used as dynamic attribute
const peopleInEurope = {};

peopleInEurope[me] = true;
console.log(Object.keys(peopleInEurope)); // => ["James, England"]
console.log(peopleInEurope[me]); // => true


console.log("*** \
Demo to show how Objectproperties can be configurable/enumerable/writeable can \
be used *****");

const myObject = {};

Object.defineProperty(myObject, 'name', {
  writeable: false,
  configurable: false,
  enumerable: true,
  value: 'The Unchangeable Name'
});

myObject.name; // => "The Unchangeable Name"
myObject.name = 'something else'; // => (Ineffective)
myObject.name; // => "The Unchangeable Name"

delete myObject.name; // => false (Ineffective)
myObject.name; // => "The Unchangeable Name"

//
//You can also use Object.defineProperties() to describe many properties at once
const chocolate = Object.defineProperties({
    // Empty object where our described properties
    // will be placed
  }, {
   name: { value: 'Chocolate', enumerable: false },
   tastes: { value: ['Bitter', 'Sweet'], enumerable: true }
  });
  
  console.log(chocolate.name); // => "Chocolate"
  console.log(chocolate.tastes); // => ["Bitter", "Sweet"]
  
  console.log(Object.keys(chocolate)); // => ["tastes"]

  console.log("*** \
Demo to show get and set fucntions for a property through \
Object.defineProperties() *****");

  const data = Object.defineProperties({}, {
    name: {
    set(name) { this.normalizedName = name.toLowerCase(); },
    get() { return this.normalizedName; }
    }
    });
    
    data.name = 'MoLLy BroWn';
    console.log(data.name); // => "molly brown"

    console.log(Object.keys(data));