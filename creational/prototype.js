// Prototype
class Car {
  constructor() {
    this.model = 'Model S'
    this.color = 'White'
  }

  clone() {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this))
  }

  customize(color, accessories) {
    throw new Error('Method must be implemented.')
  }
}

// Concrete car
class BasicCar extends Car {
  customize(color, accessories) {
    this.color = color
    console.log(`Customizing ${this.model} with ${accessories} and ${color}.`)
  }
}

// Client Code
const basicCar = new BasicCar()
const customCar1 = basicCar.clone()

customCar1.customize('Red', 'Leather seats')

const customCar2 = basicCar.clone()
customCar2.customize('Blue', 'Alloy wheels')
