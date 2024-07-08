// Abstract base class
class Shape {
  draw() {
    //abstract method
  }
}

// Concreate classes
class Circle extends Shape {
  draw() {
    console.log('Drawing a circle')
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('Drawing a rectangle')
  }
}

// Factory class
class ShapeFactory {
  // static methods are called on the class itself, not on instances of the class. This means you use the class name to call the method.
  static getShape(type) {
    if (type === 'CIRCLE') {
      return new Circle()
    } else if (type === 'RECTANGLE') {
      return new Rectangle()
    }
    return null
  }
}

// Client code
const circle = ShapeFactory.getShape('CIRCLE')
circle.draw()

const rectangle = ShapeFactory.getShape('RECTANGLE')
rectangle.draw()
