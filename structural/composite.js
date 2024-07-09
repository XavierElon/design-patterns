class OrganizationComponent {
  getName() {}
  getHours() {}
}

class Employee extends OrganizationComponent {
  constructor(name, hours) {
    super()
    this.name = name
    this.hours = hours
  }

  getName() {
    return this.name
  }

  getHours() {
    return this.hours
  }
}

class Department extends OrganizationComponent {
  constructor(name) {
    super()
    this.name = name
    this.components = []
  }

  addComponent(component) {
    this.components.push(component)
  }

  removeComponent(component) {
    const index = this.components.indexOf(component)
    if (index > -1) {
      this.components.splice(index, 1)
    }
  }

  getName() {
    return this.name
  }

  getHours() {
    return this.components.reduce((totalHours, component) => {
      return totalHours + component.getHours()
    }, 0)
  }
}

const developmentDepartment = new Department('Development')
const marketingDepartment = new Department('Marketing')

const john = new Employee('John', 40)
const jane = new Employee('Jane', 50)
const uttara = new Employee('Uttara', 45)
const michelle = new Employee('Michelle', 33)

developmentDepartment.addComponent(john)
developmentDepartment.addComponent(uttara)
marketingDepartment.addComponent(michelle)
marketingDepartment.addComponent(jane)

console.log(`Total Hours in Development Department: ${developmentDepartment.getHours()}`)
console.log(`Total Hours in Marketing Department: ${marketingDepartment.getHours()}`)

console.log(`Total Hours in Organization: ${developmentDepartment.getHours() + marketingDepartment.getHours()}`)
