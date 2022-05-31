const Pet = require('../../schemas/Pet')

const postAdoptablePet = async (req, res, next) => {
    try {
        const { nickname, age, city, adopt, race, image, shelter } = req.body
        const newPet = new Pet({
            nickname,
            age,
            city,
            adopt,
            race,
            image,
            shelter,
        })
        await newPet.save()
        res.json({
            msg: 'Pet created',
            newPet,
        })
    } catch (err) {
        next(err)
    }
}

module.exports = postAdoptablePet
