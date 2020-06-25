// Function Declaration
function myFunction() {}

// Function Expression
const myFunction1 = function () {};

// Named Function Expression
const myFunction2 = function myFunction() {};

// "Fat"-Arrow Function Expression
const myFunction3 = () => {};

//method definition inside Object definition , are separated by comma
const things = {
    myMethod() {},
    anotherMethod() {}
    };

//Method declration inside class definition , are NOT separasted by comma
class Thing {
    myMethod() {}
    anotherMethod() {}
  }

//binding function to object 
//evaluating this 
const london = { name: 'London' };
const tokyo = { name: 'Tokyo' };

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName(); // => Logs: "My name is undefined"

london.sayMyName = sayMyName;
london.sayMyName(); // => Logs "My name is London"

tokyo.sayMyName = sayMyName;
tokyo.sayMyName(); // => Logs "My name is Tokyo"

//you can use bind(X) to create a new function that will have its this value set to X:

console.log("binding function to object tokyo");
const sayHelloToTokyo = sayMyName.bind(tokyo);
sayHelloToTokyo(); // => Logs "My name is Tokyo"

// const Utils = {
//     constructor() {
//       super(); // <= I can use super here
//     } 
//     method() {
//       super.method(); // <= And here...
//     }
//   }
  
//   const utils = {
//     method() {
//       return super.property; // <= And even here...
//     }
//   };

const hullaballoo = function hullaballoo() { console.log("hullaballoo");}
hullaballoo();
console.log("name of the fucntion is "+hullaballoo.name);

//demo showing binding like this is not accessible inside
//arrow functions but accessible in function expressions
class FooBear {
    name = 'Foo Bear';
  }
  
  FooBear.prototype.sayHello = () => console.log(`Hello I am ${this.name}`);
  new FooBear().sayHello(); // => "Hello I am ";
  
  FooBear.prototype.sayHello = function() {
    return `Hello I am ${this.name}`;
  };
  console.log(new FooBear().sayHello()); // => "Hello I am Foo Bear";

  //demo of super in  method definitions 

  class Dog {
    greet() { return 'Bark!'; }
  }
  
  class Cat {
    greet() { return 'Meow!'; }
  }
  
  class JessieTheDog extends Dog {
    greet() { return `${super.greet()} I am Jessie!`; }
  }
  
  class JessieTheCat extends Cat {
    greet() { return `${super.greet()} I am Jessie!`; }
  }

  const jdog = new JessieTheDog();
  console.log(jdog.greet());

  const jcat = new JessieTheCat();
  console.log(jcat.greet());
