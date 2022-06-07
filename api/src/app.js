require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const { DB_URL } = process.env

// ----------------Server configuration -------------------
const app = express()
app.use(express.json())
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    )
    next()
})

// Error catching endware.
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).send(message)
})

app.use('/', routes)

// -----------Connection with mongodbAtlas -----------
const uri = DB_URL
const connectDB = async () => {
    try {
        mongoose.connect(
            uri,
            {
                useNewUrlParser: true,
                heartbeatFrequencyMS: 7000, // 7 segundos para comprobar la conexión, ejecuta evento 'disconnect' si falla
            },
            null
        )
        console.log('Connection successfully')
    } catch (err) {
        console.error('Failed to connect to MongoDB', err)
    }
}
connectDB()

module.exports = app
