// Strategy Interfaces
class TransportationStrategy {
  travelPlan() {}
}

class AccomodationStrategy {
  stayPlan() {}
}

class ActivityStrategy {
  activityPlan() {}
}

class AirTravel extends TransportationStrategy {
  travelPlan() {
    return 'Air travel'
  }
}

class HotelStay extends AccomodationStrategy {
  stayPlan() {
    return 'Hotel stay'
  }
}

class AdventureSports extends ActivityStrategy {
  activityPlan() {
    return 'Adventure sports'
  }
}

// Context
class TravelPlan {
  setTransportationStrategy(strategy) {
    this.transportationStrategy = strategy
  }

  setAccomodationStrategy(strategy) {
    this.accomodationStrategy = strategy
  }

  setActivityStrategy(strategy) {
    this.activityStrategy = strategy
  }

  generatePlan() {
    let plan = ''

    if (this.transportationStrategy) {
      plan += this.transportationStrategy.travelPlan() + '\n'
    }

    if (this.accomodationStrategy) {
      plan += this.accomodationStrategy.stayPlan() + '\n'
    }

    if (this.activityStrategy) {
      plan += this.activityStrategy.activityPlan() + '\n'
    }

    return plan
  }
}

// Client
const travelPlan = new TravelPlan()
travelPlan.setTransportationStrategy(new AirTravel())
travelPlan.setAccomodationStrategy(new HotelStay())
travelPlan.setActivityStrategy(new AdventureSports())
console.log(travelPlan.generatePlan())
