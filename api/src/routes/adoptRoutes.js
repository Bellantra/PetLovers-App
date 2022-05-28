const getAdoptablePets = require('../controllers/adopt/getAdoptablePets')
const postAdoptablePet = require('../controllers/adopt/postAdoptablePet')
const updatePetToAdopt = require('../controllers/adopt/updatePetToAdopt')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', getAdoptablePets)

router.post('/', postAdoptablePet)

router.put('/', updatePetToAdopt)

module.exports = router
