const mongoose = require('mongoose')
const { Schema } = mongoose

const shelterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        //Debemos hacer un logo default nuestro!!!
        default:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Ffr%2Fprojects%2F49250-logo-protectora-el-refugio&psig=AOvVaw0SANK09xrc3AGl5dxTp73V&ust=1653413371608000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjR2_2S9vcCFQAAAAAdAAAAABAU',
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
        default: '#F5917C', //Elegir mejor color!!
    },
    status: {
        type: String,
        enum: ['Active', 'Deleted'],
        default: 'Active',
    },
})

module.exports = mongoose.model('Shelter', shelterSchema)
