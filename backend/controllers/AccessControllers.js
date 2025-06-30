const accessUserDetailModel = require('../models/UserDetailsModel')

exports.signupController = async (req, res, next) => {
    const createUser = req.body;
    try {
        const validateEmail = await accessUserDetailModel.findOne({ mailID: createUser.mailID });
        if (validateEmail === null) {
            const validatePhoneno = await accessUserDetailModel.findOne({ phone: createUser.phone });
            if (validatePhoneno === null) {
                const newUser = new accessUserDetailModel(createUser);
                await newUser.save();
                console.log(newUser);
                res.json({
                    isAuth: true,
                    errormsg: "login validate successfully",
                    value: newUser
                });
            } else {
                res.json({
                    isAuth: false,
                    errormsg: "phoneno already registered",
                });
            }
        } else {
            res.json({
                isAuth: false,
                errormsg: "EmailID already registered",
            });
        }

    } catch (err) {
        res.json({
            isAuth: false,
            errormsg: err.errorResponse,
        });
    }
}

exports.loginController = async (req, res, next) => {
    const validateUser = req.body;
    try {
        const loginCredential = await accessUserDetailModel.findOne({
            $or: [
                { mailID: validateUser.loginID },
                { phone: validateUser.loginID },
            ],
        });

        if (loginCredential !== null) {
            if (loginCredential.password === validateUser.password) {
                res.json({
                    isAuth: true,
                    errmsg: "Login Successfully",
                    value: loginCredential
                })
            } else {
                res.json({
                    isAuth: false,
                    errmsg: "Wrong Password",
                });
            }
        } else {
            res.json({
                isAuth: false,
                errmsg: "LoginID didn't matched",
            });
        }
    } catch (error) {
        console.log(error)
        res.json({
            isAuth: false,
            errmsg: error.errorResponse,
        });
    }
};
