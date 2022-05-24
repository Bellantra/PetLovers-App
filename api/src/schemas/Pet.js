const mongoose = require('mongoose')
const { Schema } = mongoose

const petSchema = new Schema({
    nickname : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    adopt : {
        type : {
            is_adopt: Boolean,
            adopt_by: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        },
        default : {
            is_adopt : false
        },
    },
    race : {
        type : Schema.Types.ObjectId,
        required : true,
        ref:'Race'
    },
    image : {
        type : String,
        required : true,
        default : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*'
    },
})

module.exports = mongoose.model('Pet',petSchema)

