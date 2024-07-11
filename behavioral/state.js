// State Interface
class State {
  publish(document) {}
  approve(document) {}
}

// Concrete States
class Draft extends State {
  publish(document) {
    console.log('Publishing draft document, moving to moderation')
    document.setState(new Moderation())
  }

  approve(document) {
    console.log('Draft cannot be approved directly')
  }
}

class Moderation extends State {
  publish(document) {
    console.log('Cannot publish from Moderation without approval')
  }

  approve(document) {
    console.log('Approving moderation, moving to published')
    document.setState(new Published())
  }
}

class Published extends State {
  publish(document) {
    console.log('Already published')
  }

  approve(document) {
    console.log('Already approved')
  }
}

// Context Class
class Document {
  constructor() {
    this.state = new Draft()
  }

  setState(newState) {
    this.state = newState
  }

  publish() {
    this.state.publish(this)
  }

  approve() {
    this.state.approve(this)
  }
}

// Client
const doc = new Document()
doc.publish()
doc.approve()
