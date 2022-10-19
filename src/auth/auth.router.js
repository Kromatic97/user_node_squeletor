//? Auth va a contener las rutas de autorizacoin y autenticacion
//Login
//Register
//Recovery Password
//Verify User

const router = require('express').Router()

const { registerUser } = require('../users/users.services')

 
router.post('/register', registerUser)

module.exports = router