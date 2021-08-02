const express = require('express')
const app = express()
const morgan = require('morgan')
// req => middleware => res
// app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) =>{
    res.send('Home')
})

app.get('/about', (req, res) =>{
    console.log(req.user)
    res.end('About')
})

app.get('/api/products', (req, res) =>{
    res.send('Products')
})

app.get('/api/items', (req, res) =>{
    console.log(req.user)
    res.end('Items')
})

app.listen(5000, () =>{
    console.log('Server listening on port 5000...')
})