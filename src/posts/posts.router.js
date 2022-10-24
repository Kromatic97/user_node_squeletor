
const router = require ('express').Router()
const passport = require ('passport')
const postServices = require ('./posts.services')

require ('../middlewares/auth.middlewares')(passport)

router.route('/')
    //.get()
    .post(
        passport.authenticate('jwt', {session:false}),
        postServices.createPost
        )

module.exports = router