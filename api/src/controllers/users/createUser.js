const User = require('../../schemas/User')

module.exports = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body

        const newUser = new User({ userName, email, password })

        await newUser.save()
        res.status(200).json({
            msg: 'User created',
            newUser,
        })
    } catch (error) {
        next(error)
    }
}
