import Breadcrumb from '../Common/Breadcrumb'
import { Col, Container, Row } from 'reactstrap';


const AboutUs = () => {
    document.title='About Us | Study Abroad Education Consulting'
    return (
        <>
            <Breadcrumb title="About Us" />
            <section className="about-section-three pt-120 pb-120">
                <Container>
                    <Row className=" g-5 g-xxl-0">
                        <Col xl={6} className=" image-column">
                            <div className="inner-column">
                                <figure className="image " data-aos="fade-up">
                                    <img src="https://bdexpertcon.com/wp-content/uploads/2024/04/Best-Education-Consultancy-Firm.jpg" alt="Image" />
                                </figure>
                            </div>
                        </Col>
                        <Col xl={6} className=" content-column">
                            <div className="inner-column">
                                <div className="about-block-three">
                                    <div className="sec-title">
                                        <h6 className="sub-title" data-aos="fade-down" data-aos-delay="00ms" data-aos-duration="1500ms"  >      ABOUT US</h6>
                                    </div>
                                </div>
                                <p className="text mt-30 " data-aos="fade-down" data-aos-delay="200ms" data-aos-duration="1500ms" >
                                    we believe education opens doors to endless opportunities. Our mission is to help students achieve their dream of studying in Australia, one of the world’s most sought-after education destinations.

                                    With years of experience in education consulting, we provide end-to-end guidance—from choosing the right university and course to handling applications, scholarships, and visa processes. Our team of expert counselors ensures that every student receives personalized advice tailored to their career goals and financial plans.
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section
                className="growth-section mb-5"
                style={{ backgroundImage: "url(https://w0.peakpx.com/wallpaper/538/379/HD-wallpaper-white-dots-shape-background-white-background.jpg" }}
            >
                <div className="rgba_wrapper pt-80 pb-100 ">
                    <div className="container">
                        <div className="sec-title center pb-50 mb-50">
                            <h6
                                className="sub-title " data-aos="fade-up"
                                data-aos-delay="00ms"
                                data-aos-duration="1500ms"
                            >
                                Mission & Vision
                            </h6>

                        </div>
                        <Row>
                            <Col md={6}  data-aos="fade-up">
                                <h2 className="title text-white wow splt-txt" data-splitting="">
                                    Mission
                                </h2>

                                <div className="description mission_visiontxt">
                                    <p className='text'>
                                        Our mission is to simplify the journey of studying abroad by providing students with expert counseling, transparent guidance, and end-to-end support. From choosing the right course and university to navigating visa processes and cultural adjustments, we aim to make international education accessible, affordable, and stress-free for every student. With a commitment to integrity and professionalism, we strive to empower learners to achieve their academic goals and build successful global careers.</p>
                                </div>
                            </Col>
                            <Col md={6}  data-aos="fade-down">
                                <h2 className="title text-white wow splt-txt" data-splitting="">
                                    Vision
                                </h2>
                                <div className="description mission_visiontxt">
                                    <p className='text'>
                                        Our vision is to create a future where every student has the opportunity to pursue quality education beyond borders. We aspire to become a trusted leader in global education consulting, recognized for building pathways that connect talent with international opportunities. By fostering confidence, cultural awareness, and career readiness, we envision shaping a generation of students who contribute positively to the world through knowledge, innovation, and global collaboration.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs
