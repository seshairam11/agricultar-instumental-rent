import { Link } from 'react-router-dom';
import notFoundImage from '../assets/images/item/404.svg';

const Error404 = () => {
    return (
        <section className="page-404-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="image">
                            <img src={notFoundImage} alt="404 Not Found" />
                        </div>
                        <div className="title">
                            Oops...That link is broken.
                        </div>
                        <p>
                            Sorry for the inconvenience. Go to our homepage to check out our latest collections.
                        </p>
                        <Link to={'/'} className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
                            Return
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error404;
