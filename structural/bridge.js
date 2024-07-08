// Implementor
class Transmission {
  applyGear() {}
}

// Concrete Implementors
class AutomaticTransmission extends Transmission {
  applyGear() {
    console.log('Automatic transmission applied.')
  }
}

class ManualTransmission extends Transmission {
  applyGear() {
    console.log('Manual transmission applied.')
  }
}

// Abstraction
class Vehicle {
  constructor(transmission) {
    this.transmission = transmission
  }
  applyTransmission() {}
}

// Refined Abstraction
class Car extends Vehicle {
  applyTransmission() {
    this.transmission.applyGear()
  }
}

class Truck extends Vehicle {
  applyTransmission() {
    this.transmission.applyGear()
  }
}

// Client Code
const manual = new ManualTransmission()
const automatic = new AutomaticTransmission()

const car = new Car(manual)
const truck = new Truck(automatic)

car.applyTransmission()
truck.applyTransmission()
