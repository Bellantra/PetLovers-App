const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    nickname: {
        type: String,
        unique: true,
    },
    fullName: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },
    picture: {
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
        default: null,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    sub: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ['Active', 'Deleted'],
        default: 'Active',
    },
    // updatedAt:{
    //     type:Date, //ver mas adelante como manejar el date si se usa

    // }
})

module.exports = mongoose.model('User', userSchema)
