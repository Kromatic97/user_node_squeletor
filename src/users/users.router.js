const router =('express').Router()

const userServices = require('./users.services')

//?rutas raiz
router.get('/', userServices.getAllUsers)

// router.route('/').get(userServices.getAllUsers)

// Para el registerUser ira en la ruta /auth/register



//rutas dinamicas por ID//
router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)

module.exports = router