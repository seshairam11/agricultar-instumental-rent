import React, { useEffect, useRef, useState } from 'react'
import { OPTextBox } from '../ComponentOP/OPTextBox'
import { OPValidations } from '../CommonOP/OPValidations';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../ApiOP/useFetch';
import { OPButton } from '../ComponentOP/OPButton';
import { setlogininfo } from '../brewStore/AppState';

export const Profile = () => {
    const [startInit, setStartInit] = useState(true);
    const [startRender, setStartRender] = useState(false);
    const [startLoader, setStartLoader] = useState(true);
    const [rerender, setRerender] = useState(false);
    const [signup, setSignup] = useState(false);

    const ctlAttribute = useRef([]);

    const validate = OPValidations();
    const dispatchappStore = useDispatch();
    const getAppStoreData = useSelector((state) => state.appstate.login_info);
    const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();

    const [isLogin, setIsLogin] = useState(!getAppStoreData.isloggedin);
    function initControl() {
        let ctl_array = [
            {
                /*login:Email Address : 0*/
                arrayindex: 0,
                csstheme: {
                    labletext: "Login ID",
                    classname: "form-control",
                    id: "txt_loginid",
                    inputtype: "text",
                    length: 50,
                    readonly: getAppStoreData.isloggedin,
                    hinttext: "Enter your Registered Email, Phone, or Username",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "loginid",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*login:password : 1*/
                arrayindex: 1,
                csstheme: {
                    labletext: "Password",
                    classname: "form-control",
                    id: "txt_password",
                    inputtype: "text",
                    length: 50,
                    readonly: getAppStoreData.isloggedin,
                    hinttext: "Enter your Password",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "alphanumeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*login:Login : 2*/
                arrayindex: 2,
                csstheme: {
                    labletext: "Login",
                    classname: "tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center",
                    id: "btn_loginvalidate",
                },
            },
            {
                /*login:Login : 3*/
                arrayindex: 3,
                csstheme: {
                    labletext: "New customer? Create your account",
                    classname: "btn-link fw-6 w-100 link btnToLink",
                    id: "btn_signup",
                },
            },
            {
                /*login:Email Address : 4*/
                arrayindex: 4,
                csstheme: {
                    labletext: "Email id",
                    classname: "form-control",
                    id: "txt_emailid",
                    inputtype: "mail",
                    length: 50,
                    readonly: getAppStoreData.isloggedin,
                    hinttext: "Enter your Email",
                },
                inputvalue: getAppStoreData.isloggedin ? getAppStoreData.mailID : "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "email",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*login:Email Address : 5*/
                arrayindex: 5,
                csstheme: {
                    labletext: "Phone no",
                    classname: "form-control",
                    id: "txt_phoneno",
                    inputtype: "number",
                    length: 10,
                    readonly: getAppStoreData.isloggedin,
                    hinttext: "Enter your Phone",
                },
                inputvalue: getAppStoreData.isloggedin ? getAppStoreData.phone : "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "numeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*login:Register : 6*/
                arrayindex: 6,
                csstheme: {
                    labletext: "Register",
                    classname: "tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center",
                    id: "btn_registervalidate",
                },
            },
            {
                /*login:Login : 7*/
                arrayindex: 7,
                csstheme: {
                    labletext: "Already have an account? Log in here",
                    classname: "btn-link fw-6 w-100 link btnToLink",
                    id: "btn_Login",
                },
            },
            {
                /*login:Email Address : 8*/
                arrayindex: 8,
                csstheme: {
                    labletext: "User name",
                    classname: "form-control",
                    id: "txt_username",
                    inputtype: "text",
                    length: 30,
                    readonly: getAppStoreData.isloggedin,
                    hinttext: "Enter your Username",
                },
                inputvalue: getAppStoreData.isloggedin ? getAppStoreData.userName : "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "username",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*login:User type : 9*/
                arrayindex: 9,
                csstheme: {
                    labletext: "User type",
                    classname: "form-control",
                    id: "txt_usertype",
                    inputtype: "text",
                    length: 30,
                    readonly: true,
                    hinttext: "Enter your Username",
                },
                inputvalue: getAppStoreData.isloggedin ? getAppStoreData.userType : "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "username",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
        ]
        ctlAttribute.current = ctl_array;
        setStartInit(false);
        setStartRender(true);
        setStartLoader(false);
    }

    function handleButtonClick(e) {
        const btn_id = e.target.id;
        console.log(btn_id);
        switch (btn_id) {
            case "btn_signup":
                makeitNormal([1]);
                setSignup(true);
                break;
            case "btn_Login":
                makeitNormal([1]);
                setSignup(false);
                break;
            case "btn_loginvalidate":
                fnValidateLogin();
                break;
            case "btn_registervalidate":
                fnValidateSignup();
                break;

        }
    }
    async function fnValidateSignup() {
        const result = await loopingValidation([8, 4, 5, 1]);
        if (result) {
            let _getSignupAuth = {
                userName: ctlAttribute.current[8].inputvalue,
                mailID: ctlAttribute.current[4].inputvalue,
                phone: ctlAttribute.current[5].inputvalue,
                password: ctlAttribute.current[1].inputvalue,
                userType: "User",
            }
            let serverRequestParam = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_getSignupAuth),
                apiUrl: "/api/v1/signup",
                apikey: "SIGNUP"
            };
            serverRequest(serverRequestParam);
        }
    }
    async function fnValidateLogin() {
        const result = await loopingValidation([0, 1]);
        if (result) {
            console.log("result")
            let _getLoginAuth = {
                loginID: ctlAttribute.current[0].inputvalue,
                password: ctlAttribute.current[1].inputvalue,
            }
            let serverRequestParam = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_getLoginAuth),
                apiUrl: "/api/v1/login",
                apikey: "LOGIN"
            };
            serverRequest(serverRequestParam);
        }
    }

    async function loopingValidation(array) {
        let canFormSubmit = true;
        let l_validate = [];
        const err = await array.map(num => validate(ctlAttribute.current[num]));
        err.forEach((item, index) => {
            if (item.founderror === true) {
                canFormSubmit = false;
                ctlAttribute.current[array[index]].error.errorshow = true;
                ctlAttribute.current[array[index]].csstheme.sethint = true;
                ctlAttribute.current[array[index]].error.errormsg = item.errmsg;
                l_validate.push(item);
            }
        });

        if (canFormSubmit === false) {
            console.log("canFormSubmit")
            ctlAttribute.current[l_validate[0].arrayindex].tooltip.isfocus.focus();
            setRerender(!rerender);
            return false;
        }
        return true;
    }
    function makeitNormal(array) {
        array.map(num => {
            ctlAttribute.current[num].inputvalue = ""
            ctlAttribute.current[num].csstheme.sethint = false
            ctlAttribute.current[num].error.errorshow = false
        })
    }
    function readonlyMethod(array) {
        array.map(num => {
            ctlAttribute.current[num].inputvalue = ""
            ctlAttribute.current[num].csstheme.sethint = false
            ctlAttribute.current[num].csstheme.readonly = true
            ctlAttribute.current[num].error.errorshow = false
        })
    }

    useEffect(() => {
        if (startInit === true) {
            initControl();
        } else {
            console.log(isLoadingApi);
            if (isLoadingApi) {
                switch (apiKey) {
                    case "LOGIN":
                        fnSetResult();
                        break;
                    case "SIGNUP":
                        fnSetResult();
                        break;
                }
            }
        }

    }, [startInit, isLoadingApi]);

    function fnSetResult() {
        const _value = responseData.value
        if (responseData.isAuth === true) {
            dispatchappStore(setlogininfo({
                isloggedin: responseData.isAuth,
                _id: _value._id,
                mailID: _value.mailID,
                phone: _value.phone,
                userName: _value.userName,
                userType: _value.userType,
            }));
            readonlyMethod([4, 5, 8]);
            ctlAttribute.current[4].inputvalue = _value.mailID
            ctlAttribute.current[5].inputvalue = _value.phone
            ctlAttribute.current[8].inputvalue = _value.userName
            ctlAttribute.current[9].inputvalue = _value.userType
            setIsLogin(false)
        }
        console.log(responseData)
    }

    return (
        <>
            {startRender &&
                <>
                    <div className="container" style={{ padding: "10px 0 100px 0" }}>
                        <div className="my-account-content account-edit">
                            <div className="row d-flex justify-content-center m-3">
                                <div className="col-md-6">
                                    <h2>
                                        Profile
                                    </h2>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center m-3">
                                <div className="col-md-6">
                                    <OPTextBox
                                        ctl_Attribute={ctlAttribute.current[8]}
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center m-3">
                                <div className="col-md-6">
                                    <OPTextBox
                                        ctl_Attribute={ctlAttribute.current[4]}
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center m-3">
                                <div className="col-md-6">
                                    <OPTextBox
                                        ctl_Attribute={ctlAttribute.current[5]}
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center m-3">
                                <div className="col-md-6">
                                    <OPTextBox
                                        ctl_Attribute={ctlAttribute.current[9]}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`modal modalCentered fade form-sign-in modal-part-content ${isLogin ? "show" : ""}`} style={isLogin ? { zIndex: 1060, display: "block" } : {}}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                {signup ?
                                    <>
                                        <div className="header">
                                            <div className="demo-title">
                                                Sign up
                                            </div>
                                        </div>
                                        <div className="tf-login-form">
                                            <div className="tf-field style-1">
                                                <OPTextBox
                                                    ctl_Attribute={ctlAttribute.current[8]}
                                                />
                                            </div>
                                            <div className="tf-field style-1" style={{ marginTop: "30px" }}>
                                                <OPTextBox
                                                    ctl_Attribute={ctlAttribute.current[4]}
                                                />
                                            </div>
                                            <div className="tf-field style-1" style={{ marginTop: "30px" }}>
                                                <OPTextBox
                                                    ctl_Attribute={ctlAttribute.current[5]}
                                                />
                                            </div>
                                            <div className="tf-field style-1" style={{ marginTop: "30px" }}>
                                                <OPTextBox
                                                    ctl_Attribute={ctlAttribute.current[1]}
                                                />
                                            </div>
                                            <div className="bottom" style={{ marginTop: "50px" }}>
                                                <div className="w-100">
                                                    <OPButton
                                                        ctl_Attribute={ctlAttribute.current[6]}
                                                        handleButtonClick={handleButtonClick}
                                                    />
                                                </div>
                                                <div className="w-100">
                                                    <OPButton
                                                        ctl_Attribute={ctlAttribute.current[7]}
                                                        handleButtonClick={handleButtonClick}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="header">
                                            <div className="demo-title">
                                                Log in
                                            </div>
                                        </div>
                                        <div className="tf-login-form">
                                            <div className="tf-field style-1">
                                                <OPTextBox
                                                    ctl_Attribute={ctlAttribute.current[0]}
                                                />
                                            </div>
                                            <div className="tf-field style-1" style={{ marginTop: "30px" }}>
                                                <OPTextBox
                                                    ctl_Attribute={ctlAttribute.current[1]}
                                                />
                                            </div>
                                            <div className="bottom" style={{ marginTop: "50px" }}>
                                                <div className="w-100">
                                                    <OPButton
                                                        ctl_Attribute={ctlAttribute.current[2]}
                                                        handleButtonClick={handleButtonClick}
                                                    />
                                                </div>
                                                <div className="w-100">
                                                    <OPButton
                                                        ctl_Attribute={ctlAttribute.current[3]}
                                                        handleButtonClick={handleButtonClick}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                    <div className={`modal-backdrop fade ${isLogin ? "show" : ""}`} style={isLogin ? { zIndex: 1050 } : { display: "none" }}></div>
                </>
            }
        </>
    )
}
