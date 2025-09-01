
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <>

            <header className="main-header header-style-three">
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
                                <li>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">
                                        About Us
                                    </NavLink>
                                </li>

                                <li className="dropdown">
                                    <NavLink to="/">
                                        Student Visa &nbsp;<i className="fa-regular fa-angle-down" />
                                    </NavLink>
                                    <ul>
                                        <li><Link to="/student_subsequent_dependent_visa_500">Student Subsequent Entrant Visa Student Dependent Visa (Subclass 500)</Link></li>
                                        <li><Link to="/student_visa_extension">Student visa extension</Link></li>
                                        <li><Link to="/student_visa_journey">Student visa Journey</Link></li>
                                        <li><Link to="/student_guardian_visa">Student Guardian Visa Subclass 590</Link></li>
                                        <li><Link to="/training_visa_407">Training Visa (Subclass 407)</Link></li>
                                        <li><Link to="/student_extension">Student Extension</Link></li>
                                        <li><Link to="/student_visa_information">Student Subsequent visa to Student visa</Link></li>
                                        <li><Link to="/student_subsequent_visa">Student Visa Information</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <NavLink to="/">
                                        Student Services &nbsp;<i className="fa-regular fa-angle-down" />
                                    </NavLink>
                                    <ul>
                                        <li><Link to="/">Professional Year</Link></li>
                                        <li><Link to="/">Admission and Course Change</Link></li>
                                        <li><Link to="/">Temporary Graduate Visa(485)</Link></li>
                                        <li><Link to="/">Health Insurance</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <NavLink to="/">
                                        Point Calculator &nbsp;<i className="fa-regular fa-angle-down" />
                                    </NavLink>
                                    <ul>
                                        <li><Link to="https://immi.homeaffairs.gov.au/help-support/tools/points-calculator" target="_blank">Australia</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <NavLink to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Header
