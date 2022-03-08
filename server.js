const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs')
const routes = require('./routes/routes')
const methodOverride = require('method-override')
mongoose.connect('mongodb://localhost/hassan-shop')
.then((res) => {
    console.log('connected to mongodb ')
}).catch((err) => {
    console.log(err)
});


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)


app.listen(3000)
