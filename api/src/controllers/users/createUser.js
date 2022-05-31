const User = require('../../schemas/User')

//Faltan las comprobaciones como que sea unico algo!!!(userName,email)

module.exports = async (req, res, next) => {
    try {
        const userData = req.body

        const newUser = new User(userData)

        await newUser.save()
        res.status(200).json({
            msg: 'User created',
            newUser,
        })
    } catch (error) {
        next(error)
    }
}
