// Interface
class Command {
  execute() {}
}

// Receiver
class Light {
  turnOn() {
    console.log('Light turned on')
  }

  turnOff() {
    console.log('Light turned off')
  }
}

// Concrete Commands
class TurnOnLightCommand extends Command {
  constructor(light) {
    super()
    this.light = light
  }

  execute() {
    this.light.turnOn()
  }
}

class TurnOffLightCommand extends Command {
  constructor(light) {
    super()
    this.light = light
  }

  execute() {
    this.light.turnOff()
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command
  }

  pressButton() {
    this.command.execute()
  }
}

// Client
const light = new Light()
const turnOn = new TurnOnLightCommand(light)
const turnOff = new TurnOffLightCommand(light)
const remote = new RemoteControl()

remote.setCommand(turnOn)
remote.pressButton()
remote.setCommand(turnOff)
remote.pressButton()
