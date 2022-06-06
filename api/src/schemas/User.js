const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    nickname: {
        type: String,
        unique: true,
    },
    fullName: {
        type: String,
        default: null,
    },
    img: {
        type: String,
        default: null,
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
})

module.exports = mongoose.model('User', userSchema)
