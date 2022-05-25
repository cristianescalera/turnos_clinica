const errorHandler = ( res, error, message, status ) => {
    res.status( status || 500 )
    res.send({ message: 'Algo salió mal', error: error ? error.message : message })
}
module.exports = { errorHandler }