const engineerPrototype = {
    type: 'Engineer',
    sayHello() {
    return `Hello, I'm ${this.name} and I'm an ${this.type}`;
    }
    };

 // TAG the prototype to new object  
const pandaTheEngineer = Object.create(engineerPrototype);


pandaTheEngineer.name = 'Panda';
console.log(pandaTheEngineer.sayHello()); // => "Hello, I'm Panda and I'm an Engineer"

console.log(pandaTheEngineer.sayGoodbye); // => TypeError: sayGoodbye is not a function
engineerPrototype.sayGoodbye = () => 'Goodbye!';
console.log(pandaTheEngineer.sayGoodbye()); // => 'Goodbye!'

//defining sayHello at object level thus masking prototype function

pandaTheEngineer.sayHello = () => 'Yo!';
console.log(pandaTheEngineer.sayHello()); // => "Yo!"


//remove object level and again protype level accessible
delete pandaTheEngineer.sayHello;
console.log(pandaTheEngineer.sayHello()); // => // => "Hello, I'm Panda and I'm an Engineer"


// We can inspect its prototype:
console.log(Object.getPrototypeOf(pandaTheEngineer) === engineerPrototype); // => true

//which properties are coming from which object, we are always able to inspect

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(pandaTheEngineer)));


// Modify the prototype object:
engineerPrototype.type = "Awesome Engineer";


// Call a method on our object (that uses the prototype):
console.log(pandaTheEngineer.sayHello()); // => "Hello, I'm Panda and I'm an Awesome Engineer"

