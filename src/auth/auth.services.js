const {loginUser} = require ('./auth.controller')

const login = (req, res) => {
    const {email, password} = req.body

    if(!email || !password) return res.status(400).json({message:'Mising Data'})
    

}