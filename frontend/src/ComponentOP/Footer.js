import React from 'react';
import logo from '../assets/images/logo/logo.svg';

const Footer = () => {
    return (
        <footer id="footer" className="footer md-pb-70">
            <div className="footer-wrap">
                <div className="footer-body">
                    <div className="container">
                        <div className="row">
                            {/* Left Section */}
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="footer-infor">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src={logo} alt="Logo" />
                                        </a>
                                    </div>
                                    <ul>
                                        <li>
                                            <p>
                                                Address: 1234 Fashion Street, Suite 567, <br /> New
                                                York, NY 10001
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Email: <a href="#">info@fashionshop.com</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Phone: <a href="#">(212) 555-1234</a>
                                            </p>
                                        </li>
                                    </ul>
                                    <a href="#" className="tf-btn btn-line">
                                        Get direction<i className="icon icon-arrow1-top-left"></i>
                                    </a>
                                    <ul className="tf-social-icon d-flex gap-10">
                                        <li>
                                            <a href="#" className="box-icon w_34 round social-facebook social-line">
                                                <i className="icon fs-14 icon-fb"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="box-icon w_34 round social-twiter social-line">
                                                <i className="icon fs-12 icon-Icon-x"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="box-icon w_34 round social-instagram social-line">
                                                <i className="icon fs-14 icon-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="box-icon w_34 round social-tiktok social-line">
                                                <i className="icon fs-14 icon-tiktok"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="box-icon w_34 round social-pinterest social-line">
                                                <i className="icon fs-14 icon-pinterest-1"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                                <h6>Help</h6>
                                <ul className="footer-menu-list">
                                    {[
                                        { label: "Privacy Policy", link: "privacy-policy.html" },
                                        { label: "Returns + Exchanges", link: "delivery-return.html" },
                                        { label: "Shipping", link: "shipping-delivery.html" },
                                        { label: "Terms & Conditions", link: "terms-conditions.html" },
                                        { label: "FAQ's", link: "faq-1.html" },
                                        { label: "Compare", link: "compare.html" },
                                        { label: "My Wishlist", link: "wishlist.html" },
                                    ].map((item) => (
                                        <li key={item.link}>
                                            <a href={item.link} className="footer-menu_item">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* About Us Section */}
                            <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                                <h6>About Us</h6>
                                <ul className="footer-menu-list">
                                    {[
                                        { label: "Our Story", link: "about-us.html" },
                                        { label: "Visit Our Store", link: "our-store.html" },
                                        { label: "Contact Us", link: "contact-1.html" },
                                        { label: "Account", link: "login.html" },
                                    ].map((item) => (
                                        <li key={item.link}>
                                            <a href={item.link} className="footer-menu_item">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter Section */}
                            <div className="col-xl-3 col-md-6 col-12">
                                <h6>Sign Up for Email</h6>
                                <p>
                                    Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterWidget = ({ title, children }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer__widget">
                <div className="footer__widget--inner">{children}</div>
            </div>
        </div>
    );
};
const FooterSilde = ({ title, children }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer__widget">
                <h2 className="footer__widget--title">
                    {title}
                    <button className="footer__widget--button" aria-label="footer widget button"></button>
                    <svg
                        className="footer__widget--title__arrowdown--icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.355"
                        height="8.394"
                        viewBox="0 0 10.355 6.394"
                    >
                        <path
                            d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                            transform="translate(-6 -8.59)"
                            fill="currentColor"
                        />
                    </svg>
                </h2>
                <ul className="footer__widget--menu footer__widget--inner">{children}</ul>
            </div>
        </div>
    );
};

const FooterSocial = () => {
    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com', icon: 'facebook-f' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { name: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram' },
        { name: 'YouTube', url: 'https://www.youtube.com', icon: 'youtube' },
    ];

    return (
        <div className="footer__social">
            <ul className="social__shear d-flex">
                {socialLinks.map((link) => (
                    <li key={link.name} className="social__shear--list">
                        <a className="social__shear--list__icon" target="_blank" href={link.url} rel="noreferrer">
                            <i className={`fa fa-${link.icon}`}></i>
                            <span className="visually-hidden">{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;
