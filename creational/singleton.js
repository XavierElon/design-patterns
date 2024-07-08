class SingletonObject {
  constructor() {
    // Make the constructor private so that this class cannot be instantiated directly
    if (SingletonObject.instance) {
      return SingletonObject.instance
    }
    SingletonObject.instance = this
  }

  static getInstance() {
    if (!SingletonObject.instance) {
      SingletonObject.instance = new SingletonObject()
    }
    return SingletonObject.instance
  }

  showMessage() {
    console.log('Singleton Object')
  }
}

class SingletonDemo {
  static main() {
    // Get the only object available
    let instance1 = SingletonObject.getInstance()
    instance1.showMessage()

    let instance2 = SingletonObject.getInstance()
    instance2.showMessage()

    let instance3 = new SingletonObject()
    instance3.showMessage()
    let instance4 = new SingletonObject()
    instance4.showMessage()

    console.log(instance1 === instance2)
    console.log(instance3 === instance4)
  }
}

SingletonDemo.main()
