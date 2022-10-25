const router = require ('express').Router()

const categoryServices = require ('./categories.services')

const postsServices = require ('../posts/posts.services')

//?ruta raiz
router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory)
//?ruta con parametros
router.get('/:id', categoryServices.getCategorieById)
router.get('/:id/posts', postsServices.getPostsByCategory)

module.exports = router