const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    fullName: {
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
        type: Boolean,
        default: false,
    },
    shelter: {
        type: Schema.Types.ObjectId,
        ref: 'Shelter',
    },
    status: {
        type: String,
        enum: ['Active', 'Deleted'],
        default: 'Active',
    },
})

module.exports = mongoose.model('User', userSchema)
