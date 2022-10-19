//** */
const {getUserByEmail} = require ("../users/users.controllers")
const {comparePasword} = require ('../utils/crypto')

const loginUser =async (email, password) => {
    //Este controlador tiene 2 posibles respuestas//
    //1 credenciales validad y retorna usuario o la inversa
    try {
        const user = await getUserByEmail(email)
        const verifPassword = comparePasword(password, user.password)
        if(verifPassword){
            return user
        }
        return false

    } catch {
        return false
    }
    
}

module.exports = {
    loginUser
}