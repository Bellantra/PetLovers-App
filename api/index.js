const app = require('./src/app.js')
const port = process.env.PORT || 3001
app.listen(port, async () => {
    console.log(`server is listening at port: ${port}`) // eslint-disable-line no-console
})
