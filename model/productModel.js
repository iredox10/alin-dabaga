const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    createAt:{
    type: Date,
    default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)