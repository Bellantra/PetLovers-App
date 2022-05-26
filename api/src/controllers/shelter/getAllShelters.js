const Shelter = require('../../schemas/Shelter')

//Provisorio! Falta elegir datos a popular!!!

module.exports = async (req, res, next) => {
    try {
        const shelters = await Shelter.find({ status: 'Active' })
            .populate('user') //establecer que datos se popula
            .populate('petsAdoption') //establecer que datos se popula

        if (shelters) {
            res.json(shelters)
        } else {
            res.json({ msg: 'There is no any shelter' })
        }
    } catch (error) {
        next(error)
    }
}
