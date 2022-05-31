const Pet = require('../../schemas/Pet')

const getPetById = async (req, res) => {
    try {
        const { id } = req.params
        const petDetail = await Pet.findOne({
            _id: id,
            status: 'Active',
        }).populate([
            { path: 'race.race', select: '-_id' },
            { path: 'race.subrace', select: '-_id' },
            { path: 'shelter', select: 'name logo' },
        ])
        petDetail ? res.json(petDetail) : res.json('Pet not found')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getPetById
