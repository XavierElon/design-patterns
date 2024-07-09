// Base class acting as an interface
class DatabaseQuery {
  // Method to be overridden by subclasses
  executeQuery(query) {
    throw new Error('executeQuery method must be overridden')
  }
}

// Class that performs the actual query execution
class RealDatabaseQuery extends DatabaseQuery {
  executeQuery(query) {
    console.log(`Executing database query: ${query}`)
    return `Result of ${query}`
  }
}

// Class that adds caching functionality
class CachedDatabaseQuery extends DatabaseQuery {
  constructor() {
    super()
    this.realQuery = new RealDatabaseQuery()
    this.cache = {}
  }

  executeQuery(query) {
    if (this.cache[query]) {
      console.log(`Returning cached result for query: ${query}`)
      return this.cache[query]
    } else {
      const result = this.realQuery.executeQuery(query)
      this.cache[query] = result
      return result
    }
  }
}

// Client code
const query = new CachedDatabaseQuery()
console.log(query.executeQuery('SELECT * FROM users')) // Executes and caches
console.log(query.executeQuery('SELECT * FROM users')) // Returns cached result
