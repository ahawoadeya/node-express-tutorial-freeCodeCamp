const express = require('express')
const path = require('path')
const app = express()

// above all app.get and app.all
// setup static and middleware
app.use(express.static('./public')) 

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './2-express-tutorial/navbar-app/index.html'))
//     adding to static assets
//     SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})