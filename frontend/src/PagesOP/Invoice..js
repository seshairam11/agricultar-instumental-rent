import { useEffect, useRef, useState } from "react";
import { OPReadOnlyListTable } from "../ComponentOP/OPReadOnlyTable";
import { useSelector } from "react-redux";
import useFetch from "../ApiOP/useFetch";

export default function Invoice() {
    const [list, setList] = useState(true);
    const [startInit, setStartInit] = useState(true);
    const [startRender, setStartRender] = useState(false);
    const [data, setData] = useState({});
    const [isArray, setIsArray] = useState(null);


    const tbl_invoice = useRef({})

    const getAppStoreData = useSelector((state) => state.appstate.login_info);
    const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();

    function fnViewMenuRequest() {
        let _getBody = {
            _id: getAppStoreData._id,
        }
        if (getAppStoreData.userType == "User") {
            let serverRequestParam = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_getBody),
                apiUrl: "/api/v1/viewInvoice",
                apikey: "VIEWINVOICE"
            };
            serverRequest(serverRequestParam);
        } else {
            let serverRequestParam = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_getBody),
                apiUrl: "/api/v1/admin-viewInvoice",
                apikey: "VIEWINVOICE"
            };
            serverRequest(serverRequestParam);
        }

        setStartInit(false);
    }
    function initControl() {
        if (responseData.isAuth) {
            console.log(responseData.value)
            const benchlst = responseData.value
                .map(item => ({
                    rowid: item._id,
                    showrow: true,
                    cusName: item.cusName,
                    method: item?.method,
                    description: item.description,
                    qty: item.qty,
                    price: item.price,
                    discount: item.discount,
                    invoiceNo: item.invoiceNo,
                    invoiceDate: item.invoiceDate,
                    dueData: item.dueData,
                    table_value: [
                        {
                            t_key: 0,
                            t_value: item.invoiceNo,
                        },
                        {
                            t_key: 1,
                            t_value: item.description,
                        },
                        {
                            t_key: 2,
                            t_value: item.invoiceDate,
                        },
                        {
                            t_key: 3,
                            t_value: item.dueData,
                        },
                    ]
                }))
            setIsArray(responseData.value.length === 0)
            let l_tbl_invoice = {
                tablename: "tbl_invoicelist",
                tableindex: null,
                tabledataid: null,
                tableMetaData: {
                    showPagination: false,
                    showSearch: false,
                },
                colMetaData: [
                    {
                        h_colindex: 0,
                        h_name: "Invoice no",
                        h_width: "300px",
                        h_txtalign: "left",
                        h_navigate: "/home",
                    },
                    {
                        h_colindex: 1,
                        h_name: "Description",
                        h_width: "500px",
                        h_txtalign: "left",
                        h_navigate: "/home",
                    },
                    {
                        h_colindex: 2,
                        h_name: "Invoice Date",
                        h_width: "200px",
                        h_txtalign: "left",
                        h_navigate: "/home",
                    },
                    {
                        h_colindex: 3,
                        h_name: "Due Date",
                        h_width: "200px",
                        h_txtalign: "left",
                        h_navigate: "/home",
                    },

                ],
                tableData: benchlst,
            };
            tbl_invoice.current = l_tbl_invoice
        }
        setStartRender(true);
    }

    function handleClickTable(index) {
        const invoiceDetial = tbl_invoice.current.tableData[index];
        setData(invoiceDetial);
        console.log(invoiceDetial);
        setList(false);
    }
    useEffect(() => {
        if (startInit === true) {
            fnViewMenuRequest();
        } else {
            if (isLoadingApi) {
                switch (apiKey) {
                    case "VIEWINVOICE":
                        initControl();
                        break;
                }
            }
        }
    }, [startInit, isLoadingApi]);
    return (
        <>
            {startRender &&
                <>
                    {list ?
                        <>
                            {!isArray ?
                                < section className="invoice-section">
                                    <div className="cus-container2">
                                        <div className="box-invoice">
                                            <div className="header">
                                                <div className="wrap-top">
                                                    <div className="box-left">
                                                        <img src={require("../assets/images/logo/logo.png")} alt="logo" className="logo" />
                                                    </div>
                                                    <div className="box-right">
                                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                            <div className="title">Invoice List</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <OPReadOnlyListTable
                                                tablename={tbl_invoice.current.tablename}
                                                actionButton={tbl_invoice.current.actionButton}
                                                tableMetaData={tbl_invoice.current.tableMetaData}
                                                colMetaData={tbl_invoice.current.colMetaData}
                                                tableData={tbl_invoice.current.tableData}
                                                handleClickTable={handleClickTable}
                                            />
                                        </div>

                                    </div>
                                </section>
                                :
                                < section className="invoice-section">
                                    <div className="cus-container2">
                                        <div className="box-invoice">
                                            <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 500 }}>
                                                No Invoice
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            }
                        </>
                        :
                        <section className="invoice-section">
                            <div className="cus-container2">

                                {/* Invoice Box */}
                                <div className="box-invoice">
                                    <div className="header">
                                        {/* Header Top Section */}
                                        <div className="wrap-top">
                                            <div className="box-left">
                                                <img src={require("../assets/images/logo/logo.png")} alt="logo" className="logo" />
                                            </div>
                                            <div className="box-right">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="title">Invoice #</div>
                                                    <span className="code-num">{data.invoiceNo}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Date Section */}
                                        <div className="wrap-date">
                                            <div className="box-left">
                                                <label>Invoice date:</label>
                                                <span className="date">{data.invoiceDate}</span>
                                            </div>
                                            <div className="box-right">
                                                <label>Due date:</label>
                                                <span className="date">{data.dueData}</span>
                                            </div>
                                        </div>

                                        {/* Supplier and Customer Info */}
                                        <div className="wrap-info">
                                            <div className="box-left">
                                                <div className="title">Supplier</div>
                                                <div className="sub">Selva</div>
                                                <p className="desc">
                                                    MGR university<br /> chennai- 24
                                                </p>
                                            </div>
                                            <div className="box-right">
                                                <div className="title">Customer</div>
                                                <div className="sub">{data.cusName}</div>
                                                <p className="desc">
                                                    ************* <br /> chennai - 24, Tamilnadu.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Invoice Table */}
                                        <div className="wrap-table-invoice">
                                            <table className="invoice-table">
                                                <thead>
                                                    <tr className="title">
                                                        <th>Description</th>
                                                        <th>Qty</th>
                                                        <th>Price</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="content" >
                                                        <td>{data.description}</td>
                                                        <td>{data.qty}</td>
                                                        <td>
                                                            ₹ {data.price * (1 - data.discount / 100)}
                                                        </td>
                                                        <td>₹ {data.qty * data.price * (1 - data.discount / 100)}</td>
                                                    </tr>
                                                    <tr className="content">
                                                        <td className="total"></td>
                                                        <td></td>
                                                        <td>
                                                            <p className="d-flex flex-column">
                                                                <span>Sub Total</span>
                                                                <span>GST (18%)</span>
                                                                <span>Total</span>
                                                            </p>
                                                        </td>
                                                        <td className="">
                                                            <div>
                                                                <p className="d-flex flex-column">
                                                                    <span>₹ {data.qty * data.price * (1 - data.discount / 100)}</span>
                                                                    <span>₹ {data.qty * data.price * (1 - data.discount / 100) * 0.18}</span>
                                                                    <span>₹  {data.qty * data.price * (1 - data.discount / 100) * 0.18 + data.qty * data.price * (1 - data.discount / 100)}</span>
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="footer">
                                        <ul className="box-contact">
                                            <li>www.ecomus.com</li>
                                            <li>invoice@ecomus.com</li>
                                            <li>(123) 123-456</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                </>
            }
        </>
    );
}