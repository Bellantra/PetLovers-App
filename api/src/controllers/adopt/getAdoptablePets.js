const Pet = require('../../schemas/Pet')

const getAdoptablePets = async (req, res) => {
    try {
        const { nickname, city } = req.query
        const Pets = await Pet.find({ 'adopt.is_adopted': false })
            .and(
                nickname
                    ? { nickname: { $regex: `^${nickname}`, $options: 'i' } }
                    : {}
            )
            .and(city ? { city } : {})
            .populate(['race.race', 'shelter', 'race.subrace'])
        res.json(Pets)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getAdoptablePets
