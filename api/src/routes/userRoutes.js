const { Router } = require('express')
const express = require('express')
const getAllUsers = require('../controllers/users/getAllUsers')
const createUser = require('../controllers/users/createUser')

const router = Router()
router.use(express.json())

router.get('/', getAllUsers)

router.post('/createUser', createUser)

module.exports = router
