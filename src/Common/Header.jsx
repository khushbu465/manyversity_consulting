
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(null);
    const toggleMenu = () => setMobileMenu(!mobileMenu);
    const toggleSubMenu = (id) => {
        setSubMenuOpen(() => subMenuOpen === id ? null : id)
    };
    const onClose = () => {
        setMobileMenu(false)
    }
    return (
        <>


            <header className="main-header header-style-three ">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="/logo.png" alt="Logo" title="Manyversity" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li> <NavLink to="/">     Home  </NavLink> </li>
                                <li>  <NavLink to="/about">      About Us  </NavLink>  </li>
                                <li className="dropdown">
                                    <NavLink to="/"> Student Visa &nbsp;<i className="fa-regular fa-angle-down" />     </NavLink>
                                    <ul>
                                        <li><Link to="/student_subsequent_dependent_visa_500">Student Subsequent Entrant Visa Student Dependent Visa (Subclass 500)</Link></li>
                                        <li><Link to="/student_visa_extension">Student visa extension</Link></li>
                                        <li><Link to="/student_visa_journey">Student visa Journey</Link></li>
                                        <li><Link to="/student_guardian_visa">Student Guardian Visa Subclass 590</Link></li>
                                        <li><Link to="/training_visa_407">Training Visa (Subclass 407)</Link></li>
                                        <li><Link to="/student_extension">Student Extension</Link></li>
                                        <li><Link to="/student_subsequent_visa">Student Subsequent visa to Student visa</Link></li>
                                        <li><Link to="/student_visa_information">Student Visa Information</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <NavLink to="/">  Student Services &nbsp;<i className="fa-regular fa-angle-down" /> </NavLink>
                                    <ul>
                                        <li><Link to="/professional_year">Professional Year</Link></li>
                                        <li><Link to="/admission_course_change">Admission and Course Change</Link></li>
                                        <li><Link to="/temporary_graduate_visa">Temporary Graduate Visa(485)</Link></li>
                                        <li><Link to="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/adequate-health-insurance" target="_blank">Health Insurance</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <NavLink to="/">  Point Calculator &nbsp;<i className="fa-regular fa-angle-down" />  </NavLink>
                                    <ul>
                                        <li><Link to="https://immi.homeaffairs.gov.au/help-support/tools/points-calculator" target="_blank">Australia</Link></li>
                                    </ul>
                                </li>
                                <li>  <NavLink to="/contact">   Contact </NavLink>  </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="outer-box">
                        <div className="mobile-nav-toggler d-block d-lg-none text-white" onClick={toggleMenu}>
                            <i className="fa fa-bars" />
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="auto-container">
                    {mobileMenu ?
                        <div className="mobile-menu">
                            <div className="menu-backdrop" />
                            <nav className="menu-box">
                                <div className="upper-box">
                                    <div className="nav-logo">
                                        <Link to="/" onClick={onClose}>
                                            <img src="/logo.png" alt="Logo" title="Manyversity" />
                                        </Link>
                                    </div>
                                    <div className="close-btn">
                                        <i className="icon fa fa-times" onClick={toggleMenu} />
                                    </div>
                                </div>
                                <ul className="navigation clearfix d-block d-lg-none">
                                    <ul className="navigation">
                                        <li> <NavLink to="/" onClick={onClose}>     Home  </NavLink> </li>
                                        <li>  <NavLink to="/about" onClick={onClose}>      About Us  </NavLink>  </li>
                                        <li className="dropdown">
                                            <NavLink to={''} onClick={() => toggleSubMenu(1)}> Student Visa &nbsp;<i className="fa-regular fa-angle-down" />     </NavLink>
                                            {subMenuOpen === 1 ?
                                                <ul className="submenu">
                                                    <li><Link onClick={onClose} to="/student_subsequent_dependent_visa_500">Student Subsequent Entrant Visa Student Dependent Visa (Subclass 500)</Link></li>
                                                    <li><Link onClick={onClose} to="/student_visa_extension">Student visa extension</Link></li>
                                                    <li><Link onClick={onClose} to="/student_visa_journey">Student visa Journey</Link></li>
                                                    <li><Link onClick={onClose} to="/student_guardian_visa">Student Guardian Visa Subclass 590</Link></li>
                                                    <li><Link onClick={onClose} to="/training_visa_407">Training Visa (Subclass 407)</Link></li>
                                                    <li><Link onClick={onClose} to="/student_extension">Student Extension</Link></li>
                                                    <li><Link onClick={onClose} to="/student_subsequent_visa">Student Subsequent visa to Student visa</Link></li>
                                                    <li><Link onClick={onClose} to="/student_visa_information">Student Visa Information</Link></li>
                                                </ul>
                                                : ''}
                                        </li>
                                        <li className="dropdown">
                                            <NavLink to={''} onClick={() => toggleSubMenu(2)}>  Student Services &nbsp;<i className="fa-regular fa-angle-down" /> </NavLink>
                                            {subMenuOpen === 2 ?
                                                <ul className="submenu">
                                                    <li><Link onClick={onClose} to="/professional_year">Professional Year</Link></li>
                                                    <li><Link onClick={onClose} to="/admission_course_change">Admission and Course Change</Link></li>
                                                    <li><Link onClick={onClose} to="/temporary_graduate_visa">Temporary Graduate Visa(485)</Link></li>
                                                    <li><Link onClick={onClose} to="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/adequate-health-insurance" target="_blank">Health Insurance</Link></li>
                                                </ul>
                                                : ''}
                                        </li>
                                        <li className="dropdown">
                                            <NavLink to={''} onClick={() => toggleSubMenu(3)}>  Point Calculator &nbsp;<i className="fa-regular fa-angle-down" />  </NavLink>
                                            {subMenuOpen === 3 ?
                                                <ul className="submenu">
                                                    <li><Link onClick={onClose} to="https://immi.homeaffairs.gov.au/help-support/tools/points-calculator" target="_blank">Australia</Link></li>
                                                </ul>
                                                : ''}
                                        </li>
                                        <li>  <NavLink to="/contact">   Contact </NavLink>  </li>
                                    </ul>
                                </ul>
                                <ul className="social-links">
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
                            </nav>
                        </div>
                        : ''}
                </div>
            </header>
        </>
    )
}

export default Header
