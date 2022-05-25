const express = require('express')
const router = express.Router()

const adoptRoutes = require('./adoptRoutes')
router.use('/adopt', adoptRoutes)

const userRoutes = require('./userRoutes')
router.use('/users', userRoutes)

const shelterRoutes = require('./shelterRoutes')
router.use('/shelters', shelterRoutes)

module.exports = router
