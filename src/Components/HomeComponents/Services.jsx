import { Link } from 'react-router-dom'
import Consulting from './Consulting';
import Client from './Client';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: "images/icon/Student Subsequent Entrant Visa.png",
            wicon: "images/icon/white/Student Subsequent Entrant Visa.png",
            alt: "Student Visa",
            title: "Subclass 500",
            bottomtxt: " Student (Subsequent Entrant) ",
            text: "Join your family member studying in Australia with a dependent student visa.",
            link: "/student_subsequent_dependent_visa_500",
            delay: "00ms"
        },
        {
            id: 2,
            icon: "images/icon/Student Guardian Visa.png",
            wicon: "images/icon/white/Student Guardian Visa.png",
            alt: "Guardian Visa",
            title: "Subclass 590",
            bottomtxt: "Student Guardian ",
            text: "Parents/guardians can accompany students with this visa option.",
            link: "/student_guardian_visa",
            delay: "400ms"
        },
        {
            id: 3,
            icon: "images/icon/Temporary Graduate Visa.png",
            wicon: "images/icon/white/Temporary Graduate Visa.png",
            alt: "Temporary Graduate Visa",
            title: "Subclass 485",
            bottomtxt: "Temporary Graduate",
            text: "Stay and work in Australia after studies with the Subclass 485 visa.",
            link: "/temporary_graduate_visa",
            delay: "800ms"
        },
        {
            id: 4,
            icon: "images/icon/Student Visa Extension.png",
            wicon: "images/icon/white/Student Visa Extension.png",
            alt: "Student Visa Extension",
            title: "Student Visa Extension",
            text: "Extend your student visa seamlessly to continue your studies in Australia.",
            link: "/student_visa_extension",
            delay: "200ms"
        },
        {
            id: 5,
            icon: "images/icon/Professional Year.png",
            wicon: "images/icon/white/Professional Year.png",
            alt: "Professional Year",
            title: "Professional Year",
            text: "Boost your career prospects with a professional year program.",
            link: "/professional_year",
            delay: "600ms"
        },
        {
            id: 6,
            icon: "images/icon/Health Insurance.png",
            wicon: "images/icon/white/Health Insurance.png",
            alt: "Health Insurance",
            title: "Health Insurance",
            text: "Secure your health with international student health insurance plans.",
            link: "/https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/adequate-health-insurance",
            delay: "1000ms"
        }
    ];
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        })
    }
    return (
        <>
            <section className="service-section-two pt-120 pb-120">
                <div className="container">
                    <div className="sec-title mb-50">
                        <h6
                            className="sub-title " data-aos="zoom-in-down"
                            data-aos-delay="00ms"
                            data-aos-duration="1500ms"
                        >
                            Services
                        </h6>
                        <div className="flex-content">
                            <h2 className="title" >
                                Your One-Stop Solution for <br /> Study Abroad  &amp; Visa Services
                            </h2>
                        </div>
                    </div>

                    <div className="outer-box">
                        <div className="row g-0">
                            {servicesData.map((service) => (
                                <div
                                    key={service.id}
                                    className="col-md-6 col-xl-4 rounded-3 p-2" data-aos="zoom-in"
                                    data-aos-delay={service.delay}
                                    data-aos-duration="1500ms"
                                >
                                    <div className="service-block-two">
                                        <div className="inner-box" >
                                            <div className="icon">
                                                <img src={service.icon} alt={service.alt} className='hideIcons' />
                                                <img src={service.wicon} alt={service.alt} className='hoverIcon' />
                                            </div>
                                            <div className="content-box">
                                                <h4 className="title">{service.title} <br />{service.bottomtxt}</h4>
                                                <p className="text">{service.text}</p>
                                                <Link onClick={scrolltoTop} className="btn-two-rounded" to={service.link}>
                                                    learn more
                                                </Link>
                                            </div>
                                            <div className="block-bg">
                                                <img
                                                    src="images/service-block-shape.png"
                                                    alt="Shape"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Consulting />
            <br />
            <br />
            {/* <Client /> */}

        </>
    )
}

export default Services
