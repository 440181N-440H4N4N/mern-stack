require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/', routes)

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to Mongodb")
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })