import React, { useState, useEffect, useRef } from 'react';
import useFetch from '../ApiOP/useFetch';
import { OPReadOnlyListTable } from '../ComponentOP/OPReadOnlyTable';
import { OPTextBox } from '../ComponentOP/OPTextBox';
import { OPButton } from '../ComponentOP/OPButton';

export default function EditDiscount() {

    const [startInit, setStartInit] = useState(true);
    const [startRender, setStartRender] = useState(false);
    const [error, setError] = useState({});
    const [rerender, setRerender] = useState(false);

    const ctlAttribute = useRef();
    const tbl_product = useRef();

    const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();

    function fnViewProductRequest() {
        let _getBody = {
            referId: null
        }
        let serverRequestParam = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_getBody),
            apiUrl: "/api/v1/admin-productlst",
            apikey: "VIEWPRODUCT"
        };
        serverRequest(serverRequestParam);
        setStartInit(false);
    }

    function initiControl() {
        console.log(responseData);
        if (responseData.isAuth) {

            const ctl_array = [
                {
                    /*login:Product : 0*/
                    arrayindex: 0,
                    csstheme: {
                        labletext: "Product",
                        classname: "form-control",
                        id: "txt_loginid",
                        inputtype: "text",
                        length: 50,
                        readonly: true,
                        hinttext: "Enter your Product",
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
                    /*login:Price : 1*/
                    arrayindex: 1,
                    csstheme: {
                        labletext: "Price",
                        classname: "form-control",
                        id: "txt_price",
                        inputtype: "number",
                        length: 10,
                        readonly: true,
                        hinttext: "Enter your Price",
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
                    /*login:Qty : 2*/
                    arrayindex: 2,
                    csstheme: {
                        labletext: "Qty",
                        classname: "form-control",
                        id: "txt_qty",
                        inputtype: "number",
                        length: 10,
                        readonly: true,
                        hinttext: "Enter your Qty",
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
                    /*login:Discount : 3*/
                    arrayindex: 3,
                    csstheme: {
                        labletext: "Discount",
                        classname: "form-control",
                        id: "txt_discount",
                        inputtype: "number",
                        length: 10,
                        readonly: true,
                        hinttext: "Enter your Discount",
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
                    //ctl : Update : 4
                    arrayindex: 4,
                    csstheme: {
                        classname: "sib-form-block__button sib-form-block__button-with-loader tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn m-1",
                        id: "Update",
                        disable: false,
                        labletext: "Update",
                    },
                },
                {
                    //ctl : Cancel : 5
                    arrayindex: 5,
                    csstheme: {
                        classname: "sib-form-block__button sib-form-block__button-with-loader tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn m-1",
                        id: "cancel",
                        disable: false,
                        labletext: "Cancel",
                    },
                },
            ]
            ctlAttribute.current = ctl_array;
            fnBuildDriverList(responseData.value);
            setStartRender(true);
            setRerender(!rerender);
        } else {
            setError({
                isAuth: true,
                header: "Error",
                body: responseData.errormsg,
            })
        }
    }

    function fnBuildDriverList(resTableData) {
        const passagelist = resTableData
            .map(item => ({
                rowid: item._id,
                showrow: true,
                table_value: [
                    {
                        t_key: 0,
                        t_value: item.name,
                    },
                    {
                        t_key: 1,
                        t_value: item.price,
                    },
                    {
                        t_key: 2,
                        t_value: item.qty,
                    },
                    {
                        t_key: 3,
                        t_value: item?.discount,
                    },
                ]
            }))

        let l_tbl_product = {
            tablename: "tbl_productlist",
            tableindex: null,
            tabledataid: null,
            colMetaData: [
                {
                    h_colindex: 0,
                    h_name: "Product",
                    h_width: "150",
                    h_txtalign: "left",
                },
                {
                    h_colindex: 1,
                    h_name: "Price",
                    h_width: "43",
                    h_txtalign: "left",
                },
                {
                    h_colindex: 2,
                    h_name: "qty",
                    h_width: "43",
                    h_txtalign: "left",
                },
                {
                    h_colindex: 3,
                    h_name: "Discount",
                    h_width: "43",
                    h_txtalign: "left",
                },

            ],
            tableData: passagelist,
        };
        tbl_product.current = l_tbl_product
    }

    function handlePress(e) {
        const btn_id = e.currentTarget.id;
        console.log(btn_id)
        switch (btn_id) {
            case "Update":
                fnUpdate();
                break;
            case "cancel":
                ctlAttribute.current[0].inputvalue = "";
                ctlAttribute.current[1].inputvalue = "";
                ctlAttribute.current[2].inputvalue = "";
                ctlAttribute.current[3].inputvalue = "";
                ctlAttribute.current[3].csstheme.readonly = true;
                setRerender(!rerender);
                break;
        }
    }
    async function fnUpdate() {
        let _updatePassageList = {
            _id: tbl_product.current.tabledataid,
            discount: ctlAttribute.current[3].inputvalue == "" ? null : ctlAttribute.current[3].inputvalue,
        }
        let serverRequestParam = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_updatePassageList),
            apiUrl: "/api/v1/admin-productupdate",
            apikey: "UPDATEPRODUCT"
        };
        serverRequest(serverRequestParam);
    }

    function handleClickTable(index) {
        const driverDetial = tbl_product.current.tableData[index];
        tbl_product.current.tableindex = index;
        tbl_product.current.tabledataid = driverDetial.rowid;
        ctlAttribute.current[0].inputvalue = driverDetial.table_value[0].t_value;
        ctlAttribute.current[1].inputvalue = driverDetial.table_value[1].t_value;
        ctlAttribute.current[2].inputvalue = driverDetial.table_value[2].t_value;
        ctlAttribute.current[3].inputvalue = driverDetial.table_value[3].t_value == undefined ? "" : driverDetial.table_value[3].t_value;
        ctlAttribute.current[3].csstheme.readonly = false
        setRerender(!rerender);
    }

    useEffect(() => {
        if (startInit === true) {
            fnViewProductRequest();
        } else {
            if (isLoadingApi) {
                switch (apiKey) {
                    case "VIEWPRODUCT":
                        initiControl();
                        break;
                    case "UPDATEPRODUCT":
                        fnViewProductRequest();
                        break;
                }
            }
        }
    }, [startInit, isLoadingApi]);

    return (
        <>
            {startRender && (
                <div style={{ padding: 20, }}>
                    <div className="row mt-3 mb-5">
                        <h2>Edit Discount</h2>
                    </div>
                    <div className="row">
                        <div className="col-6 mt-2 mb-2">
                            <OPTextBox
                                ctl_Attribute={ctlAttribute.current[0]}
                            />
                        </div>
                        <div className="col-6 mt-2 mb-2">
                            <OPTextBox
                                ctl_Attribute={ctlAttribute.current[1]}
                            />
                        </div>
                        <div className="col-6 mt-2 mb-2">
                            <OPTextBox
                                ctl_Attribute={ctlAttribute.current[2]}
                            />
                        </div>
                        <div className="col-6 mt-2 mb-2">
                            <OPTextBox
                                ctl_Attribute={ctlAttribute.current[3]}
                            />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4 d-flex justify-content-end">
                            <OPButton
                                ctl_Attribute={ctlAttribute.current[4]}
                                handleButtonClick={handlePress}
                            />
                            <OPButton
                                ctl_Attribute={ctlAttribute.current[5]}
                                handleButtonClick={handlePress}
                            />
                        </div>
                    </div>

                    <OPReadOnlyListTable
                        tablename={tbl_product.current.tablename}
                        actionButton={tbl_product.current.actionButton}
                        tableMetaData={tbl_product.current.tableMetaData}
                        colMetaData={tbl_product.current.colMetaData}
                        tableData={tbl_product.current.tableData}
                        handleClickTable={handleClickTable}
                    />

                    {/* Error Message */}
                    {error.isAuth && (
                        <div style={{ color: 'red', marginTop: 10 }}>
                            <strong>{error.header}:</strong> {error.body}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
