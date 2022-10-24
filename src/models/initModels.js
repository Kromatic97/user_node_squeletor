const Users = require('./users.models')
const Posts = require ('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {

//**Relacion uno a muchos */

    //?Una publicacion, pertenece a un Usuario
    Posts.belongsTo (Users)
    //? Un usuario tiene muchas publicaciones
    Users.hasMany(Posts)

    //?Una publicacion, pertenece a una Categoria
    Posts.belongsTo (Categories)
    //? Una categoria tiene muchas publicaciones
    Categories.hasMany (Posts)
}

module.exports = initModels