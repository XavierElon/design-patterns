// Visitor Interface
class DiscountVisitor {
  visitFood(food) {}
  visitClothing(clothing) {}
  visitElectronics(electronics) {}
}

// Concrete Visitors
class HolidayDiscountVisitor extends DiscountVisitor {
  visitFood(food) {
    console.log('Applying discount to food: ' + food)
  }

  visitClothing(clothing) {
    console.log('Applying discount to clothing: ' + clothing)
  }

  visitElectronics(electronics) {
    console.log('Applying discount to electronics: ' + electronics)
  }
}

class ClearanceDiscountVisitor extends DiscountVisitor {
  visitFood(food) {
    console.log('Applying cleareance discount to food: ' + food)
  }

  visitClothing(clothing) {
    console.log('Applying clearance discount to clothing: ' + clothing)
  }

  visitElectronics(electronics) {
    console.log('Applying clearance discount to electronics: ' + electronics)
  }
}

// Product Interface
class Product {
  accept(visitor) {}
}

// Concrete Products
class Food extends Product {
  accept(visitor) {
    visitor.visitFood(this)
  }
}

class Clothing extends Product {
  accept(visitor) {
    visitor.visitClothing(this)
  }
}

class Electronics extends Product {
  accept(visitor) {
    visitor.visitElectronics(this)
  }
}

// Client
const food = new Food()
const clothing = new Clothing()
const electronics = new Electronics()

const holidayDiscountVisitor = new HolidayDiscountVisitor()
const clearanceDiscountVisitor = new ClearanceDiscountVisitor()

food.accept(holidayDiscountVisitor)
clothing.accept(clearanceDiscountVisitor)
electronics.accept(holidayDiscountVisitor)
