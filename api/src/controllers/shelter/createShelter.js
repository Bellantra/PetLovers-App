const Shelter = require('../../schemas/Shelter')

//Sin completar logica...solo para carga

module.exports = async (req, res, next) => {
    console.log('estoy acaaa')
    try {
        const { name, state, city, description } = req.body

        console.log(name)

        const newShelter = new Shelter({ name, state, city, description })

        await newShelter.save()
        res.status(200).json({
            msg: 'Shelter created',
            newShelter,
        })
    } catch (error) {
        next(error)
    }
}
