const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
router.use('/users', userRoutes)

const shelterRoutes = require('./shelterRoutes')
router.use('/shelters', shelterRoutes)

module.exports = router
