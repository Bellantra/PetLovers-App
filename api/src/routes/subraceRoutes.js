const getSubraces = require('../controllers/subrace/getSubraces')

const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', getSubraces)

module.exports = router
