const Product = require('../../schemas/Product')

//Provisorio! Falta elegir datos a popular!!!

module.exports = async (req, res, next) => {
    const { id } = req.params

    try {
        const product = await Product.findById({ _id: id, status: 'Active' })

        if (product) {
            res.status(200).json({ msg: 'Product found', product })
        } else {
            res.json({ msg: 'There is no any product with this Id' })
        }
    } catch (error) {
        next(error)
    }
}
