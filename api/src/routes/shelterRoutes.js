const express = require('express')
const router = express.Router()

const createShelter = require('../controllers/shelter/createShelter')

router.post('/createShelter', createShelter)

module.exports = router
