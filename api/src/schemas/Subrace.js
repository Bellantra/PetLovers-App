const mongoose = require('mongoose')
const { Schema } = mongoose

const subraceSchema = new Schema({
    race: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Race', subraceSchema)
