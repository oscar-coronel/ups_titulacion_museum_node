const express = require('express')

const routes = require('./network/routes')

const app = express()

app.use( express.json() )
app.use( express.urlencoded({extended: false}) )

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, XMLHttpRequest')
    res.setHeader('Content-Type', 'application/json')
    next()
})

routes( app )

app.listen( 3040, () => {
    console.log('listen at localhost:3040')
})