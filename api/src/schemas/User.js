const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default:
            'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: boolean,
        default: false,
    },
    shelterName: {
        type: String,
    },
})

module.exports = mongoose.model('User', userSchema)
