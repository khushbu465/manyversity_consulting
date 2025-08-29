
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
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                        About Us
                                    </NavLink>
                                </li>

                                <li className="dropdown">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Student Visa &nbsp;<i className="fa-regular fa-angle-down" />
                                    </NavLink>
                                    <ul>
                                        <li><Link to="/">Student Subsequent Entrant Visa Student Dependent Visa (Subclass 500)</Link></li>
                                        <li><Link to="/">Student visa extension</Link></li>
                                        <li><Link to="/">Student visa Journey</Link></li>
                                        <li><Link to="/">Student Guardian Visa Subclass 590</Link></li>
                                        <li><Link to="/">Student Extension</Link></li>
                                        <li><Link to="/">Student Subsequent visa to Student visa</Link></li>
                                        <li><Link to="/">Student Visa Information</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
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
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Point Calculator &nbsp;<i className="fa-regular fa-angle-down" />
                                    </NavLink>
                                    <ul>
                                        <li><Link to="/">Australia</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
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
