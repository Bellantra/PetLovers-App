const pets = require('./pets.json')
const Pet = require('../../schemas/Pet')
const products = require('./products.json')
const Product = require('../../schemas/Product')
const subraces = require('./subraces.json')
const Subrace = require('../../schemas/Subrace')
const shelters = require('./shelters.json')
const Shelter = require('../../schemas/Shelter')
const users = require('./users.json')
const User = require('../../schemas/User')

const fillPets = async () => {
    const isPet = await Pet.findOne()
    // eslint-disable-next-line no-unused-expressions
    !isPet ? await Pet.insertMany(pets) : null
}

const fillProducts = async () => {
    const isProducts = await Product.findOne()
    // eslint-disable-next-line no-unused-expressions
    !isProducts ? await Product.insertMany(products) : null
}

const fillSubraces = async () => {
    const isSubrace = await Subrace.findOne()
    // eslint-disable-next-line no-unused-expressions
    !isSubrace ? await Subrace.insertMany(subraces) : null
}

const fillShelters = async () => {
    const isShelter = await Shelter.findOne()
    // eslint-disable-next-line no-unused-expressions
    !isShelter ? await Shelter.insertMany(shelters) : null
}

const fillUsers = async () => {
    const isUser = await User.findOne()
    // eslint-disable-next-line no-unused-expressions
    !isUser ? await User.insertMany(users) : null
}

module.exports = {
    fillShelters,
    fillProducts,
    fillPets,
    fillSubraces,
    fillUsers,
}
