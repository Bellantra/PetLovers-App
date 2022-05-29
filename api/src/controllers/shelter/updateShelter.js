const Shelter = require('../../schemas/Shelter')

module.exports = async (req, res, next) => {
    const { id } = req.params
    const newData = req.body
    try {
        const shelterUpdate = await Shelter.findOneAndUpdate(
            { _id: id },
            newData,
            {
                new: true,
            }
        )

        if (shelterUpdate) {
            res.json(shelterUpdate)
        } else {
            res.json({
                msg: "The shelter that you're trying to edit doesn't exist",
            })
        }
    } catch (error) {
        next(error)
    }
}
