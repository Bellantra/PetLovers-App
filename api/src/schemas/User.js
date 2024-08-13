const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
    },
    fullName: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: 'Password123!',
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    img: {
        type: String,
        default:
            'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    shelter: {
        type: Schema.Types.ObjectId,
        ref: 'Shelter',
        default: null,
    },
    email_verified: {
        // A futuro usar herramienta que mande validacion de mail
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ['Active', 'Banned', 'Deleted'],
        default: 'Active',
    },
})

module.exports = mongoose.model('User', userSchema)
