const Customer = require('../model/customersModel')
const Product = require('../model/productModel')

exports.home = async (req, res) => {
    let searchOption = {}
    const query = req.query.search
    if (query !== null  && query !== '') {
        searchOption.fullName = new RegExp(query,'i')
    }
    const customers = await Customer.find(searchOption)
    res.render('home', { title: 'home', customers, searchOption: req.query })
}

exports.addCustomer = async(req,res) =>{
    try {
        let newCustomer = new Customer(req.body)
        let customer = await newCustomer.save()
        res.redirect('/')
    }
    catch(err){
        console.log(err)
    }
}

exports.customerDetail = async (req, res) => {
    const query = req.query.search
    let searchOption = {}
    if (query !== null && query !== '') {
        searchOption.productName = new RegExp(query,'i')
    }
    try {
        let customer = await Customer.findById(req.params.id)
        let products = await Customer.findById(req.params.id,searchOption).populate('products').sort({ asc: '1' });
        res.render('customer-detail', { title: customer.fullName, customer, products: products.products, searchOption: req.query })     
    }
    catch (err) {
        console.log(err)
    }
}


exports.delete_customer = async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

exports.add_product = async (req, res) => {
    let newProduct = await Product.create({
        productName: req.body.productName,
        quantity: req.body.quantity,
        amount: req.body.amount,
        paid: req.body.paid,
        balance: req.body.balance,
        customer: req.params.id,
    })
    let product = await newProduct.save()
    
    let customer = await Customer.findById(req.params.id)
    
    customer.products.push(product)
    
    customer.save()
    res.redirect(`/${req.params.id}`)
}

exports.delete_product = async (req, res) => {
    let product = await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
}