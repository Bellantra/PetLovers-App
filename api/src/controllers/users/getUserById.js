const Users = require('../../schemas/User')

module.exports = async (req, res, next) => {
    const { id } = req.params
    try {
        let user = await Users.findOne({ _id: id, status: 'Active' })
        //Definir que se popula!!!
        if (user) {
            res.json(user)
        } else {
            res.json({ msg: 'Users not found' })
        }
    } catch (err) {
        next('err')
    }
}
