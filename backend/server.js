const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes.js')
const cors = require('cors')


const app = express()
app.use(json())
app.use(cors())
app.use('/server', router)

mongoose.connect('mongodb://localhost/book', {
})


const authRoutes = require("./routes/auth-routes");
const cookieSession=require("cookie-session");
const keys=require("./config/keys");
// const passport = require('passport')

// const app = express()

app.use(cookieSession({
    maxAge:5*60*1000,
    keys:[keys.cookieSession.cookieKey]
}))



app.set('view engine', 'pug')
app.use('/auth', authRoutes);

const db = mongoose.connection
db.on('error', error=>console.log(error))
db.once('open', ()=>console.log('connected to db'))

app.get("/", (req, res) => {
    res.render('index.pug')
})

app.listen(5000, () => {
    console.log("the app started at 5000 port")
})