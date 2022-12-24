const express = require('express')
const router = express.Router()
const path = require('path')

// regex expression root only or /index with the html? optional(fun regex)
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views', 'index.html'))
})

module.exports = router