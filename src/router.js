const express = require('express')
const PageController = require('./controllers/PageController')
const CalculatorController = require('./controllers/CalculatorController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const calculatorController = new CalculatorController()

// Routes
router.get('/', pageController.renderHome)
router.get('/calculator', calculatorController.renderCalculatorPage)
router.post('/calculator', calculatorController.renderInterest)

router.get('*', pageController.renderNotFound)

module.exports = router
