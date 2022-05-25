const mongoose = require('mongoose')
const { Schema } = mongoose

const raceSchema = new Schema({
    race: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Race', raceSchema)
