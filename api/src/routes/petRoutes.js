const getPetById = require('../controllers/pets/getPetById')
const updatePet = require('../controllers/pets/updatePet')
const addImagePet = require('../controllers/pets/addImagePet')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/:id', getPetById)

router.put('/update/:id', updatePet)

router.put('/addimg/:id', addImagePet)

module.exports = router
