class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(this.name + ' makes a noise')
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name) // Calls the parent class constructor with the name argument
    this.breed = breed
  }

  speak() {
    super.speak() // Calls the parent class speak method
    console.log(this.name + ' barks')
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }

  speak() {
    super.speak()
    console.log(this.name + ' meows')
  }
}

const dog = new Dog('Flocka', 'Pomeranian')
const cat = new Cat('Fluffy', 'Persian')

dog.speak()
cat.speak()
