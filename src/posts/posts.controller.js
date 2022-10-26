const Posts = require ('../models/posts.models')
const uuid = require('uuid')
const Users = require ('../models/users.models')
const Categories = require ('../models/categories.models')

const getAllPosts = async(offset, limit) => {

   
    const data = await Posts.findAll({
        //paginacion//
        offset:offset? offset:0,
        limit:limit? limit:10,


        //esto es lo que no quiero mostrar//
        attributes: {
            exclude:['userId', 'categoryId', 'createdAt','updatedAt']
        },

     
//?los joins
        include: [
            {
                model:Users,
                as:'user',
                //esto es lo que quiero mostrar//
                attributes: ['id', 'firstName', 'lastName', 'email']
                
            },

            {
                model:Categories,
                as:'category',

                
              
            }
        ],    

    })
    return data
};

//Post Categories POSTSCATEGORIES//
//!Relacion muchos a muchos
// Posts.findAll({
//     include:[{
//         model:PostCategories,
//         include: [{
//             model:Categories
//         }]
//     }]
// })





const getPostById = async(id) => {

    const data = await Posts.findOne({

        where: {
            id
        },
        //esto es lo que no quiero mostrar//
        attributes: {
            exclude:['userId', 'categoryId', 'createdAt','updatedAt']
        },

     
        //?los joins
        include:[
            {
                model:Users,
                as:'user',
                //esto es lo que quiero mostrar//
                attributes: ['id', 'firstName', 'lastName', 'email']
                
            },

            {
                model:Categories,
                as:'category',

                
              
            }
        ],    

    })
    return data
   
};

const createPost = async (data) => {
    const response = await Posts.create({
        id: uuid.v4(),
        title:data.title,
        content:data.content,
        userId:data.userId,//?este es user Id que viene del token
        categoryId:data.categoryId
    })
    return response
}

//!Para mostrar los posts filtrados por categoria
const getPostsByCategory = async (categoryId) => {
    const data = await Posts.findAll({
        where : {
            categoryId
        }
    })
    return data
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    getPostsByCategory
}