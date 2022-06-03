const Product = require('../../schemas/Product')

//Provisorio! Falta elegir datos a popular!!!

module.exports = async (req, res, next) => {
    try {
        const products = await Product.find({ status: 'Active' }).populate(
            'shelter'
        ) //establecer que datos se popula

        if (products) {
            res.json(products)
        } else {
            res.json({ msg: 'There is no any product' })
        }
    } catch (error) {
        next(error)
    }
}
