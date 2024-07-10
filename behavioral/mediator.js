// Mediator Pattern
class Mediator {
  sendMessage(message, sender) {}
}

// Interface
class Department {
  constructor(mediator) {
    this.mediator = mediator
  }

  sendMessage(message) {
    this.mediator.sendMessage(message, this)
  }

  receiveMessage(message) {}
}

// Concrete Mediators
class HRDepartment extends Department {
  receiveMessage(message) {
    console.log(`HR received: ${message}`)
  }
}

class FinanceDepartment extends Department {
  receiveMessage(message) {
    console.log(`Finance received: ${message}`)
  }
}

class OfficeMediator extends Mediator {
  constructor() {
    super()
    this.departments = new Map()
  }

  addDepartment(name, department) {
    this.departments.set(name, department)
  }

  sendMessage(message, sender) {
    for (const [name, department] of this.departments) {
      if (department !== sender) {
        department.receiveMessage(`${sender.constructor.name}: ${message}`)
      }
    }
  }

  // Setters for HR and Finance departments
}

// Client
const mediator = new OfficeMediator()
const hr = new HRDepartment(mediator)
const finance = new FinanceDepartment(mediator)

mediator.addDepartment('HR', hr)
mediator.addDepartment('Finance', finance)

hr.sendMessage('Hello from HR')
finance.sendMessage('Hello from Finance')
