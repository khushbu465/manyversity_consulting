import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

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
                                    <h4 className='text-light'>Education Abroad   </h4>
                                    <img src="/images/aeroplane.png" alt="aeroplane img" style={{ height: '100px' }} />
                                </div>
                                <h1 className="title " data-aos="fade-down" >
                                    <span className="font-weight-400 d-block">Expert Education Consulting  </span>
                                </h1>
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
                    <div className="bg-image tm-gsap-img-parallax">
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
