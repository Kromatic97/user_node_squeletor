const db = require ('../utils/database')
const { DataTypes } = require ('sequelize')


const Categories = db.define('categories', {
    id : {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false
        },

        name : {
            type:DataTypes.STRING,
            allowNull: false
        }
}, {
    //?Evita que sequelize agregue las columnas de createAT  y updateAT
    timestamps:false
})

module.exports = Categories