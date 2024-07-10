const QueryType = {
  TECHNICAL: 'TECHNICAL',
  BILLING: 'BILLING',
  GENERAL: 'GENERAL'
}

class SupportHandler {
  constructor() {
    this.nextHandler = null
  }

  setNextHandler(handler) {
    this.nextHandler = handler
  }

  handleRequest(queryType, message) {}
}

class TechnicalSupportHandler extends SupportHandler {
  handleRequest(queryType, message) {
    if (queryType === QueryType.TECHNICAL) {
      console.log(`Billing Support: Handling query - ${message}`)
    } else if (this.nextHandler != null) {
      this.nextHandler.handleRequest(queryType, message)
    }
  }
}

class BillingSupportHandler extends SupportHandler {
  handleRequest(queryType, message) {
    if (queryType === QueryType.BILLING) {
      console.log(`Billing Support: Handling query - ${message}`)
    } else if (this.nextHandler != null) {
      this.nextHandler.handleRequest(queryType, message)
    }
  }
}

class GeneralSupportHandler extends SupportHandler {
  handleRequest(queryType, message) {
    if (queryType === QueryType.GENERAL) {
      console.log(`General Support: Handling query - ${message}`)
    } else if (this.nextHandler != null) {
      this.nextHandler.handleRequest(queryType, message)
    }
  }
}

const technicalSupport = new TechnicalSupportHandler()
const billingSupport = new BillingSupportHandler()
const generalSupport = new GeneralSupportHandler()

technicalSupport.setNextHandler(billingSupport)
billingSupport.setNextHandler(generalSupport)

technicalSupport.handleRequest(QueryType.TECHNICAL, 'I cant connect to the internet')
technicalSupport.handleRequest(QueryType.BILLING, 'I have a question about my invoice.')
technicalSupport.handleRequest(QueryType.GENERAL, 'Thank you for your service.')
