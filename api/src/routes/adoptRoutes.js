const getAdoptablePets = require('../controllers/adopt/getAdoptablePets')
const postAdoptablePet = require('../controllers/adopt/postAdoptablePet')
const updatePetToAdopt = require('../controllers/adopt/updatePetToAdopt')
const getLastPetsAdopted = require('../controllers/adopt/getLastPetsAdopted')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', getAdoptablePets)

router.get('/lastAdopted', getLastPetsAdopted)

router.post('/createPet', postAdoptablePet)

router.put('/update/:petId', updatePetToAdopt)

module.exports = router
