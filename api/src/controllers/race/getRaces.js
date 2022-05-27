const Race = require('../../schemas/Race')

const getRaces = async (req, res) => {
    try {
        const Races = await Race.find()
        res.json(Races)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getRaces
