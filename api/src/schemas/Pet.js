const mongoose = require('mongoose')
const { Schema } = mongoose

const petSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 'Unknown',
    },
    city: {
        type: String,
        required: true,
    },
    // adopt_by: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    race: {
        type: String,
        enum: ['Dog', 'Cat'],
        required: true,
    },
    // subrace: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'Subrace',
    //     },
    // ],
    image: [
        {
            type: String,
            required: true,
            // default: [
            //     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
            // ],
        },
    ],
    shelter: {
        type: Schema.Types.ObjectId,
        ref: 'Shelter',
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: 'It is a animal',
    },
    genre: {
        type: String,
        enum: ['Male', 'Female', 'Undefined'],
        default: 'Undefined',
    },
    color: {
        type: String,
        default: 'Undefined',
    },
    vaccinated: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ['Active', 'Adopted', 'Deleted'],
        default: 'Active',
    },
})

module.exports = mongoose.model('Pet', petSchema)
