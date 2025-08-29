import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="main-footer footer-style-three pt-10 mt-60">
                <div className="container">
                    <div className="widgets-section ">
                        <div className="row g-5 g-xl-0">
                            <div className="col-lg-4 footer-column">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="/logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="widget-content">
                                        <p className="text">
                                            At vero eos et accusamus iusto odio dignissimos ducimus
                                            blanditiise
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row g-4 g-xl-0">
                                    <div className="col-sm-6 col-xl-3 footer-column">
                                        <div className="footer-widget links-widget">
                                            <h4 className="widget-title">Resource</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <a href="#0">Product</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Benefits</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3 footer-column">
                                        <div className="footer-widget links-widget">
                                            <h4 className="widget-title">Quick Link</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <a href="#0">Features</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Pricing Plan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Best Program</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Press Kit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3 footer-column">
                                        <div className="footer-widget links-widget">
                                            <h4 className="widget-title">Company</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <a href="#0">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Team Member</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Reviews</a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">Latest News</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3 footer-column">
                                        <div className="footer-widget links-widget contact-widget">
                                            <h4 className="widget-title">Contact</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <i className="fa-light fa-location-dot" />
                                                        <a href="#0">
                                                            55 Main Street, 2nd block Melbourne, Australia
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="fa-light fa-envelope" />
                                                        <a href="/cdn-cgi/l/email-protection#1b686e6b6b74696f5b7c767a727735787476">
                                                            <span
                                                                className="__cf_email__"
                                                                data-cfemail="aedddbdedec1dcdaeec9c3cfc7c280cdc1c3"
                                                            >
                                                                [email&nbsp;protected]
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="fa-light fa-phone-flip" />
                                                        <a href="tel:+0001234455">+000 (123) 44 55</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright-text">
                            Copyright © 2025 | All Rights Reserved<a href="#0"> Manyversity </a>
                        </p>
                        <ul className="footer-nav">
                            <li>
                                <a href="#0">Faqs</a>
                            </li>
                            <li>
                                <a href="#0">Setting</a>
                            </li>
                            <li>
                                <a href="#0">Privacy</a>
                            </li>
                            <li>
                                <a href="#0">Contact</a>
                            </li>
                        </ul>
                        <button className="goTop-btn">
                            <i className="fa-solid fa-angles-up" />{" "}
                            <i className="fa-solid fa-angles-up" />
                        </button>
                    </div>
                </div>
                <div className="sec-shape">
                    <img
                        className="animation__rotateY"
                        src="images/shape/dual-circle420.png"
                        alt="Image"
                    />
                </div>
                <div className="box-shape">
                    <div
                        className="box1 wow slideInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    />
                    <div
                        className="box2 wow slideInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer
