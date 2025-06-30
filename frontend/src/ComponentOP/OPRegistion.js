import React from 'react'

export const OPRegistion = ({ handleClose }) => {

    return (
        <>
            <div className="newsletter__popup newsletter__show" data-animation="slideInUp">
                <div className="newsletter__popup--inner">
                    {/* Close Button */}
                    <button
                        className="newsletter__popup--close__btn"
                        aria-label="search close button"
                        onClick={handleClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M368 368L144 144M368 144L144 368"
                            />
                        </svg>
                    </button>

                    {/* Content Box */}
                    <div className="box newsletter__popup--box d-flex align-items-center">
                        {/* Thumbnail */}
                        <div className="newsletter__popup--thumbnail">
                            <img
                                className="newsletter__popup--thumbnail__img display-block"
                                src="assets/img/banner/newsletter-popup-thumb.webp"
                                alt="newsletter-popup-thumb"
                            />
                        </div>

                        {/* Right Side Content */}
                        <div className="newsletter__popup--box__right">
                            <h2 className="newsletter__popup--title">Join Our Newsletter</h2>
                            <div className="newsletter__popup--content">
                                <label className="newsletter__popup--content--desc">
                                    Enter your email address to subscribe to notifications of our new posts & features by email.
                                </label>

                                {/* Subscription Form */}
                                <div className="newsletter__popup--subscribe" id="frm_subscribe">
                                    <form className="newsletter__popup--subscribe__form">
                                        <input
                                            className="newsletter__popup--subscribe__input"
                                            type="text"
                                            placeholder="Enter your email address here..."
                                        />
                                        <button className="newsletter__popup--subscribe__btn" type="submit">
                                            Subscribe
                                        </button>
                                    </form>

                                    {/* Footer */}
                                    <div className="newsletter__popup--footer">
                                        <input type="checkbox" id="newsletter__dont--show" />
                                        <label
                                            className="newsletter__popup--dontshow__again--text"
                                            htmlFor="newsletter__dont--show"
                                        >
                                            Don't show this popup again
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
