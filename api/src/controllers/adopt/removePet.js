const Pet = require('../../schemas/Pet')
const removePet = async (req, res, next) => {
    try {
        const { petId } = req.body
        const removePet = await Pet.findOneAndRemove({
            _id: petId,
            'adopt.is_adopted': false,
        })
        if (!removePet) res.json({ msg: 'no existing pet or is adopted' })
        else
            res.json({
                msg: 'Pet remove',
                removePet,
            })
    } catch (err) {
        next(err)
    }
}

module.exports = removePet
