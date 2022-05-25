const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const adoptRoutes = require('./adoptRoutes')

router.use('/users', userRoutes)
router.use('/adopt', adoptRoutes)

const shelterRoutes = require('./shelterRoutes')
router.use('/shelters', shelterRoutes)

module.exports = router
