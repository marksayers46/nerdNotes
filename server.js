const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

// middleware for receiving & parsing json
app.use(express.json())

// middleware for static files in /public folder
// app.use(express.static('public')) 
app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

// 404 use "*" for catching all other routes that we may not be handling
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '/views', '404.html'))
    }else if (req.accepts('json')) {
        res.json({message: '404 Not Found'})
    }else {
        res.type('txt'.send('404 Not Found'))
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

