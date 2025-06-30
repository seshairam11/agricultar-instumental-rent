const mongoose = require('mongoose');

const accessInvoiceSchema = new mongoose.Schema({
    invoiceNo: { type: String, required: true },
    method: { type: String, required: true },
    referId: { type: String, required: true },
    invoiceDate: { type: String, required: true },
    dueData: { type: String, required: true },
    cusName: { type: String, required: true },
    description: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
}, {
    collection: 'AccessInvoice'
})

const accessInvoiceModel = mongoose.model('AccessInvoice', accessInvoiceSchema);
module.exports = accessInvoiceModel;
``