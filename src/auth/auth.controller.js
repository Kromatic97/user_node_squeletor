//** */
const {getUserByEmail} = require ("../users/users.controllers")
const {comparePassword} = require ('../utils/crypto')

const loginUser = async (email, password) => {
    //Este controlador tiene 2 posibles respuestas//
    //1 credenciales validad y retorna usuario o la inversa
    try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return false

    } catch (err) {
        return false
    }

}

loginUser('rogi@gmail.com', 'root')
    .then(response => console.log(response))
    .catch(err => console.log(err))

module.exports = {
    loginUser
}