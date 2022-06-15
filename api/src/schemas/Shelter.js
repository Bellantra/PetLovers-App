const mongoose = require('mongoose')
const { Schema } = mongoose

const shelterSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    logo: {
        type: String,
        // Debemos hacer un logo default nuestro!!!
        default:
            'https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_820/v1334245221/content-items/000/228/813/tr10h-original.jpg?1334245221',
    },
    img: {
        type: Array,
        default: ['https://elrefugio.org/img/El-Refugio-imgQuienesSomos.jpg'],
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#F5917C', // Elegir mejor color!!
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    petsAdoption: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pet',
        },
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    status: {
        type: String,
        enum: ['Active', 'Deleted'],
        default: 'Active',
    },
})

module.exports = mongoose.model('Shelter', shelterSchema)
