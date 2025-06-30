import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {

    return (
        <section className="flat-spacing-4 section-christmas-gifts section-full-1">
            <div>
                <div className="flat-title gap-14">
                    <div className="mb_12">

                    </div>
                    <span className="title fw-6 text-center">
                        EXCLUSIVE OFFERS<br />GRAB THE BEST DEALS NOW!
                    </span>
                </div>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-3 mt-3">
                            <div className="card-product">
                                <div className="card-product-wrapper">
                                    <Link to={"/search"} className="product-img">
                                        <img src={product.image} alt="" className="img-product ls-is-cached lazyloaded" />
                                        <img src={product.hoverImage} alt="" className="img-hover ls-is-cached lazyloaded" />
                                    </Link>
                                    <div className="list-product-btn absolute-2">
                                        <button className="box-icon bg_white wishlist">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                        </button>
                                        <button className="box-icon bg_white quickview">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </button>
                                    </div>
                                    <div className="on-sale-wrap text-end">
                                        <div className="on-sale-item">-{product.discount}%</div>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to={"/search"} className="title link">
                                        {product.title}
                                    </Link>
                                    <span className="price">
                                        <span className="fw-4 text-sale">
                                            &#8377;{product.originalPrice}
                                        </span>
                                        <span className="text_primary" style={{ marginLeft: "10px" }}>&#8377;{product.salePrice}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
