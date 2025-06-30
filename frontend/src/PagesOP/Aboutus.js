import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import aboutBanner from '../assets/images/blog/background (5).jpg';
import collectionImage from '../assets/images/blog/background (3).jpeg';
import collectionImage1 from '../assets/images/blog/background (4).jpeg'; // Adjust the path as needed
import collectionImage2 from '../assets/images/blog/background (2).jpeg'; // Adjust the path as needed
import gallery1 from '../assets/images/shop/gallery/gallery-7.jpg';
import gallery2 from '../assets/images/shop/gallery/gallery-3.jpg';
import gallery3 from '../assets/images/shop/gallery/gallery-5.jpg';
import gallery4 from '../assets/images/shop/gallery/gallery-8.jpg';
import gallery5 from '../assets/images/shop/gallery/gallery-6.jpg';

const Aboutus = () => {
    const galleryItems = [gallery1, gallery2, gallery3, gallery4, gallery5];

    return (
        <>
            <section className="tf-slideshow about-us-page position-relative">
                <div className="banner-wrapper">
                    <img
                        className="ls-is-cached lazyloaded"
                        src={aboutBanner}
                        alt="image-collection"
                    />
                    <div className="box-content text-center">
                        <div className="container">
                            <div className="text text-white">
                                Empowering Farmers to Achieve <br className="d-xl-block d-none" /> Success with the Right Tools
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flat-spacing-9">
                <div className="container">
                    <div className="flat-title my-0">
                        <span className="title">We are Ecomus</span>
                        <p className="sub-title text_black-2">
                            Welcome to our Agricultural Equipment Rental Platform, where we believe <br className="d-xl-block d-none" />
                            that the right tools drive success. Our collection features reliable and <br className="d-xl-block d-none" />
                            high-quality farming equipment, ensuring you have everything you need to cultivate  <br className="d-xl-block d-none" />
                            your fields efficiently and effectively.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flat-spacing-23 flat-image-text-section">
                <div className="container">
                    <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
                        <div className="tf-image-wrap">
                            <img
                                className="w-100 ls-is-cached lazyloaded"
                                src={collectionImage}
                                alt="collection-img"
                            />
                        </div>
                        <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
                            <div>
                                <div className="heading">Established - 2025 on <br />Dr MGR University</div>
                                <div className="text">
                                    Ecomus was founded in 1995 at Dr. MGR University by a team of <br className="d-xl-block d-none" />
                                    passionate innovators with a vision to transform the <br className="d-xl-block d-none" />
                                    agricultural sector. They recognized the growing <br className="d-xl-block d-none" />
                                    need for accessible and high-quality farming <br className="d-xl-block d-none" />
                                    equipment and believed there was a gap in the market for a <br className="d-xl-block d-none" />
                                    dedicated rental platform. The first service center was <br className="d-xl-block d-none" />
                                    established on campus where it quickly gained popularity <br className="d-xl-block d-none" />
                                    among local farmers and students alike.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flat-spacing-15">
                <div className="container">
                    <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
                        <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
                            <div>
                                <div className="heading">Our mission</div>
                                <div className="text">
                                    Our mission is to empower farmers through accessible and affordable agricultural equipment. We aim to provide high-quality rental services that help farmers increase productivity and efficiency while promoting sustainable farming practices. We believe that modern farming tools should be easy to access and affordable for everyone, ensuring that every farmer has the resources needed to succeed.
                                </div>
                            </div>
                        </div>
                        <div className="grid-img-group">
                            <div className="tf-image-wrap box-img item-1">
                                <div className="img-style">
                                    <img
                                        className="ls-is-cached lazyloaded"
                                        src={collectionImage1}
                                        alt="img-slider"
                                    />
                                </div>
                            </div>
                            <div className="tf-image-wrap box-img item-2">
                                <div className="img-style">
                                    <img
                                        className="ls-is-cached lazyloaded"
                                        src={collectionImage2}
                                        alt="img-slider"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="bg_grey-2 radius-10 flat-wrap-iconbox">
                        <div className="flat-title lg">
                            <span className="title fw-5">Quality is our priority</span>
                            <div>
                                <p className="sub-title text_black-2">
                                    Our expert team has carefully curated a range of high-performance
                                </p>
                                <p className="sub-title text_black-2">
                                    agricultural equipment, ensuring top-notch quality and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="flat-iconbox-v3 lg">
                            <div className="wrap-carousel wrap-mobile">
                                <div className="wrap-carousel wrap-mobile">
                                    <div className="swiper tf-sw-mobile">
                                        <div className="swiper-wrapper wrap-iconbox lg">
                                            <div className="swiper-slide">
                                                <div className="tf-icon-box text-center">
                                                    <div className="icon">
                                                        <i className="icon-materials"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title">Durable Build</div>
                                                        <p className="text_black-2">
                                                        Constructed from premium-quality materials, ensuring strength and long-lasting performance even under heavy use.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tf-icon-box text-center">
                                                    <div className="icon">
                                                        <i className="icon-design"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title">Practical Design</div>
                                                        <p className="text_black-2">
                                                        Thoughtfully designed for easy operation and maximum efficiency, making it user-friendly and effective.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tf-icon-box text-center">
                                                    <div className="icon">
                                                        <i className="icon-sizes"></i>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title">Multiple Options</div>
                                                        <p className="text_black-2">
                                                        Available in a wide range of sizes and configurations to meet diverse agricultural needs and preferences.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sw-dots style-2 sw-pagination-mb justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="flat-spacing-1">
                <div className="container">
                    <div className="flat-title">
                        <span className="title">Shop Gram</span>
                        <p className="sub-title">
                            Inspire and let yourself be inspired, from one unique fashion to another.
                        </p>
                    </div>
                    <div className="wrap-shop-gram">
                        <Swiper
                            dir="ltr"
                            slidesPerView={5}
                            spaceBetween={7}
                            breakpoints={{
                                320: { slidesPerView: 2, spaceBetween: 7 }, // Mobile
                                768: { slidesPerView: 3, spaceBetween: 7 }, // Tablet
                                1024: { slidesPerView: 5, spaceBetween: 7 }, // Desktop
                            }}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="swiper tf-sw-shop-gallery"
                        >
                            {galleryItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="gallery-item hover-img">
                                        <div className="img-style">
                                            <img
                                                className="img-hover"
                                                src={item}
                                                alt={`gallery-${index + 1}`}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="sw-dots sw-pagination-gallery justify-content-center swiper-pagination-clickable swiper-pagination-bullets" />
                    </div>
                </div>
            </section> */}
        </>
    );
};


export default Aboutus;
