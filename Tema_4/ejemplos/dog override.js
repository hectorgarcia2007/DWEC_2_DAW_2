import { Animal } from "./animal.js";

class Dog extends Animal {
  stopRunning() {
    //this method will be used by the instances of the Dog class
    super.stopRunning();
    console.log("The dog is licking its paws");
  }
  bark() {
    return `The ${this.name} barks!`;
  }
}

let perro = new Dog("Dog");
console.log(perro.startRunning(10));
console.log(perro.stopRunning());
console.log(perro.bark()); //The Dog barks!
