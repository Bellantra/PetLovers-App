const express = require('express')
const router = express.Router()

const LocalStrategy = require('passport-local').Strategy
const User = require('../schemas/User')

const passport = require('passport')
const jwt = require('jsonwebtoken')

router.use(express.json())

router.get('/login', function (req, res, next) {
    res.render('login')
})

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

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
})

// --------------Passport content-----------
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            session: false,
        },
        async (email, password, done) => {
            const user = await User.findOne({ email, status: 'Active' })

            if (!user) return done(null, false)

            if (password !== user.password) {
                return done(null, false)
            }
            return done(null, user)
        }
    )
)

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user.id, email: user.email })
    })
})

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})

module.exports = router
