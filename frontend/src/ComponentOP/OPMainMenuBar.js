import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setlogininfo } from '../brewStore/AppState';
import logo from '../assets/images/logo/logo.svg';

export const OPMainMenuBar = () => {
    const dispatchappStore = useDispatch();
    const getAppStoreData = useSelector((state) => state.appstate.login_info);
    const navigate = useNavigate();

    const listMidHeadings = getAppStoreData.userType == "User" ? [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "About us",
            to: "/about-us",
        },
    ] : [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "About us",
            to: "/about-us",
        },
        {
            name: "Add product",
            to: "/add-product",
        },
        {
            name: "Edit discount",
            to: "/edit-discount",
        },
    ]
    const listRightHeadings = getAppStoreData.userType == "User" ? [
        {
            iconClass: "icon icon-search",
            to: "/search"
        },
        {
            iconClass: "fa-solid fa-sack-dollar",
            to: "/subscription"
        },
        {
            iconClass: "icon icon-account",
            to: "/profile"
        },
        {
            iconClass: "fas fa-file-invoice",
            to: "/invoice"
        },
    ] : [
        {
            iconClass: "icon icon-account",
            to: "/profile"
        },
        {
            iconClass: "fas fa-file-invoice",
            to: "/invoice"
        },
    ]
    function handleLogout() {
        dispatchappStore(setlogininfo({
            isloggedin: false,
            userType: "User"
        }));
        navigate("/");
    }

    return (
        <>
            <header className='header-default' style={{ top: "unset" }}>
                <div className="container-full px_15 lg-px_40">
                    <div className="row wrapper-header align-items-center">
                        <div className="col-md-4 col-3 tf-lg-hidden">
                            <Link>
                                <></>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-md-4 col-6">
                            <Link>
                                <img src={logo} alt="logo" className="logo" />
                            </Link>
                        </div>
                        <div className="col-xl-6">
                            <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
                                {listMidHeadings.map((item, index) => (
                                    < li key={index} className="menu-item" >
                                        <button onClick={() => { navigate(item.to); }} className="item-link text-decoration-none text-black border-0 bg-transparent" style={{ fontSize: "22px" }}>
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-4 col-3">
                            <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                                {listRightHeadings.map((item, index) => (
                                    <li key={index} className="nav-account">
                                        <button style={{ fontSize: "22px" }} onClick={() => { navigate(item.to) }} data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="nav-icon-item text-decoration-none border-0 bg-transparent">
                                            <i className={`${item.iconClass} text-black`}></i>
                                        </button>
                                    </li>
                                ))}
                                <li className="nav-account">
                                    <button onClick={() => { handleLogout() }} data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="nav-icon-item text-decoration-none border-0 bg-transparent">
                                        <i style={{ fontSize: "22px" }} className="fa-solid fa-arrow-right-from-bracket"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
