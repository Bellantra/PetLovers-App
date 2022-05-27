const Users = require('../../schemas/User')

module.exports = async (_req, res, next) => {
    try {
        let allUsers = await Users.find({ status: 'Active' })
        if (allUsers) {
            res.json(allUsers)
        } else {
            res.json({ msg: 'Users not found' })
        }
    } catch (err) {
        next('err')
    }
}
