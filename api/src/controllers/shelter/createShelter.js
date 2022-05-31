const Shelter = require('../../schemas/Shelter')

//Sin completar logica...solo para carga

module.exports = async (req, res, next) => {
    try {
        const shelterData = req.body

        // const { name, logo, img, state, city, description, color, user, petsAdoption} = req.body

        const newShelter = new Shelter(shelterData)

        await newShelter.save()
        res.status(200).json({
            msg: 'Shelter created',
            newShelter,
        })
    } catch (error) {
        next(error)
    }
}
