class Observer {
  update(temperature, humidity, pressure) {}
}

class Subject {
  constructor() {
    this.observers = []
  }

  registerObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure)
    }
  }
}

class WeatherStation extends Subject {
  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.notifyObservers()
  }
}

class CurrentConditionDisplay extends Observer {
  update(temperature, humidity, pressure) {
    console.log(`Current conditions: ${temperature}F degrees and ${humidity}% humidity`)
  }
}

class StatisticsDisplay extends Observer {
  constructor() {
    super()
    this.temperatures = []
  }

  update(temperature, humidity, pressure) {
    this.temperatures.push(temperature)
    const avgTemp = this.temperatures.reduce((sum, temp) => sum + temp, 0) / this.temperatures.length
    console.log(`Avg/Max/Min temperature = ${avgTemp.toFixed(1)}/${Math.max(...this.temperatures)}/${Math.min(...this.temperatures)}`)
  }
}

// Usage
const weatherStation = new WeatherStation()
const currentDisplay = new CurrentConditionDisplay()
const statisticsDisplay = new StatisticsDisplay()

weatherStation.registerObserver(currentDisplay)
weatherStation.registerObserver(statisticsDisplay)

console.log('First measurement:')
weatherStation.setMeasurements(80, 65, 1010)

console.log('\nSecond measurement:')
weatherStation.setMeasurements(82, 70, 1012)

console.log('\nThird measurement:')
weatherStation.setMeasurements(78, 90, 1015)
