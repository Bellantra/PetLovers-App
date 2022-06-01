const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
router.use('/users', userRoutes)

const shelterRoutes = require('./shelterRoutes')
router.use('/shelters', shelterRoutes)

const raceRoutes = require('./raceRoutes')
router.use('/races', raceRoutes)

const subracesRoutes = require('./subraceRoutes')
router.use('/subraces', subracesRoutes)

const productRoutes = require('./productRoutes')
router.use('/products', productRoutes)

const petRoutes = require('./petRoutes')
router.use('/pet', petRoutes)

module.exports = router
