const express = require('express')
const router = express.Router()

const createShelter = require('../controllers/shelter/createShelter')
const getAllShelters = require('../controllers/shelter/getAllShelters')
const getById = require('../controllers/shelter/getById')
const updateShelter = require('../controllers/shelter/updateShelter')

router.get('/', getAllShelters)
router.get('/:id', getById)
router.post('/createShelter', createShelter)
// router.put('/update/:id', updateShelter)
router.delete('/')

module.exports = router
