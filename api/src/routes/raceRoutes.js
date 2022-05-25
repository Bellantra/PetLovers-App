const getRaces = require('../controllers/race/getRaces')

const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', getRaces)

module.exports = router
