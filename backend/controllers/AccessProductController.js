const accessProductModel = require('../models/ProductsModel')

exports.ViewProductAdmin = async (req, res, next) => {
    const createUser = req.body;
    try {
        const lstProduct = await accessProductModel.find();
        res.json({
            isAuth: true,
            errormsg: "loaded Successfully",
            value: lstProduct
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err.errorResponse,
        });
    }
}
exports.AddProductAdmin = async (req, res, next) => {
    const product = req.body;
    try {
        const addedProduct = await accessProductModel.insertMany(product);
        console.log(addedProduct)
        res.json({
            isAuth: true,
            errormsg: "Added Successfully",
            value: addedProduct
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err,
        });
    }
}

exports.UpdateProductAdmin = async (req, res, next) => {
    const updata = req.body;
    try {
        const updatedProduct = await accessProductModel.findByIdAndUpdate(
            updata._id,
            { discount: updata.discount },
            { new: true }
        );
        console.log(updatedProduct);
        res.json({
            isAuth: true,
            errormsg: "updated Successfully",
            value: updatedProduct
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err.errorResponse,
        });
        console.log(err)
    }
}

exports.FindDiscount = async (req, res, next) => {
    const createUser = req.body;
    try {
        const lstDiscountProduct = await accessProductModel.find({ discount: { $ne: null } });
        res.json({
            isAuth: true,
            errormsg: "Discount data loaded Successfully",
            value: lstDiscountProduct
        });
    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err.errorResponse,
        });
    }
}
