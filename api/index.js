const app = require('./src/app.js')
const port = process.env.PORT
const {
    fillPets,
    fillSubraces,
    fillUsers,
    fillProducts,
    fillShelters,
} = require('./src/utils/mockups/index')
app.listen(port, async () => {
    await fillPets()
    await fillProducts()
    await fillShelters()
    await fillSubraces()
    await fillUsers()
    console.log(`server is listening at port: ${port}`) // eslint-disable-line no-console
})
