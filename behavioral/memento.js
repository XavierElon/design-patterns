/**Originator: The primary object whose state has to be preserved and restored. It generates a memento that contains a snapshot of its current internal state. It also uses the memento to return to a previous state.
Memento: This object preserves the originator's state. It's a basic object that usually only contains data and no logic. The originator creates the memento and contains the information needed to restore the originator to its previous state.
Caretaker: The caretaker is in charge of the memento's entire life. It never changes the memento—it just tracks it. The caretaker can request a memento from the originator to save the current state and return a memento to the originator when a rollback is performed. */

// Memento
class GameMemento {
  constructor(level, score, inventory) {
    this.level = level
    this.score = score
    this.inventory = [...inventory]
  }
}

class Game {
  constructor() {
    this.level = 0
    this.score = 0
    this.inventory = []
    this.saves = []
  }

  play(levelIncrement, scoreIncremenet, newItems) {
    this.level += levelIncrement
    this.score += scoreIncremenet
    this.inventory.push(...newItems)
  }

  save() {
    return new GameMemento(this.level, this.score, this.inventory)
  }

  restore(memento) {
    this.level = memento.level
    this.score = memento.score
    this.inventory = [...memento.inventory]
  }

  printStatus() {
    console.log(`Level: ${this.level}, Score: ${this.score}, Inventory: ${this.inventory}`)
  }
}

// Caretaker
class GameCaretaker {
  constructor() {
    this.mementos = []
  }

  addMemento(memento) {
    this.mementos.push(memento)
  }

  getMemento(index) {
    return this.mementos[index]
  }
}

// Client code
const game = new Game()
const caretaker = new GameCaretaker()

game.play(1, 100, ['Sword', 'Shield'])
caretaker.addMemento(game.save())
game.printStatus()

game.play(2, 200, ['Bow', 'Arrow'])
caretaker.addMemento(game.save())
game.printStatus()

game.restore(caretaker.getMemento(0))
game.printStatus()
