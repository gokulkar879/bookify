const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes.js')


const app = express()
app.use(json())
app.use('/server', router)

mongoose.connect('mongodb://localhost/book', {
})

const db = mongoose.connection
db.on('error', error=>console.log(error))
db.once('open', ()=>console.log('connected to db'))

app.listen(5000, () => {
    console.log("the app started at 5000 port")
})