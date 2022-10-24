const router = require ('express').Router()

const categoryServices = require ('./categories.services')

//?ruta raiz
router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory)
//?ruta con parametros
router.get('/:id', categoryServices.getCategorieById)

module.exports = router