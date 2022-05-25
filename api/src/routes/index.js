const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const adoptRoutes = require('./adoptRoutes')

router.use('/users', userRoutes)
router.use('/adopt', adoptRoutes)

module.exports = router
