const Shelter = require('../../schemas/Shelter')

module.exports = async (req, res, next) => {
    const { id } = req.params

    try {
        const shelter = await Shelter.findOne({ _id: id, status: 'Active' })
            .populate('user') //establecer que datos se popula
            .populate('petsAdoption') //establecer que datos se popula

        if (shelter) {
            res.json(shelter)
        } else {
            res.json({ msg: 'Shelter not found' })
        }
    } catch (error) {
        next(error)
    }
}
