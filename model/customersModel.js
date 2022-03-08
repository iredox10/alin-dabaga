const mongoose = require('mongoose')

const customersSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: Number
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
    ]
})

module.exports = mongoose.model('Customer', customersSchema)