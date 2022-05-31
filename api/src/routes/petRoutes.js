const getPetById = require('../controllers/pets/getPetById')
const getAdoptablePets = require('../controllers/pets/getAdoptablePets')
const getLastPetsAdopted = require('../controllers/pets/getLastPetsAdopted')
const postAdoptablePet = require('../controllers/pets/createPet')
const updatePet = require('../controllers/pets/updatePet')

const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/:id', getPetById)

router.get('/adoptable', getAdoptablePets)

router.get('/lastAdopted', getLastPetsAdopted)

router.post('/createPet', postAdoptablePet)

router.put('/update/:id', updatePet)

module.exports = router
