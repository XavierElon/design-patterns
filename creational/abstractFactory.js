class Pastry {
  serve() {
    return ''
  }
}

class CoffeePastry extends Pastry {
  serve() {
    return 'Coffee Pastry'
  }
}

class TeaPastry extends Pastry {
  serve() {
    return 'Tea Pastry'
  }
}

// CafeFactory Interface
class CafeFactory {
  createDrink() {
    // This is a placeholder method that should be overridden by subclasses.
  }

  createPastry() {
    // This is a placeholder method that should be overridden by subclasses.
  }
}

class CoffeeCafeFactory extends CafeFactory {
  createDrink() {
    return new CoffeeDrink()
  }

  createPastry() {
    return new CoffeePastry()
  }
}

class TeaCafeFactory extends CafeFactory {
  createDrink() {
    return new TeaDrink()
  }

  createPastry() {
    return new TeaPastry()
  }
}

class CoffeeDrink {
  serve() {
    return 'Serving Coffee'
  }
}

class TeaDrink {
  serve() {
    return 'Serving Tea'
  }
}

const coffeeFactory = new CoffeeCafeFactory()
const coffee = coffeeFactory.createDrink()
const croissant = coffeeFactory.createPastry()

console.log(coffee.serve())
console.log(croissant.serve())

const teaFactory = new TeaCafeFactory()
const tea = teaFactory.createDrink()
const scone = teaFactory.createPastry()

console.log(tea.serve())
console.log(scone.serve())
