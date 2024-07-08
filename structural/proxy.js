// Adaptee
class FrenchSpeaker {
  speakFrench(message) {
    console.log('Speaking in Frnech: ' + message)
  }
}

// Target Interface
class EnglishSpeaker {
  speakEnglish(message) {
    console.log('Speaking in English: ' + message)
  }
}

// Adapter
class Translator extends EnglishSpeaker {
  constructor(frenchSpeaker) {
    super()
    this.frenchSpeaker = frenchSpeaker
  }

  speakFrench(message) {
    let frenchMessage = this.translateToFrench(message)
    this.frenchSpeaker.speakFrench(frenchMessage)
  }

  speakEnglish(message) {
    let englishMessage = this.translateToEnglish(message)
    this.englishSpeaker.speakEnglish(englishMessage)
  }

  translateToFrench(message) {
    if (message === 'Hello') {
      return 'Bonjour'
    } else if (message === 'Goodbye') {
      return 'Au revoir'
    }
    return message
  }

  translateToEnglish(message) {
    if (message === 'Bonjour') {
      return 'Hello'
    } else if (message === 'Au revoir') {
      return 'Goodbye'
    }
    return message
  }
}

// Client
class EnglishClient {
  constructor(speaker) {
    this.speaker = speaker
  }

  express(message) {
    this.speaker.speakEnglish(message)
  }
}

class FrenchClient {
  constructor(speaker) {
    this.speaker = speaker
  }

  express(message) {
    this.speaker.speakFrench(message)
  }
}

// Demo
const frenchSpeaker = new FrenchSpeaker()
const englishSpeaker = new EnglishSpeaker()
const translator = new Translator(frenchSpeaker)
const client = new EnglishClient(translator)
translator.speakEnglish('Hello')
translator.speakFrench('Bonjour')

client.express('Hello')
client.express('Goodbye')
