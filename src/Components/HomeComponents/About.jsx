
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className="about-section-three pt-120 pb-120">
                <div className="container">
                    <div className="row g-5 g-xxl-0">
                        <div className="col-xl-6 image-column">
                            <div className="inner-column">
                                <figure className="image">
                                    <img src="https://bdexpertcon.com/wp-content/uploads/2024/04/Best-Education-Consultancy-Firm.jpg" alt="Image" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-xl-6 content-column">
                            <div className="inner-column">

                                <div className="about-block-three">
                                    <div className="sec-title">
                                        <h6
                                            className="sub-title wow fadeInUp"
                                            data-wow-delay="00ms"
                                            data-wow-duration="1500ms"
                                        >
                                            ABOUT US
                                        </h6>
                                    </div>
                                </div>
                                <p
                                    className="text mt-30 wow fadeInUp"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    we believe education opens doors to endless opportunities. Our mission is to help students achieve their dream of studying in Australia, one of the world’s most sought-after education destinations.

                                    With years of experience in education consulting, we provide end-to-end guidance—from choosing the right university and course to handling applications, scholarships, and visa processes. Our team of expert counselors ensures that every student receives personalized advice tailored to their career goals and financial plans.
                                </p>
                                <div
                                    className="info mt-50 wow fadeInUp"
                                    data-wow-delay="400ms"
                                    data-wow-duration="1500ms"
                                >
                                    <Link className="btn-one-rounded" to="/">
                                        more about <i className="fa-regular fa-arrow-up-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
