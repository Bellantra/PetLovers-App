const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: [
        {
            type: String,
            required: true,
        },
    ],
    description: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    shelter: {
        type: Schema.Types.ObjectId,
        ref: 'Shelter',
        default: null, //Porque null gabriel???
    },
    status: {
        type: String,
        enum: ['Active', 'Paused', 'Deleted'],
        default: 'Active',
    },
})

module.exports = mongoose.model('Product', productSchema)
