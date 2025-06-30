const mongoose = require('mongoose');

const accessProductSchema = new mongoose.Schema({
    image: { type: Array, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    para: { type: String, required: true },
    qty: { type: String, required: true },
    discount: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
}, {
    collection: 'AccessProducts'
})

const accessProductModel = mongoose.model('AccessProducts', accessProductSchema);
module.exports = accessProductModel;
