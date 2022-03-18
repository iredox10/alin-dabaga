const route = require('express').Router();
const controller = require('../controller/controller')


route.get('/:id',controller.customerDetail)
route.get('/', controller.home)
route.post('/add-customer', controller.addCustomer)
route.post('/add-product/:id', controller.add_product)
route.delete('/delete-customer/:id', controller.delete_customer)

route.post('/login', controller.post_log_in)

module.exports = route