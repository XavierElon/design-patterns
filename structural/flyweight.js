// The Client "uses" the Flyweight Factory to obtain flyweight objects.
// The Flyweight Factory "creates" flyweights.
// The Concrete Flyweight "implements" the Flyweight interface.

// Flyweight
class ParticleType {
  static cache = {}

  constructor(texture, shape, color) {
    this.texture = texture
    this.shape = shape
    this.color = color
  }

  // Flyweight Factory
  static getParticleType(texture, shape, color) {
    const key = `${texture}-${shape}-${color}`
    if (!this.cache[key]) {
      this.cache[key] = new ParticleType(texture, shape, color)
    }
    return this.cache[key]
  }
}

// Concrete Flyweight
class Particle {
  constructor(x, y, velocityX, velocityY, life, type) {
    this.x = x
    this.y = y
    this.velocityX = velocityX
    this.velocityY = velocityY
    this.lifespan = life
    this.type = type
  }

  update() {
    this.x += this.velocityX
    this.y += this.velocityY
    this.lifespan--
  }

  draw() {
    console.log(`Drawing particle at (${this.x}, ${this.y}) with texture ${this.type.texture}, shape ${this.type.shape}, and color ${this.type.color}`)
  }

  isAlive() {
    return this.lifespan > 0
  }
}

class ParticleSystem {
  constructor() {
    this.particles = []
  }

  addParticle(x, y, velocityX, velocityY, life, texture, shape, color) {
    const type = ParticleType.getParticleType(texture, shape, color)
    this.particles.push(new Particle(x, y, velocityX, velocityY, life, type))
  }

  simulate() {
    console.log('Starting simulation...')
    this.particles = this.particles.filter((particle) => particle.isAlive())
    this.particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })
    console.log('Simulation step complete.')
  }
}

const system = new ParticleSystem()
system.addParticle(0, 0, 1, 1, 60, 'SmokeTexture', 'Circle', 'Gray')
system.addParticle(10, 10, 2, 2, 60, 'SmokeTexture', 'Circle', 'Gray')
system.addParticle(0, 0, 1, 1, 60, 'SmokeTexture', 'Circle', 'Blue')
system.addParticle(10, 10, 2, 2, 60, 'SmokeTexture', 'Circle', 'Red')
system.simulate()

// Simulate multiple steps
for (let i = 0; i < 5; i++) {
  system.simulate()
}
