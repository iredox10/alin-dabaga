const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs')
const routes = require('./routes/routes')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://localhost/hassan-shop')
.then((res) => {
    console.log('connected to mongodb ')
}).catch((err) => {
    console.log(err)
});


app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(routes)

app.get('/cookie', (req, res) => {
    res.cookie('newCookie', true)
    res.send('cookie sended')
})
app.listen(3000)