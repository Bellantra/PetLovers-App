const Subrace = require('../../schemas/Subrace')

const getSubraces = async (req, res) => {
    try {
        const Subraces = await Subrace.find()
        res.json(Subraces)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getSubraces
