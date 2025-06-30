import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../ApiOP/useFetch';
import { setproductinfo } from '../brewStore/AppState';
import { useDispatch, useSelector } from 'react-redux';

export const Search = () => {
    const [startInit, setStartInit] = useState(true);
    const [startRender, setStartRender] = useState(false);
    const [error, setError] = useState({});
    const [rerender, setRerender] = useState(false);
    const dispatchappStore = useDispatch();
    const getAppStoreData = useSelector((state) => state.appstate.login_info);
    const [viewList, setViewList] = useState(2);
    const [hoverImage, setHoverImage] = useState("");
    const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();
    const tbl_product = useRef();
    const navigate = useNavigate();

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

    const product = [
        {
            id: 1,
            title: 'Ribbed Tank Top',
            price: '$16.95',
            description:
                'Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...',
            images: [
                require("../assets/images/products/orange-1.jpg"),
                require("../assets/images/products/white-1.jpg"),
            ],
            isWishlist: false,
        },
        {
            id: 2,
            title: 'Ribbed Tank Top',
            price: '$16.95',
            description:
                'Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...',
            images: [
                require("../assets/images/products/orange-1.jpg"),
                require("../assets/images/products/white-1.jpg"),
            ],
            isWishlist: false,
        },
        {
            id: 3,
            title: 'Ribbed Tank Top',
            price: '$16.95',
            description:
                'Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...',
            images: [
                require("../assets/images/products/orange-1.jpg"),
                require("../assets/images/products/white-1.jpg"),
            ],
            isWishlist: false,
        },
        {
            id: 4,
            title: 'Ribbed Tank Top',
            price: '$16.95',
            description:
                'Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...',
            images: [
                require("../assets/images/products/orange-1.jpg"),
                require("../assets/images/products/white-1.jpg"),
            ],
            isWishlist: false,
        },
    ];

    function initiControl() {
        tbl_product.current = responseData.value.map(item => ({
            id: item._id,
            title: item.name,
            price: item.price,
            description: item.para,
            discount: item.discount,
            images: [
                require(`../assets/images/instruments/${item.image[0].imgName}`),
                require(`../assets/images/instruments/${item.image[1].imgName}`),
            ]
        }))
        setStartRender(true);
    }
    let layoutOptions = [
        { id: 1, className: "sw-layout-list", icon: "icon-list", isAction: true },
        { id: 2, className: "sw-layout-2 ", icon: "icon-grid-2", isAction: false },
        { id: 3, className: "sw-layout-3", icon: "icon-grid-3", isAction: false },
        { id: 4, className: "sw-layout-4", icon: "icon-grid-4", isAction: false },
        { id: 5, className: "sw-layout-5", icon: "icon-grid-5", isAction: false },
        { id: 6, className: "sw-layout-6", icon: "icon-grid-6", isAction: false },
    ];
    function handlelist(index) {
        setViewList(index)
    }
    function handleOnClick(index) {
        dispatchappStore(setproductinfo(
            tbl_product.current[index]
        ))

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
                }
            }
        }
    }, [startInit, isLoadingApi]);
    return (
        <>
            {
                startRender &&
                <div className="flat-spacing-2">
                    <div className="container">
                        <div className="tf-shop-control grid-3 d-flex  justify-content-center">
                            <div className="tf-control-layout d-flex justify-content-center">
                                <ul className="tf-control-layout d-flex justify-content-center">
                                    {layoutOptions.map((option, index) => (
                                        <li key={option.id} onClick={() => handlelist(index)} className={`tf-view-layout-switch ${option.className} ${viewList == index ? "active" : ""}`}>
                                            <div className="item">
                                                <span className={`icon ${option.icon}`}></span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper-control-shop gridLayout-wrapper">
                            {
                                viewList === 0 ?
                                    <>
                                        <p className='d-none'>{viewList}</p>
                                        <div className="tf-list-layout wrapper-shop">
                                            {tbl_product.current.map((product, index) => (
                                                <div className="card-product list-layout" key={product.id}>
                                                    <div className="card-product-wrapper">
                                                        <Link onClick={() => handleOnClick(index)} to={getAppStoreData.isloggedin ? "product-details" : "/profile"} className="product-img">
                                                            <img className="img-product" src={product.images[0]} alt={product.title} />
                                                            <img className="img-hover" src={product.images[1]} alt={product.title} />
                                                        </Link>
                                                    </div>
                                                    <div className="card-product-info">
                                                        <Link onClick={() => handleOnClick(index)} to={getAppStoreData.isloggedin ? "product-details" : "/profile"} className="title link">
                                                            {product.title}
                                                        </Link>
                                                        {/* Product Price */}
                                                        <div className="tf-product-info-price">
                                                            <div className="price-on-sale">₹ {product.price * (1 - product.discount / 100)}  </div>
                                                            <div className="compare-at-price">₹ {product.price}</div>
                                                            <div className="badges-on-sale">
                                                                <span>{product.discount}</span>% OFF
                                                            </div>
                                                        </div>
                                                        <p className="description">{product.description}</p>
                                                        <div className="list-product-btn">
                                                            <Link className="box-icon wishlist style-3 hover-tooltip">
                                                                {product.isWishlist ? <span className="icon icon-delete"></span> : <span className="icon icon-heart"></span>}
                                                                <span className="tooltip">Add to Wishlist</span>
                                                            </Link>
                                                            <Link onClick={() => handleOnClick(index)} to={getAppStoreData.isloggedin ? "product-details" : "/profile"} data-bs-toggle="modal" className="box-icon quickview style-3 hover-tooltip">
                                                                <span className="icon icon-view"></span>
                                                                <span className="tooltip">Quick view</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className={`wrapper-shop tf-grid-layout tf-col-${viewList + 1}`}>
                                            {tbl_product.current.map((product, index) => (
                                                <>
                                                    <div
                                                        key={index}
                                                        className="card-product grid"
                                                    >
                                                        <div className="card-product-wrapper">
                                                            <Link onClick={() => handleOnClick(index)} to={getAppStoreData.isloggedin ? "product-details" : "/profile"} className="product-img">
                                                                <img
                                                                    className="img-product"
                                                                    src={product.images[0]}
                                                                    alt={product.title}
                                                                    onMouseEnter={() => setHoverImage(product.images[1])}
                                                                    onMouseLeave={() => setHoverImage(product.images[0])}
                                                                />
                                                                <img
                                                                    className="img-hover"
                                                                    src={product.images[1]}
                                                                    alt={product.title}
                                                                />
                                                            </Link>

                                                            <div className="list-product-btn absolute-2">
                                                                <button
                                                                    className="box-icon bg_white wishlist"
                                                                    onClick={() => alert("Added to Wishlist")}
                                                                >
                                                                    {product.isWishlist ? <span className="icon icon-delete"></span> : <span className="icon icon-heart"></span>}
                                                                    <span className="tooltip">Add to Wishlist</span>
                                                                </button>
                                                                <button
                                                                    className="box-icon bg_white quickview"
                                                                    onClick={() => handleOnClick(index)}
                                                                    to={getAppStoreData.isloggedin ? "product-details" : "/profile"}
                                                                >
                                                                    <span className="icon icon-view"></span>
                                                                    <span className="tooltip">Quick View</span>
                                                                </button>
                                                            </div>
                                                            <div className="on-sale-wrap text-end">
                                                                <div className="on-sale-item">-{product.discount}%</div>
                                                            </div>
                                                        </div>

                                                        <div className="card-product-info">
                                                            <Link onClick={() => handleOnClick(index)} to={getAppStoreData.isloggedin ? "product-details" : "/profile"} className="title link">
                                                                {product.title}
                                                            </Link>
                                                            <span className="price current-price">₹ {product.price}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div >
            }

        </>
    )
}
