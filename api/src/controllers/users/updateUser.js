const Users = require('../../schemas/User')

module.exports = async (req, res, next) => {
    const { id } = req.params
    const newData = req.body

    console.log(newData, id, 'esto llegaaa')
    try {
        const userUpdated = await Users.findOneAndUpdate({ _id: id }, newData, {
            new: true,
        })

        if (userUpdated) {
            res.send(userUpdated)
        } else {
            res.send({
                msg: "The user that you're trying to edit doesn't exist",
            })
        }
    } catch (error) {
        next(error)
    }
}
