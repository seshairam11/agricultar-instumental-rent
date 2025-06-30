import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../ApiOP/useFetch';
import { setsubscriptioninfo } from '../brewStore/AppState';


const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [startInit, setStartInit] = useState(null);
    const dispatchappStore = useDispatch();
    const navigate = useNavigate();
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const getAppStoreData = useSelector((state) => state.appstate.product);
    const getPersonalData = useSelector((state) => state.appstate.login_info);
    const getSubscriptionData = useSelector((state) => state.appstate.subscription);
    const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();

    const generateInvoiceNumber = () => {
        const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Format: YYYYMMDD
        const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
        return `INV-${datePart}-${randomPart}`;
    };

    function handleBookNowSubscription() {
        if (getSubscriptionData?.slot >= 0) {
            dispatchappStore(setsubscriptioninfo({
                ...getSubscriptionData,
                slot: getSubscriptionData.slot - 1
            }))
            let _getLoginAuth = {
                invoiceNo: generateInvoiceNumber(),
                method: "Subscription",
                referId: getPersonalData._id,
                invoiceDate: formatDate(),
                dueData: formatDate(),
                cusName: getPersonalData.userName,
                description: getAppStoreData.title,
                discount: getAppStoreData.discount,
                qty: quantity,
                price: getAppStoreData.price,
            }
            let serverRequestParam = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_getLoginAuth),
                apiUrl: "/api/v1/addinvoice",
                apikey: "ADDINVOICE"
            };
            setStartInit(true);
            serverRequest(serverRequestParam);
        } else {
            navigate("/subscription")
        }
    }
    function handleBookNowCash() {
        let _getLoginAuth = {
            invoiceNo: generateInvoiceNumber(),
            method: "Cash",
            referId: getPersonalData._id,
            invoiceDate: formatDate(),
            dueData: formatDate(),
            cusName: getPersonalData.userName,
            description: getAppStoreData.title,
            discount: getAppStoreData.discount,
            qty: quantity,
            price: getAppStoreData.price,
        }
        let serverRequestParam = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_getLoginAuth),
            apiUrl: "/api/v1/addinvoice",
            apikey: "ADDINVOICE"
        };
        setStartInit(true);
        serverRequest(serverRequestParam);

    }
    const formatDate = () => {
        const date = new Date();
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };
    useEffect(() => {
        if (startInit) {
            if (isLoadingApi) {
                switch (apiKey) {
                    case "ADDINVOICE":
                        fnresultAddInvoice();
                        break;
                }
            }
        }

    }, [isLoadingApi, startInit])

    function fnresultAddInvoice() {
        console.log(responseData)
        if (responseData.isAuth == true) {
            navigate('/invoice')
        }
        setStartInit(false);
    }
    return (
        <div className="flat-spacing-4 pt_0">
            <div className="tf-main-product section-image-zoom">
                <div className="container">
                    <div className="row">
                        {/* Product Gallery */}
                        <div className="col-md-6">
                            <div className="tf-product-media-wrap sticky-top">
                                <div className="product-slider" style={{ height: "500px", width: "100%" }}>
                                    {/* Custom Arrows */}
                                    <div className="custom-swiper-button-prev">❮</div>
                                    <div className="custom-swiper-button-next">❯</div>

                                    <Swiper
                                        modules={[Navigation]}
                                        slidesPerView={1}
                                        centeredSlides={true}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{ clickable: true }}
                                        navigation={{
                                            nextEl: '.custom-swiper-button-next',
                                            prevEl: '.custom-swiper-button-prev',
                                        }}
                                        onSwiper={setThumbsSwiper}
                                        className="thumbs-slider"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    >
                                        {getAppStoreData.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="item" style={{ height: "100%" }}>
                                                    <Link >
                                                        <img
                                                            style={{ height: "100%" }}
                                                            src={image}
                                                            alt={`Product - ${index} `}
                                                            className="lazyloaded"
                                                        />
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <style jsx>{`
                .product-slider {
                    position: relative;
                    width: 100%;
                }

                .custom-swiper-button-prev,
                .custom-swiper-button-next {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 10;
                    cursor: pointer;
                    background-color: rgba(0, 0, 0, 0.5);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 50%;
                    font-size: 24px;
                    transition: background-color 0.3s;
                }

                .custom-swiper-button-prev {
                    left: 10px;
                }

                .custom-swiper-button-next {
                    right: 10px;
                }

                .custom-swiper-button-prev:hover,
                .custom-swiper-button-next:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
            `}</style>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-md-6">
                            <div className="tf-product-info-wrap position-relative">
                                <div className="tf-product-info-list other-image-zoom">
                                    {/* Product Title */}
                                    <div className="tf-product-info-title">
                                        <h5>{getAppStoreData.title}</h5>
                                    </div>

                                    {/* Product Price */}
                                    <div className="tf-product-info-price">
                                        <div className="price-on-sale">₹ {getAppStoreData.price * (1 - getAppStoreData.discount / 100)}  </div>
                                        <div className="compare-at-price">₹ {getAppStoreData.price}</div>
                                        <div className="badges-on-sale">
                                            <span>{getAppStoreData.discount}</span>% OFF
                                        </div>
                                    </div>

                                    {/* Product Quantity */}
                                    <div className="tf-product-info-quantity">
                                        <div className="quantity-title fw-6">Quantity</div>
                                        <div className="wg-quantity">
                                            <span
                                                className="btn-quantity btn-decrease"
                                                onClick={decreaseQuantity}
                                            >
                                                -
                                            </span>
                                            <input
                                                type="text"
                                                className="quantity-product"
                                                name="number"
                                                value={quantity}
                                                readOnly
                                            />
                                            <span
                                                className="btn-quantity btn-increase"
                                                onClick={increaseQuantity}
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>

                                    <div class="tf-product-info-buy-button">
                                        <div className="d-flex">
                                            <button onClick={handleBookNowCash()} class=" t-decorate tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart">
                                                <span>Book now -&nbsp;</span>
                                                <span class="tf-qty-price total-price">₹ {quantity * getAppStoreData.price * (1 - getAppStoreData.discount / 100)}</span>
                                            </button>
                                            <div class="w-100">
                                                <button onClick={handleBookNowSubscription} class="t-decorate btns-full" style={{ border: "none" }}>
                                                    <span>Book on Subscription</span>
                                                    <span>{`(${getSubscriptionData.slot})`}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Delivery & Return Info */}
                                    <div className="tf-product-info-delivery-return">
                                        <div className="row">
                                            <div className="col-xl-6 col-12">
                                                <div className="tf-product-delivery">
                                                    <div className="icon">
                                                        <i className="icon-delivery-time"></i>
                                                    </div>
                                                    <p>
                                                        Come and pick up the instruments.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-12">
                                                <div className="tf-product-delivery mb-0">
                                                    <div className="icon">
                                                        <i className="icon-return-order"></i>
                                                    </div>
                                                    <p>
                                                        Return within
                                                        <span className="fw-7"> 30 min</span> If any damage
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trust Seal and Payment */}
                                    <div className="tf-product-info-trust-seal">
                                        <div className="tf-product-trust-mess">
                                            <i className="icon-safe"></i>
                                            <p className="fw-6">
                                                Guarantee Safe <br /> Checkout
                                            </p>
                                        </div>
                                        <div className="tf-payment">
                                            <img src={require("../assets/images/payments/visa.png")} alt="Visa" />
                                            <img src={require("../assets/images/payments/img-1.png")} alt="Payment 1" />
                                            <img src={require("../assets/images/payments/img-2.png")} alt="Payment 2" />
                                            <img src={require("../assets/images/payments/img-3.png")} alt="Payment 3" />
                                            <img src={require("../assets/images/payments/img-4.png")} alt="Payment 4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
