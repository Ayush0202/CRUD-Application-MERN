const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from Server')
})

router.get('/add', (req, res) => {
    res.send('Hello from servemr add')
})

router.post('/add', (req, res) => {
    console.log('Hello')
})

module.exports = router