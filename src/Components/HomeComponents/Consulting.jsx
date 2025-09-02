
import { Link } from 'react-router-dom'

const Consulting = () => {
     const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behaviour:'smooth'
        })
    }
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
                            className="sub-title" data-aos="fade-up"
                            data-aos-delay="00ms"
                            data-aos-duration="1500ms"
                        >
                            Education  Consulting
                        </h6>
                        <h2 className="title text-white wow splt-" data-splitting="">
                            Empowering Students with Global Education Opportunities
                        </h2>
                        <p className='text'>Your trusted partner for admissions, visas, and career success.</p>
                        <div className="btn-wrp mt-30">
                            <Link onClick={scrolltoTop}
                                className="btn-two-rounded" data-aos="fade-up"
                                data-aos-delay="200ms"
                                data-aos-duration="1500ms"
                                to="/professional_year"
                            >Explore Services <i className="fa-regular fa-arrow-up-right" />
                            </Link>
                            <Link
                                className="btn-one-rounded" data-aos="fade-up"
                                data-aos-delay="400ms"
                                data-aos-duration="1500ms"
                                to="/contact" onClick={scrolltoTop}
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
