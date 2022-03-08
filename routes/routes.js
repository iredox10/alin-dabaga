const route = require('express').Router();
const controller = require('../controller/controller')


route.get('/',controller.home)
route.post('/add-customer', controller.addCustomer)
route.post('/add-product/:id', controller.add_product)

// route.get('/login', controller.logIn)
// route.post('/login', controller.post)
route.delete('/delete-customer/:id', controller.delete_customer)
route.get('/:id', controller.customerDetail)

// route.get('/customer-detail/:id', controller.customerDetail)
// route.delete('/delete-product/:id', controller.delete_product)




module.exports = route