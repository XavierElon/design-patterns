// Subsystem classes
class CPU {
  initialize() {
    console.log('CPU initialized')
  }
}

class Memory {
  load(position, data) {
    console.log(`Loading data into memory at position ${position}.`)
  }
}

class HardDrive {
  readBootSector() {
    console.log('Reading boot sector')
    return 'boot sector data'
  }
}

class OperatingSystem {
  loadKernel() {
    console.log('Loading kernel')
    return 'kernel data'
  }
}

// Facade
class Computer {
  constructor() {
    this.cpu = new CPU()
    this.memory = new Memory()
    this.hardDrive = new HardDrive()
    this.operatingSystem = new OperatingSystem()
  }

  startComputer() {
    const bootSector = this.hardDrive.readBootSector()
    const osData = this.operatingSystem.loadKernel()
    this.memory.load(0, bootSector)
    this.memory.load(1024, osData)
    this.cpu.initialize()
  }
}

const computer = new Computer()
computer.startComputer()
