const Pet = require('../../schemas/Pet')
const updatePet = async (req, res, next) => {
    try {
        const { id } = req.params
        const newData = req.body
        const updatedPet = await Pet.findByIdAndUpdate(id, newData, {
            new: true,
        })
        updatedPet
            ? res.json({
                  msg: 'Pet update',
                  updatedPet,
              })
            : res.json({
                  msg: "The pet that you're trying to edit doesn't exist",
              })
    } catch (err) {
        next(err)
    }
}

module.exports = updatePet
