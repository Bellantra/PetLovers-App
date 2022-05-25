const Pet = require('../../schemas/Pet')

const getAdoptablePets = async (req, res) => {
    try {
        const { nickname, city } = req.query
        let Pets
        if (nickname || city) {
            Pets = await Pet.find({ $or: [{ nickname }, { city }] })
        } else {
            Pets = await Pet.find({ 'adopt.is_adopted': false })
        }
        res.json(Pets)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getAdoptablePets
