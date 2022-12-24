const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    // 500 server error
    // const status = err.statusCode || 500 
    const status = res.statusCode ? statusCode : 500

    res.status(status)

    res.json({ message: err.message })
}

module.exports = { errorHandler }