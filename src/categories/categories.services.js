const categoryControllers = require ('./categories.controller')


//!va en la ruta raiz
//? /categories
const getAllCategories = (req, res) => {
    categoryControllers.getAllCategories()
    .then ((data) => {
        res.status(200).json(data)
    })
    .catch ((err) => {
        res.status(400).json({message:err.message})
    })
}

//!Va en la ruta 
//? /categories/:id
const getCategorieById = (req, res) => {
    const id = req.params.id
    categoryControllers.getAllCategorieById(id)

    .then ((data) => {
        if(data){
            res.status(200).json(data)

        }else{
            res.status(404).json({message:'Invalid ID'})
        }
        res.status(200).json(data)
    })
    .catch ((err) => {
        res.status(400).json({message:err.message})
    })
}

//!va en la ruta raiz
//? /categories
const postCategory = (req, res) => {
    const {name} = req.body;

    if(name){
    
    categoryControllers.createCategory(name)
    .then ((data) => {
        res.status(201).json(data)
    })
    .catch ((err) => {
        res.status(400).json({message:err.message})
    })
    } else {
            res.status(400).json({message:'Missing Data'})
    }
    
};

module.exports = {
    getAllCategories,
    getCategorieById,
    postCategory
}