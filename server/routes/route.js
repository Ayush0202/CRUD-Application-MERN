const express = require('express')
const router = express.Router()
const controller = require('./../controller/user-controller')

router.post('/add', controller.addUser)
router.get('/all', controller.getUsers)
router.get('/:id', controller.getUser)
router.post('/:id', controller.editUser)
module.exports = router