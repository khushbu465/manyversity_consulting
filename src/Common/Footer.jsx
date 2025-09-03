import { Link } from "react-router-dom"

const Footer = () => {
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behaviour:'smooth'
        })
    }
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
                                            <img src="/logo.png" alt="Logo" className="footerLogo"/>
                                        </Link>
                                    </div>
                                    <div className="widget-content">
                                        <p className="text">
                                            Trusted education consulting company helping students achieve study abroad
                                            dreams with expert guidance in admissions, visas, and pre-departure support
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row g-4 g-xl-0">
                                    <div className="col-sm-6 col-xl-4 footer-column">
                                        <div className="footer-widget links-widget">
                                            <h4 className="widget-title">Quick Link</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <Link to="/" onClick={scrolltoTop}>Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about" onClick={scrolltoTop}>About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact" onClick={scrolltoTop}>Contact</Link>
                                                    </li>
                                                       <li>
                                                        <Link to="/training_visa_407" onClick={scrolltoTop}>Training Visa</Link>
                                                    </li>
                                                 
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-4 footer-column">
                                        <div className="footer-widget links-widget">
                                            <h4 className="widget-title">Services</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <Link to="/student_visa_extension" onClick={scrolltoTop}>Student visa extension</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admission_course_change" onClick={scrolltoTop}>Admission and Course Change</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/student_visa_information" onClick={scrolltoTop}>Student Visa Information</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/student_extension" onClick={scrolltoTop}>Student Extension</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-xl-4 footer-column">
                                        <div className="footer-widget links-widget contact-widget">
                                            <h4 className="widget-title">Contact</h4>
                                            <div className="widget-content">
                                                <ul className="user-links">
                                                    <li>
                                                        <i className="fa-light fa-location-dot" />
                                                        <Link to="https://maps.app.goo.gl/Z22NvmRGKNNMCdJw8" target="_blank">
                                                            C-25, Aliganj, Lucknow - 226024, Uttar Pradesh, India.
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa-light fa-envelope" />
                                                        <Link to="mailto:info@manyversity.com">
                                                            <span
                                                                className="__cf_email__"
                                                                data-cfemail="aedddbdedec1dcdaeec9c3cfc7c280cdc1c3"
                                                            >
                                                                info@manyversity.com
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa-light fa-phone-flip" />
                                                        <a href="tel:+91-8004008123">+91-800 400 8123</a>
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
                            Copyright © 2025 | All Rights Reserved<Link to="/"> Manyversity </Link>
                        </p>
                        <ul className="footer-nav">
                            <li>
                                <Link to="https://wa.link/wfgdqy" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/people/ManyVersity/100083388630374/#" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/manyversity/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                            </li>

                        </ul>
                        <button className="goTop-btn" onClick={scrolltoTop}>
                            <i className="fa-solid fa-angles-up" />
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
                        className="box1 "
                    
                    />
                    <div
                        className="box2"
                        
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer
