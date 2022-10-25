const db = require ('../utils/database')
const {DataTypes}= require ('sequelize')
const Users = require ('./users.models')
const Categories = require('./categories.models')


const Posts = db.define('posts',{
    id : {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        },

        title : {
            type:DataTypes.STRING,
            allowNull: false
        },

        content : {
            type:DataTypes.TEXT,
            allowNull: false
            
        },

        //?LLave foranea de Users
        userId : {
            type:DataTypes.UUID,
            allowNull: false,
            field:'user_id',
            references: {
                key : 'id',
                model:Users
            },
        },

        //?LLave foranea de Categories
        categoryId: {
            type:DataTypes.INTEGER,
            allowNull:false,
            field:'category_id',
            references: {
                key : 'id',
                model:Categories
            },
        },
})

module.exports = Posts