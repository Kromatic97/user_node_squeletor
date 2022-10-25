const postControllers = require ('./posts.controller')
const {host} = require ('../config')

const getAllPosts = (req, res) => {
//?localhost:9000/api/v1/posts?offset=0&limit=20 //paginacion
// const { offset, limit } = req.query
const offset = Number (req.query.offset) || 0
const limit =req.query.limit || 10
const urlBase = `${host}/api/v1/posts`

postControllers.getAllPosts(offset, limit)
    .then( data => {
        res.status(200).json({
            next:`${urlBase}?offset=${offset + limit}&limit=${limit}`,
            prev:`${urlBase}`,
            offset, 
            limit,
            results:data
        })
    })
    .catch(err => {
        res.status(400).json({message:err.message})
    })
}


const createPost = (req, res) => {
    //?Este es Id del usuario logueado
    const userId = req.user.id
    const { title, content, categoryId } = req.body

    if(title && content && categoryId){
        postControllers.createPost({title, content, userId, categoryId})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err.message)
        })

    } else {
        res.status(400).json({
            message:'Missing Data',
            fields:{
                title:'string',
                content:'string',
                categoryId:'uuid'
            }
        })
    }

}

const getPostsByCategory = (req, res) => {
    const categoryId = req.params.id
    postControllers.getPostsByCategory(categoryId)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

module.exports = {
    createPost,
    getAllPosts,
    getPostsByCategory
}

