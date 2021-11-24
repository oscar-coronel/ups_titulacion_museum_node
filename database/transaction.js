const pool = require('./conn')

const get = ( table ) => {
    return new Promise( (resolve, reject) => {
        pool.query(`SELECT * FROM ${ table }`, (error, results, fields) => {
            if( error ) return reject( error )
            return resolve( results )
        })
    })
}

module.exports = {
    get,
    pool
}