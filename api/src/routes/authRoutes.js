const passport = require('passport')
const OpenIDConnectStrategy = require('passport-openidconnect')
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } = process.env

passport.use(
    new OpenIDConnectStrategy(
        {
            issuer: 'https://' + AUTH0_DOMAIN + '/',
            authorizationURL: 'https://' + AUTH0_DOMAIN + '/authorize',
            tokenURL: 'https://' + AUTH0_DOMAIN + '/oauth/token',
            userInfoURL: 'https://' + AUTH0_DOMAIN + '/userinfo',
            clientID: AUTH0_CLIENT_ID,
            clientSecret: AUTH0_CLIENT_SECRET,
            callbackURL: '/oauth2/redirect',
            scope: ['profile'],
        },
        function verify(issuer, profile, cb) {
            return cb(null, profile)
        }
    )
)

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {
            id: user.id,
            username: user.username,
            name: user.displayName,
        })
    })
})

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})

const express = require('express')
const qs = require('querystring')
const router = express.Router()

router.get('/login', passport.authenticate('openidconnect'))

router.get(
    '/oauth2/redirect',
    passport.authenticate('openidconnect', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
)

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        const params = {
            client_id: AUTH0_CLIENT_ID,
            returnTo: 'http://localhost:3000/',
        }
        res.redirect(
            'https://' + AUTH0_DOMAIN + '/v2/logout?' + qs.stringify(params)
        )
    })
})

module.exports = router
