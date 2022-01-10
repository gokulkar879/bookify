const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes.js')
const authRoutes= require("./routes/auth-routes");
const cookieSession=require("cookie-session");
const keys=require("./config/keys");

const app = express()

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.cookieSession.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(json())
app.use('/server', router)
app.use('/auth', authRoutes);
// mongoose.connect('mongodb://localhost/book', {
// })
mongoose.connect('mongodb://localhost:27017//book', {
})



const db = mongoose.connection
db.on('error', error=>console.log(error))
db.once('open', ()=>console.log('connected to db'))

app.listen(5000, () => {
    console.log("the app started at 5000 port")
})