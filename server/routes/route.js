const express = require('express')
const router = express.Router()
const addUser = require('./../controller/user-controller')

router.get('/', (req, res) => {
    res.send('Hello from Server')
})

router.get('/add', (req, res) => {
    res.send('Hello from servemr add')
})

router.post('/add', addUser)

module.exports = router