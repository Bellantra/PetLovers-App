const mongoose = require('mongoose')
const { Schema } = mongoose

const raceSchema = new Schema({
    race: {
        type : String,
        required: true
    },
    subrace: [{
        type: Schema.Types.ObjectId,
        ref: 'Subrace'
    }]
})

module.exports = mongoose.model('Race',raceSchema)