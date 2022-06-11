const express = require('express')
const router = express.Router()

const getAllProducts = require('../controllers/products/getAllProducts')
const createProduct = require('../controllers/products/createProduct')
const getProductById = require('../controllers/products/getProductById')
const updateProduct = require('../controllers/products/updateProduct')

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/create', createProduct)
router.put('/update/:id', updateProduct) // Con esta ruta tambien se cambia el status a usuario no activo

module.exports = router
