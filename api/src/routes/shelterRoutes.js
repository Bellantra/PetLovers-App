const express = require('express')
const router = express.Router()

const createShelter = require('../controllers/shelter/createShelter')
const getAllShelters = require('../controllers/shelter/getAllShelters')
const getShelterById = require('../controllers/shelter/getShelterById')
const updateShelter = require('../controllers/shelter/updateShelter')

router.get('/', getAllShelters)
router.get('/:id', getShelterById)
router.post('/createShelter', createShelter)
router.put('/update/:id', updateShelter) //Con esta ruta tambien se cambia el status a usuario no activo

module.exports = router
