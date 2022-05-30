const Product = require('../../schemas/Product')

module.exports = async (req, res, next) => {
    const productData = req.body
    try {
        const newProduct = new Product(productData)

        await newProduct.save()
        res.status(200).json({
            msg: 'Product created',
            newProduct,
        })
    } catch (error) {
        next(error)
    }
}
