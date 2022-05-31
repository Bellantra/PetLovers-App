const Pet = require('../../schemas/Pet')
const updatePetToAdopt = async (req, res, next) => {
    try {
        const { petId } = req.params
        const { userId } = req.body
        const adoptedPet = await Pet.findOneAndUpdate(
            { _id: petId, 'adopt.is_adopted': false },
            {
                'adopt.is_adopted': true,
                'adopt.adopt_by': userId,
            },
            { new: true }
        )
        adoptedPet
            ? res.json({
                  msg: 'Pet update',
                  adoptedPet,
              })
            : res.json({ msg: "Pet is already adopted or don't exist" })
    } catch (err) {
        next(err)
    }
}

module.exports = updatePetToAdopt
