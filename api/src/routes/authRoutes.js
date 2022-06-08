const express = require('express')
const router = express.Router()

const passport = require('passport')

const jwt = require('jsonwebtoken')

router.use(express.json())

router.post('/login/password', (req, res, next) => {
    console.log('entro paso 1')
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

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Logged out')
    })
})

module.exports = router
