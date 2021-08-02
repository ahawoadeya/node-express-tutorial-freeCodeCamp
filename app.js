const express = require('express')
const app = express()

const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// static assets
app.use(express.static('./2-express-tutorial/methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/login', authRouter)


app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})