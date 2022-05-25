const Pet = require('../../schemas/Pet')
const updatePetToAdopt = async (req, res, next) => {
    try {
        const { petId, userId } = req.body
        const adoptedPet = await Pet.findOneAndUpdate(
            { _id: petId, 'adopt.is_adopted': false },
            {
                'adopt.is_adopted': true,
                'adopt.adopt_by': userId,
            },
            { new: true }
        )
        if (!adoptedPet) res.json({ msg: 'Pet is already adopted' })
        else
            res.json({
                msg: 'Pet update',
                adoptedPet,
            })
    } catch (err) {
        next(err)
    }
}

module.exports = updatePetToAdopt
