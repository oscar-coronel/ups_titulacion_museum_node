

const success = (req, res, data, status) => {
    let dataSend = JSON.stringify({
        data: data
    })
    res.status( status || 200 ).send( dataSend )
}

const fail = (req, res, data, status) => {
    res.status( status || 500 ).send( data )
}


module.exports = {
    success,
    fail
}