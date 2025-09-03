import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import SplitText from './SplitText';

const Slider = () => {
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        })
    }

    return (
        <>
            <section className="banner-section-three">
                <Container>
                    <Row className=" g-0 align-items-end">
                        <Col xl={8} className=" content-column">
                            <div className="inner-column">
                                <div className='top_content'>
                                    <img src="/images/aeroplane.png" alt="aeroplane img" style={{ height: '100px' }} />
                                </div>
                                <h1 className="title mb-2" data-aos="fade-down">
                                    <SplitText
                                        text="Education Abroad"
                                        className=" font-semibold text-center"
                                        delay={100}
                                        duration={0.6}
                                        ease="power3.out"
                                        splitType="chars"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        textAlign="center"
                                    />
                                </h1>
                                <h4 className='text-light mb-2 font-weight-300'>  Expert Education Consulting</h4>
                                <p className="text " data-aos="fade-right">
                                    Fulfill your Study Abroad dream with expert guidance — from choosing the
                                    right university and course to handling applications, visa support, and pre-departure counseling.
                                </p>
                                <div className="btn-wrp pb-90">
                                    <Link className="btn-one-rounded " data-aos="fade-down" data-aos-duration="2000" to="/contact" onClick={scrolltoTop} >
                                        Book a Consultation <i className="fa-regular fa-angle-right" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="bg-image tm-gsap-img-parallax slider_img_here">
                        <img src="https://media.licdn.com/dms/image/v2/C4E1BAQF0vXTujEtQvQ/company-background_10000/company-background_10000/0/1584230326349/bangalore_education_consultancy_cover?e=2147483647&v=beta&t=HoSpL_Dp7ljMnaaMKk0qmpqyLDqQWtTrpSr4-MTDl_I" alt="Image" />
                    </div>
                    <div className="arry">
                        <img
                            className="animation__arryLeftRight"
                            src="images/shape/banner-arry.png"
                            alt="Image"
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Slider
