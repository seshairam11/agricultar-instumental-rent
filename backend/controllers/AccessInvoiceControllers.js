const accessInvoiceModel = require("../models/invoiceModel")

exports.ViewInvoice = async (req, res, next) => {
    const viewInvoice = req.body;
    try {
        const lstInvoice = await accessInvoiceModel.find({ referId: viewInvoice._id });
        res.json({
            isAuth: true,
            errormsg: "Upadted Successfully",
            value: lstInvoice
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err,
        });
    }
}
exports.ViewInvoiceAdmin = async (req, res, next) => {
    const viewInvoice = req.body;
    try {
        const lstInvoice = await accessInvoiceModel.find();
        res.json({
            isAuth: true,
            errormsg: "Upadted Successfully",
            value: lstInvoice
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err,
        });
    }
}
exports.AddInvoice = async (req, res, next) => {
    const Invoice = req.body;
    try {
        const addedInvoice = await accessInvoiceModel.insertMany(Invoice);
        console.log(addedInvoice);
        res.json({
            isAuth: true,
            errormsg: "Added Successfully",
            value: addedInvoice
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err,
        });
    }
}