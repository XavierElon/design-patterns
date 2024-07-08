class Pizza {
  constructor(size = 'default', crust = 'default', toppings = 'defaults') {
    this.size = size
    this.crust = crust
    this.toppings = toppings
  }

  showPizza() {
    console.log(`Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings}`)
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza()
  }

  buildSize() {}
  buildCrust() {}
  buildToppings() {}
}

class HawaiianPizzaBuilder extends PizzaBuilder {
  buildSize() {
    this.pizza.size = 'Large'
  }

  buildCrust() {
    this.pizza.crust = 'Thin'
  }

  buildToppings() {
    this.pizza.toppings = 'Ham, Pineapple'
  }
}

class PepperoniPizzaBuilder extends PizzaBuilder {
  buildSize() {
    this.pizza.size = 'Small'
  }

  buildCrust() {
    this.pizza.crust = 'Thick'
  }

  buildToppings() {
    this.pizza.toppings = 'Pepperoni'
  }
}

class Waiter {
  constructor(pizzaBuilder) {
    this.pizzaBuilder = pizzaBuilder
  }

  constructPizza() {
    this.pizzaBuilder.buildSize()
    this.pizzaBuilder.buildCrust()
    this.pizzaBuilder.buildToppings()
  }

  getPizza() {
    return this.pizzaBuilder.pizza
  }
}

let hawaaianWaiter = new Waiter(new HawaiianPizzaBuilder())
hawaaianWaiter.constructPizza()
let hawaaianPizza = hawaaianWaiter.getPizza()
hawaaianPizza.showPizza()

let pepperoniWaiter = new Waiter(new PepperoniPizzaBuilder())
pepperoniWaiter.constructPizza()
let pepperoniPizza = pepperoniWaiter.getPizza()
pepperoniPizza.showPizza()
