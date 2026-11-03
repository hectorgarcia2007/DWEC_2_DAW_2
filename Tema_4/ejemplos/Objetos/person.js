const person = {
  isHuman: false,
  myDetais: function () {
    console.log(`My full name is ${this.name} ${this.lastName}. Am I human?
${this.isHuman}`);
  },
};
const rick = Object.create(person);
rick.name = "Rick";
rick.lastName = "Sekuloski";
rick.isHuman = true;
rick.myDetais();
