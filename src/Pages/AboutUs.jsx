import React from 'react'
import Breadcrumb from '../Common/Breadcrumb'

const AboutUs = () => {
    return (
        <>
            <Breadcrumb title="About Us" />
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="growth-section pt-120 pb-120 d-none" 
                style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/white-abstract-shapes-background_52683-55977.jpg"}}
            >
                <div className="container">
                    <div className="sec-title pb-50 mb-50">
                        <h6
                            className="sub-title wow fadeInUp"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            Growth Rate
                        </h6>
                        <div className="flex-content">
                            <h2 className="title text-white wow splt-txt" data-splitting="">
                                Building Connections for grow <br /> Limitless Opportunities.
                            </h2>
                            <a
                                className="btn-one-light border-0 rounded-0 wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                href="page-about.html"
                            >
                                Discover More
                            </a>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div
                            className="col-xl-4 wow fadeInLeft"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="growth-block">
                                {/* pie-graph */}
                                <div className="pie-graph">
                                    <div className="graph-outer">
                                        <input
                                            type="text"
                                            className="dial"
                                            data-fgcolor="#C6D936"
                                            data-bgcolor="#fff"
                                            data-width={120}
                                            data-height={120}
                                            data-linecap="normal"
                                            defaultValue={90}
                                        />
                                        <div className="inner-text count-box">
                                            <span className="count-text" data-stop={90} data-speed={2000} />
                                            %
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">Scalable Solutions</h4>
                                    <p className="text">
                                        End to end fiber optic cable nnectivity for stable
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="growth-block">
                                {/* pie-graph */}
                                <div className="pie-graph">
                                    <div className="graph-outer">
                                        <input
                                            type="text"
                                            className="dial"
                                            data-fgcolor="#C6D936"
                                            data-bgcolor="#fff"
                                            data-width={120}
                                            data-height={120}
                                            data-linecap="normal"
                                            defaultValue={95}
                                        />
                                        <div className="inner-text count-box">
                                            <span className="count-text" data-stop={95} data-speed={2000} />
                                            %
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">Automation Features</h4>
                                    <p className="text">
                                        End to end fiber optic cable nnectivity for stable
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 wow fadeInLeft"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="growth-block">
                                {/* pie-graph */}
                                <div className="pie-graph">
                                    <div className="graph-outer">
                                        <input
                                            type="text"
                                            className="dial"
                                            data-fgcolor="#C6D936"
                                            data-bgcolor="#fff"
                                            data-width={120}
                                            data-height={120}
                                            data-linecap="normal"
                                            defaultValue={75}
                                        />
                                        <div className="inner-text count-box">
                                            <span className="count-text" data-stop={75} data-speed={2000} />
                                            %
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">24/7 Support</h4>
                                    <p className="text">
                                        End to end fiber optic cable nnectivity for stable
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs
