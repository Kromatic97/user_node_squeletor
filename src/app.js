//Dependencias

const express = require ('express')

//FILES
const config = require ('./config')
//ROUTES
const userRouter = require ('./users/users.router')

//Initial config
const app = express()

app.use(express.json())



app.get('/', (req, res) => {
    res.status(200).json ({
        message:'OK!',
        users:`localhost:${config.port}/api/v1/users`
    })
} )

app.use('/api/v1/users', userRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})


