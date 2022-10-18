
const usersControllers = require ('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(400).json({message:err.message})
    })
}

const getUseById = (req, res) => {
    const id =  req.params.id
    usersControllers.getUserById(id)

    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(404).json({message:err.message})
    })   
}

//create USER//
const registerUser = (req, res) => {
    const  {firstName, lastName, email, password, phone, birthday, gender, country } = req.body
    if(
        firstName&&
        lastName&&
        email&&
        password&&
        phone&&
        birthday
        ) {
            //se ejecuta el controller
                        usersControllers.createUser({
                            firstName, lastName, email, password, phone, birthday, gender, country  
                        })
            
                        .then(data => {
                            res.status(201).json(data)
                        })
                        .catch(err => {
                            res.status(400).json(err.message)
                        })

        } else {
            //error si no manda todos los datos
        res.status(400).json({message:'All fields must be complete', fields:{ 
                
        firstName: 'string',
        lastName:'string',
        email:'example@gmail.com',
        password:"string",
        phone: '+555321321',
        birthday:'YYYY/MM/DD'
        
        }})
}



const patchUser = (req, res) => {
    const id= req.params.id
    const { firstName, lastName, phone, gender, country } = req.body

    usersControllers.updateUser (id, {firstName, lastName, phone, gender, country })
    .then(data => {
        if (data[0]){
            res.status(200).json({message:`User with ID: ${id}, edited succefully`})
        }else{
            res.status(400).json ({message:`Invalid ID`})
        }
    })

    .catch(err => {
        res.status(400).json ({message:err.message })
    })
};

const deleteUser = (req, res) => {
    const id = req.params.idusersControllers.deleteUser(id)
    .then(data => {
        if(data) {
            res.status(204).json()
        }else {
            res.status(404).json({message: 'Invalid ID'})
        }})
            .catch(err => {res.status(400).json({message: err.message})
    })
    }


module.exports = {
    getAllUsers,
    getUseById,
    patchUser,
    registerUser,
    deleteUser
}}
