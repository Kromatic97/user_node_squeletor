//Dependencias

const express = require ('express');
//Files
const config = require ('./config')

//Routes
const userRouter = require ('./users/user.router')

//Initial config
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json ({
        message:'OK!',
        users:`localhost:${config.port}/api/v1/users`
    })
} )


app.use('/api/v1/users')


app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})


