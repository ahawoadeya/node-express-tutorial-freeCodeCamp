const http = require('http')
const server = http.createServer((req, res) =>{
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }else if(req.url === '/about'){
        res.end('Here is our short history')
    }else{
        res.end('Wrong domain')
    }
})

server.listen(5000)