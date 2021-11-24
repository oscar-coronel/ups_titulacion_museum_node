const transaction = require('./../../database/transaction')

const table = 'informations'

const getAllInfo = async () => {
    let data = await transaction.get( table )
    for( let index in data ){
        let row = data[index]

        data[index]['places'] = await getPlaces( row['id'] )
        data[index]['transports'] = await getTransports( row['id'] )
    }
    return data;
}

const getPlaces = ( information_id ) => {
    return new Promise( (resolve, reject) => {
        transaction.pool.query(`SELECT * FROM places WHERE information_id = ${ information_id }`, (error, results, fields) => {
            if( error ) return reject( error )
            return resolve( results )
        })
    })
}

const getTransports = ( information_id ) => {
    return new Promise( (resolve, reject) => {
        transaction.pool.query(`SELECT * FROM transports WHERE information_id = ${ information_id }`, (error, results, fields) => {
            if( error ) return reject( error )
            return resolve( results )
        })
    })
}

module.exports = {
    getAllInfo
}