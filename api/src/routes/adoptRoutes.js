const getAdoptablePets = require('../controllers/adopt/getAdoptablePets')
const postAdoptablePet = require('../controllers/adopt/postAdoptablePet')
const updatePetToAdopt = require('../controllers/adopt/updatePetToAdopt')
const removePet = require('../controllers/adopt/removePet')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', getAdoptablePets)

router.post('/', postAdoptablePet)

router.put('/', updatePetToAdopt)

router.delete('/', removePet)

module.exports = router
