// Abstract Class
class ReportGenerator {
  collectData() {
    throw new Error('Not Implemented')
  }

  processData(data) {
    throw new Error('Not Implemented')
  }

  formatReport(processedData) {
    throw new Error("Method 'formatReport()' must be implemented.")
  }

  printReport(report) {
    console.log(report)
  }

  generateReport() {
    const data = this.collectData()
    const processedData = this.processData(data)
    const report = this.formatReport(processedData)
    this.printReport(report)
  }
}

class CSVReportGenerator extends ReportGenerator {
  collectData() {
    return 'CSV data'
  }

  processData(data) {
    return `Processed ${data}`
  }

  formatReport(processedData) {
    return `Report: ${processedData}`
  }
}

class HTMLReportGenerator extends ReportGenerator {
  collectData() {
    return 'HTML data'
  }

  processData(data) {
    return `Processed ${data}`
  }

  formatReport(processedData) {
    return `<html><body><h1>HTML Report</h1><p>${processedData}</p></body></html>`
  }
}

class PDFReportGenerator extends ReportGenerator {
  collectData() {
    return 'PDF data'
  }

  processData(data) {
    return `Processed ${data}`
  }

  formatReport(processedData) {
    return `PDF Report:\n${processedData}\n(Imagine this is in PDF format)`
  }
}

// Test the implementation
const csvReport = new CSVReportGenerator()
csvReport.generateReport()

const htmlReport = new HTMLReportGenerator()
htmlReport.generateReport()

const pdfReport = new PDFReportGenerator()
pdfReport.generateReport()
