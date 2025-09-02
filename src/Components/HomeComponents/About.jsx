
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
     const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behaviour:'smooth'
        })
    }
    return (
        <>
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
                                <div className="info mt-50 " data-aos="fade-down" data-aos-delay="400ms" data-aos-duration="1500ms">
                                    <Link className="btn-one-rounded" to="/about" onClick={scrolltoTop}>
                                      Read  more  <i className="fa-regular fa-arrow-up-right" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About
