const Pet = require('../../schemas/Pet')
const Shelter = require('../../schemas/Shelter')

const postAdoptablePet = async (req, res, next) => {
    try {
        const {
            nickname,
            age,
            city,
            adopt,
            race,
            image,
            shelter,
            description,
            genre,
            color,
            vaccinated,
        } = req.body
        const newPet = new Pet({
            nickname,
            age,
            city,
            adopt,
            race,
            image,
            shelter,
            description,
            genre,
            color,
            vaccinated,
        })

        const updatedShelter = await Shelter.findByIdAndUpdate(
            shelter,
            { $push: { petsAdoption: newPet._id } },
            { new: true }
        )
        if (newPet && updatedShelter) {
            await newPet.save()
            await updatedShelter.save()
            res.json({
                msg: 'Pet created',
                newPet,
                updatedShelter,
            })
        } else {
            console.error('An Error has been ocurred')
        }
    } catch (err) {
        next(err)
    }
}

module.exports = postAdoptablePet
