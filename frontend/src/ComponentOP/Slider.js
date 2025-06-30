import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


const Slider = ({ slides }) => {


    return (
        <section className="tf-slideshow slider-effect-fade slider-personalized-pod">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                style={{ height: "750px" }}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                spaceBetween={30}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                pagination={{ clickable: true }}
                navigation
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ width: '100%', height: "100%", objectFit: "cover" }}>
                        <div className="wrap-slider">
                            <img src={slide.image} style={{ height: "700px" }} alt="fashion-slideshow" />
                            <div className="box-content text-center">
                                <div className="container">
                                    <h2 className="fade-item fade-item-1 heading text_white fw-6">
                                        {slide.title.split('<br>').map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                {index < slide.title.split('<br>').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </h2>
                                    <div className="fade-item fade-item-2 sub">
                                        <p className="text_white desc">{slide.description}</p>
                                        <div className="d-flex gap-12 align-items-center justify-content-center">
                                            <div className="d-flex gap-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="16"
                                                        viewBox="0 0 14 13"
                                                        fill="#FF8A00"
                                                    >
                                                        <path d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text text_white">{slide.reviews}</span>
                                        </div>
                                    </div>
                                    <div className="fade-item fade-item-3">
                                        <Link
                                            to={"/search"}
                                            className="tf-btn btn-primary animate-hover-btn btn-xl radius-60"
                                        >
                                            <span>Shop collection</span>
                                            <i className="icon icon-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
