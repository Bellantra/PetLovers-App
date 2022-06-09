const passport = require('passport')
const jwt = require('jsonwebtoken')

const LocalStrategy = require('passport-local').Strategy
const User = require('../../schemas/User')

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

// ---------------Barrera de seguridad cuando envian tokens------------
const BearerStrategy = require('passport-http-bearer').Strategy

passport.use(
    new BearerStrategy((token, done) => {
        console.log(token, 'me llega??')
        jwt.verify(token, 'keyboard cat', function (err, usuario) {
            if (err) return done(err)
            return done(null, usuario || false)
        })
    })
)

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user._id, email: user.email })
    })
})

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})
