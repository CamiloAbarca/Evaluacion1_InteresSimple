class CalculatorController {
  constructor () {
    this.renderCalculatorPage = this.renderCalculatorPage.bind(this)
    this.calculateInterestSimple = this.calculateInterestSimple.bind(this)
    this.renderInterest = this.renderInterest.bind(this)
  }

  calculateInterestSimple (capital, rate, years) {
    return capital * (rate / 100) * years
  }

  renderCalculatorPage (req, res) {
    res.render('calculator')
  }

  renderInterest (req, res) {
    const capital = parseInt(req.body.capital)
    const rate = parseInt(req.body.rate)
    const years = parseInt(req.body.years)

    res.render('calculator', {
      capital: capital,
      rate: rate,
      years: years,
      result: this.calculateInterestSimple(capital, rate, years)
    })
  }
}

module.exports = CalculatorController
