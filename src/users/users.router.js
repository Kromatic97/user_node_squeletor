
const router = require('express').Router()

const { session } = require('passport')
//para proteger las rutas que uno desee
const passport = require ('passport')
require('../middlewares/auth.middlewares')(passport)

const userServices = require ('./users.services')

//?rutas raiz
router.get('/', 
passport.authenticate('jwt', {session:false}), 
userServices.getAllUsers)

// router.route('/').get(userServices.getAllUsers)

// Para el registerUser ira en la ruta /auth/register

//Ruta de informacion propia
router.route('/me')
    .get(
        passport.authenticate('jwt', {session:false}),
        userServices.getMyUser)
   
   
    .delete(
        passport.authenticate('jwt', {session:false}),
        userServices.deleteMyUser)


   .patch(
    passport.authenticate('jwt', {session:false}),
    userServices.patchMyUser
   )


//rutas dinamicas definidas//
router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)
    
    

module.exports = router