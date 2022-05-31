const Pet = require('../../schemas/Pet')
const addImagePet = async (req, res, next) => {
    try {
        const { id } = req.params
        const { image } = req.body
        const updatedPet = await Pet.findByIdAndUpdate(
            id,
            { $push: { image } },
            {
                new: true,
            }
        )
        updatedPet
            ? res.json({
                  msg: 'Image added',
                  updatedPet,
              })
            : res.json({
                  msg: "The pet that you're trying to edit doesn't exist",
              })
    } catch (err) {
        next(err)
    }
}

module.exports = addImagePet
