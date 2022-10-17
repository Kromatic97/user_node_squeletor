//Dependencias

const express = require ('express');

const config = require ('./config')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json ({
        message:'OK!',
        users:`localhost:${config.port}/api/v1/users`
    })
} )

app.listen(config.port, () => {
    console.log(`Server started at port ${port}`)
})


