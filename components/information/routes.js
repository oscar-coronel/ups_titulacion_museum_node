const express = require('express')
const controller = require('./controller')
const response = require('./../../network/response')

const router = express.Router()

router.get('/', (req, res) => {
    controller.getAllInfo().then( result => {
        response.success(req, res, result)
    }).catch( error => {
        console.log(error)
        response.fail( req, res, error)
    })
})

module.exports = router