import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
    const testimonialData = [
        {
            "name": "Amit Sharma",
            "description": "The guidance I received throughout my study abroad journey was exceptional. From understanding my interests to helping me choose the right country and course, the team was with me at every step. They handled my university applications, prepared me for interviews, and even ensured I had all the documents ready for my visa. Without their dedicated support, the entire process would have felt overwhelming."
        },
        {
            "name": "Priya Verma",
            "description": "Studying abroad had always been a dream, but I had no idea where to start. The consultants made everything clear and simple, providing me with step-by-step guidance. They not only helped me select the best universities that matched my profile but also gave me insights on scholarships and funding opportunities. Today, I am pursuing my master’s degree in the UK and I couldn’t have achieved this without their support."
        },
        {
            "name": "Rahul Mehta",
            "description": "What impressed me the most was their personalized approach. They took time to understand my academic background and career aspirations before suggesting universities. The counseling sessions boosted my confidence and gave me a clear roadmap. From preparing my Statement of Purpose to arranging mock interviews, they ensured I was fully prepared. I am grateful for their constant encouragement and professionalism."
        },
        {
            "name": "Sneha Kapoor",
            "description": "The entire team was extremely professional and approachable. They answered all my queries with patience and clarity, no matter how small they were. I really appreciated how they went beyond just paperwork – they also guided me on adjusting to a new country and culture. Thanks to their help, I settled into my university abroad smoothly and started my academic journey without stress."
        },
        {
            "name": "Karan Gupta",
            "description": "The expert advice and support I received made a huge difference in my journey. From the very beginning, they guided me like mentors, making sure I avoided common mistakes during applications. They also stayed in touch after my admission was confirmed, offering pre-departure counseling that made my transition easier. Today, I am pursuing higher studies in Canada and I credit much of my success to their dedicated assistance."
        }
    ]

    return (
        <>

            <section className="testimonial-section-three">
                <div className="sec-wrp">
                    <div className="sec-shape">
                        <img
                            className="animation__rotate"
                            src="images/shape/dual-circle420.png"
                            alt="Shape"
                        />
                    </div>
                    <div className="container">
                        <div className="outer-box">
                            <div className="row g-5">
                                <div className="col-xl-7 order-2 order-xl-1">
                                    <div className="sec-title mb-30">
                                        <h6 className="sub-title">Testimonial</h6>
                                        <div className="flex-content">
                                            <h2 className="title text-white">
                                               Our Client    <span className="font-weight-300">Reviews </span>
                                            </h2>
                                            <div className="btn-wrp">
                                                <button className="testimonial-prev-three">
                                                    <i className="fa-regular fa-angle-left" />
                                                </button>
                                                <button className="testimonial-next-three">
                                                    <i className="fa-regular fa-angle-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <Swiper
                                        modules={[Navigation]}
                                        navigation={{
                                            prevEl: ".testimonial-prev-three",
                                            nextEl: ".testimonial-next-three"
                                        }}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        className="testimonial-slider-three"
                                    >
                                        {testimonialData.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="testimonial-block-three">
                                                    <p className="text">{item.description}</p>
                                                    <div className="info">
                                                        <h4 className="title">
                                                            {item.name}<span></span>
                                                        </h4>
                                                        <img src="images/icon/testimonial-three-icon.png" alt="Icon" />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Right Column (Image) */}
                                <div className="col-xl-5 order-1 order-xl-2 image-column">
                                    <div className="inner-column">
                                        <figure className="image">
                                            <img
                                                src="images/testimonial/testimonial-three-image.png"
                                                alt="Testimonial"
                                            />
                                            <div className="icon">
                                                {/* your SVG */}
                                                <svg
                                                    width={33}
                                                    height={25}
                                                    viewBox="0 0 33 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M29.1965 1.98168C30.9987 3.96415 32.0801 6.12685 32.0801 9.73134C32.0801 16.0392 27.5745 21.6262 21.2666 24.5098L19.6446 22.1668C25.592 18.9228 26.8536 14.7776 27.214 12.0743C26.3129 12.6149 25.0513 12.7952 23.7897 12.6149C20.5457 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8248 1.80146C21.0864 0.539885 22.5282 -0.000789642 24.3304 -0.000789642C26.3129 -0.000789642 28.1151 0.900331 29.1965 1.98168ZM11.174 1.98168C12.9763 3.96415 14.0576 6.12685 14.0576 9.73134C14.0576 16.0392 9.55198 21.6262 3.24412 24.5098L1.6221 22.1668C7.56951 18.9228 8.83109 14.7776 9.19153 12.0743C8.29041 12.6149 7.02884 12.7952 5.76727 12.6149C2.52322 12.2545 7.62939e-05 9.73134 7.62939e-05 6.30707C7.62939e-05 4.68505 0.720974 3.06303 1.80232 1.80146C2.88367 0.539885 4.50569 -0.000789642 6.30794 -0.000789642C8.29041 -0.000789642 10.0927 0.900331 11.174 1.98168Z"
                                                        fill="#051B05"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="title">“Trusted Support”</h3>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Testimonial
