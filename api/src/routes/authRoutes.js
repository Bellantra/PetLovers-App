const express = require('express')
const router = express.Router()

const passport = require('passport')

const jwt = require('jsonwebtoken')
const User = require('../schemas/User')

router.use(express.json())

router.post('/login/password', (req, res, next) => {
    passport.authenticate('local', async (err, user) => {
        if (err) throw err
        if (!user) {
            res.status(400).send('User or password incorrect!!')
        } else {
            const token = await jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                },
                'keyboard cat',
                { expiresIn: '24hr' }
            )
            return res.status(200).json({
                isAdmin: user.isAdmin,
                token,
            })
        }
    })(req, res, next)
})

router.get(
    '/userInfo',
    passport.authenticate('bearer', { session: false }),
    async function (req, res) {
        try {
            const user = await User.findOne({
                _id: req.user.id,
                status: 'Active',
            })
            const { _id, nickname, fullName, email, img, isAdmin, shelter } = user

            res.status(200).json({
                id: _id,
                nickname,
                fullName,
                email,
                img,
                isAdmin,
                shelter
            })
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
)

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Logged out')
    })
})

module.exports = router
