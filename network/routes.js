const information = require('./../components/information/routes')

const routes = ( app ) => {
    app.use('/information', information)
}

module.exports = routes