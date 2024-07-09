// software entities (such as classes, modules, functions, etc.) should be closed for modification but open for extension.
class Pizza {
  getCost() {}
  getDescription() {}
}

class PlainPizza extends Pizza {
  getCost() {
    return 10.0
  }
  getDescription() {
    return 'Plain Pizza'
  }
}

class ToppingDecorator extends Pizza {
  constructor(pizza) {
    super()
    this.pizza = pizza
  }
  getCost() {
    return this.pizza.getCost()
  }
  getDescription() {
    return this.pizza.getDescription()
  }
}

class CheeseDecorator extends ToppingDecorator {
  getCost() {
    return this.pizza.getCost() + 2.5
  }
  getDescription() {
    return this.pizza.getDescription() + ', Cheese'
  }
}

class OnionDecorator extends ToppingDecorator {
  getCost() {
    return this.pizza.getCost() + 1.5
  }
  getDescription() {
    return this.pizza.getDescription() + ', Onion'
  }
}

let pizza = new PlainPizza()
pizza = new CheeseDecorator(pizza)
pizza = new OnionDecorator(pizza)

console.log('Cost: ' + pizza.getCost())
console.log('Description: ' + pizza.getDescription())
