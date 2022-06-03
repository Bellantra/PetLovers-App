const express = require('express')
const router = express.Router()
const getAllUsers = require('../controllers/users/getAllUsers')
const createUser = require('../controllers/users/createUser')

router.get('/', getAllUsers)

router.post('/createUser', createUser)

module.exports = router
