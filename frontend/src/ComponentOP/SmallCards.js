import bgImage from '../assets/images/collections/bg-personalized-pod-1.jpg';


const SmallCards = ({ collections }) => {
    return (
        <section className="flat-spacing-4 section-cls-personalized-pod section-full-1">
            <img className="" src={bgImage} alt="Background" />
            <div className="container">
                <div className="flat-title gap-14">
                    <span className="title wow fadeInUp fw-6 text_white">
                        Bring your ideas to life
                    </span>
                </div>
                <div className="tf-grid-layout-4">
                    {collections.map((item) => (
                        <div key={item.id} className="collection-item style-2 hover-img">
                            <div className="collection-inner">
                                <a href="shop-collection-sub.html" className="collection-image img-style radius-20">
                                    <img src={item.image} alt="collection-img" />
                                </a>
                                <div className="collection-content">
                                    <a href="shop-collection-sub.html" className="tf-btn collection-title hover-icon fs-15 radius-3">
                                        <span>{item.title}</span>
                                        <i className="icon icon-arrow1-top-left"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmallCards;
