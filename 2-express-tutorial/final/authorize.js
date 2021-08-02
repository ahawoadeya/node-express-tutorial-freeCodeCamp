const authorize = (req, res, next) => {
    const { user } = req.query

    if(user === 'austin'){
        req.user = { name: 'austin', id: 3}
        next()
    }else{
        res.status(401).send('Unauthorize')
    }
}

module.exports = authorize