import { Animal } from "./animal.js";

class Dog extends Animal {
  bark() {
    return `The ${this.name} barks!`;
  }
  static cry() {
    return "Jo que mal";
  }
}
let perro = new Dog("Dog");
console.log(perro.startRunning(10));
console.log(perro.bark()); //The Dog barks!
console.log(Dog.cry());
