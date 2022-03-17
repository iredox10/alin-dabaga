const route = require('express').Router();
const controller = require('../controller/controller')


route.get('/', controller.home)
route.get('/:id',controller.customerDetail)
route.post('/add-customer', controller.addCustomer)
route.post('/add-product/:id', controller.add_product)
route.delete('/delete-customer/:id', controller.delete_customer)


module.exports = route