import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Slider = () => {
    return (
        <>
            <section className="banner-section-three">
                <Container>
                    <Row className=" g-0 align-items-end">
                        <Col xl={8} className=" content-column">
                            <div className="inner-column">
                                <h1 className="title wow splt-txt" data-splitting="">
                                    <span className="font-weight-400 d-block">Transform your future with  </span>
                                   expert guidance, hassle-free admissions, and personalized <br/> study abroad support
                                </h1>
                                <p className="text wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" >
                                    Unlock world-class education and endless career opportunities.
                                </p>
                                <div className="btn-wrp">
                                    <Link className="btn-one-rounded wow fadeInLeft" data-wow-delay="200ms"
                                        data-wow-duration="1500ms" to="/"  >
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
