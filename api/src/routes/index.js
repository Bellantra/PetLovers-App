const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
router.use('/users', userRoutes)

const shelterRoutes = require('./shelterRoutes')
router.use('/shelters', shelterRoutes)

const subracesRoutes = require('./subraceRoutes')
router.use('/subraces', subracesRoutes)

const productRoutes = require('./productRoutes')
router.use('/products', productRoutes)

const petRoutes = require('./petRoutes')
router.use('/pet', petRoutes)

// -------------Auth0---------------------------------

// const indexRouter = require('../routes/')
const authRouter = require('../routes/authRoutes')

// router.use('/', indexRouter)
router.use('/', authRouter)

module.exports = router
