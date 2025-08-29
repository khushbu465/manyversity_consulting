import React from 'react'
import { Link } from 'react-router-dom'

const Consulting = () => {
    return (
        <>
            <section
                className="consult-section pt-120 pb-120"
                data-background="images/bg/consult-bg.jpg"
            >
                <div className="sec-shape">
                    <img
                        className="animation__rotate"
                        src="images/shape/consult-shape.png"
                        alt="Image"
                    />
                </div>
                <div className="container">
                    <div className="sec-title center">
                        <h6
                            className="sub-title wow fadeInUp"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                          Education  Consulting
                        </h6>
                        <h2 className="title text-white wow splt-" data-splitting="">
                           Empowering Students with Global Education Opportunities
                        </h2>
                        <p className='text'>Your trusted partner for admissions, visas, and career success.</p>
                        <div className="btn-wrp mt-30">
                            <Link
                                className="btn-two-rounded wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                to="/"
                            >Explore Services <i className="fa-regular fa-arrow-up-right" />
                            </Link>
                            <Link
                                className="btn-one-rounded wow fadeInUp"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                                to="/"
                            >
                                Book Consultation <i className="fa-regular fa-arrow-up-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Consulting
