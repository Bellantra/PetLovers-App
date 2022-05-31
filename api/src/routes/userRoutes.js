const express = require('express')
const router = express.Router()
const getAllUsers = require('../controllers/users/getAllUsers')
const createUser = require('../controllers/users/createUser')
const getUserById = require('../controllers/users/getUserById')
const updateUser = require('../controllers/users/updateUser')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/update/:id', updateUser) //Con este tambien se "borra" cambiando status
router.post('/createUser', createUser)

module.exports = router
