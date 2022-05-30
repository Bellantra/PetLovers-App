const Product = require('../../schemas/Product')

module.exports = async (req, res, next) => {
    const { id } = req.params
    const newData = req.body

    try {
        const newProduct = await Product.findByIdAndUpdate(
            {
                _id: id,
                status: 'Active',
            },
            newData,
            { new: true }
        )

        if (newProduct) {
            res.status(200).json({ msg: 'Product updated!!', newProduct })
        } else {
            res.json({
                msg: "The product that you're trying to edit doesn't exist",
            })
        }
    } catch (error) {
        next(error)
    }
}
