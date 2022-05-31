const Pet = require('../../schemas/Pet')

const getAdoptablePets = async (req, res) => {
    try {
        const { nickname, city, color, race, subrace } = req.query
        const Pets = await Pet.find({
            'adopt.is_adopted': false,
            status: 'Active',
        })
            .and(
                nickname
                    ? { nickname: { $regex: `^${nickname}`, $options: 'i' } }
                    : {}
            )
            .and(city ? { city: { $regex: `^${city}`, $options: 'i' } } : {})
            .and(color ? { color: { $regex: `^${color}`, $options: 'i' } } : {})
            .and(race ? { 'race.race': race } : {})
            .and(subrace ? { 'race.subrace': subrace } : {})
            .populate([
                { path: 'race.race', select: '-_id' },
                { path: 'race.subrace', select: '-_id' },
                { path: 'shelter', select: 'name logo' },
            ])
        Pets ? res.json(Pets) : res.json('Not pets found')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getAdoptablePets
