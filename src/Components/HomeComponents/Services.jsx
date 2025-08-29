import React from 'react'
import { Link } from 'react-router-dom'
import Consulting from './Consulting';
import Client from './Client';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: "images/icon/student_v.png",
            alt: "Student Visa",
            title: "Student Visa Assistance",
            text: "Achieve your dream of studying abroad with our expert visa guidance. From documentation to approvals, we ensure a smooth and stress-free process.",
            link: "/",
            delay: "00ms"
        },
        {
            id: 2,
            icon: "images/icon/partner_visa.webp",
            alt: "Partner Visa",
            title: "Partner / Spouse Visa",
            text: "Stay connected with your loved ones while studying or working abroad. We specialize in partner and spouse visa applications with reliable support.",
            link: "/",
            delay: "200ms"
        },
        {
            id: 3,
            icon: "images/icon/business.png",
            alt: "Business Visa",
            title: "Business & Investor Visa",
            text: "Expand your horizons with global opportunities. We guide entrepreneurs and investors through the visa process to establish and grow businesses abroad.",
            link: "/",
            delay: "400ms"
        },
        {
            id: 4,
            icon: "images/icon/visa-refusal.png",
            alt: "Visa Refusal",
            title: "Visa Refusal & Appeals",
            text: "Has your visa been refused or canceled? Don’t worry! Our experts help with appeals and reapplications to maximize your chances of approval.",
            link: "/",
            delay: "600ms"
        },
        {
            id: 5,
            icon: "images/icon/university.png",
            alt: "Course Selection",
            title: "Course & University Selection",
            text: "Not sure which course or university is right for you? We provide tailored advice to match your academic goals, budget, and interests.",
            link: "/",
            delay: "800ms"
        },
        {
            id: 6,
            icon: "images/icon/pr-pathway.png",
            alt: "PR Pathway",
            title: "Permanent Residency Pathways",
            text: "Looking to settle abroad permanently? We guide you through PR pathways with eligibility checks, documentation, and full application support.",
            link: "/",
            delay: "1000ms"
        }
    ];

    return (
        <>

            <section className="service-section-two pt-120 pb-120">
                <div className="container">
                    <div className="sec-title mb-50">
                        <h6
                            className="sub-title wow fadeInUp"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            Services
                        </h6>
                        <div className="flex-content">
                            <h2 className="title wow splt-txt" data-splitting="">
                                Your One-Stop Solution for <br /> Study Abroad &  &amp; Visa Services.
                            </h2>
                            <Link
                                className="btn-one-rounded wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                to="/"
                            >
                                more Services <i className="fa-regular fa-angle-right" />
                            </Link>
                        </div>
                    </div>

                    <div className="outer-box">
                        <div className="row g-0">
                            {servicesData.map((service) => (
                                <div
                                    key={service.id}
                                    className="col-md-6 col-xl-4 wow fadeInUp"
                                    data-wow-delay={service.delay}
                                    data-wow-duration="1500ms"
                                >
                                    <div className="service-block-two">
                                        <div className="inner-box">
                                            <div className="icon">
                                                <img src={service.icon} alt={service.alt} />
                                            </div>
                                            <div className="content-box">
                                                <h4 className="title">{service.title}</h4>
                                                <p className="text">{service.text}</p>
                                                <a className="btn-two-rounded" href={service.link}>
                                                    learn more
                                                </a>
                                            </div>
                                            <div className="block-bg">
                                                <img
                                                    src="images/shape/service-block-shape.png"
                                                    alt="Shape"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Consulting />

            <section className="objective-section pt-120 pb-80 d-none">
                <div className="container">
                    <div className="sec-title mb-50">
                        <h6
                            className="sub-title wow fadeInUp"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            Obejctive
                        </h6>
                        <div className="flex-content">
                            <h2 className="title wow splt-txt" data-splitting="">
                                Strengthen your business <br /> for enduring success.
                            </h2>
                            <a
                                className="btn-one-rounded wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                href="page-contact.html"
                            >
                                Get started <i className="fa-regular fa-angle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-xl-6 wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="objective-block">
                                <h4 className="title mb-40">
                                    The Best IT &amp; Technology Agency to Accelerate Your Business
                                </h4>
                                <div className="outer-box">
                                    <div className="item">
                                        <div className="icon">
                                            <img src="images/icon/objective-icon1-dark.png" alt="Icon" />
                                        </div>
                                        <h5>Corporate</h5>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <img src="images/icon/objective-icon2-dark.png" alt="Icon" />
                                        </div>
                                        <h5>Business IT</h5>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <img src="images/icon/objective-icon3-dark.png" alt="Icon" />
                                        </div>
                                        <h5>Server Hosting</h5>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="icon">
                                        <svg
                                            width={29}
                                            height={28}
                                            viewBox="0 0 29 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_56_6119)">
                                                <path
                                                    d="M24.705 7.07526H18.1294V6.61539C18.1267 4.33064 16.2358 2.47926 13.9022 2.47656H4.97816C2.64463 2.47926 0.753729 4.33064 0.750977 6.61539V12.1338C0.753729 14.4186 2.64463 16.2699 4.97816 16.2726H5.44785V19.9516C5.44785 20.1375 5.56229 20.3053 5.73774 20.3764C5.91318 20.4476 6.11523 20.4081 6.24962 20.2767L10.3392 16.2726H11.5538V16.7325C11.5565 19.0173 13.4474 20.8686 15.781 20.8713H18.4046L23.4336 25.7952C23.568 25.9265 23.77 25.9661 23.9455 25.8949C24.1209 25.8237 24.2353 25.656 24.2353 25.47V20.8713H24.705C27.0386 20.8686 28.9295 19.0173 28.9322 16.7325V11.2141C28.9295 8.92933 27.0386 7.07795 24.705 7.07526ZM10.1447 15.3529C10.0202 15.3529 9.90071 15.4014 9.81264 15.4876L6.38723 18.8414V15.8128C6.38723 15.5588 6.17692 15.3529 5.91754 15.3529H4.97816C3.16317 15.3509 1.69242 13.9109 1.69035 12.1338V6.61539C1.69242 4.83833 3.16317 3.39832 4.97816 3.3963H13.9022C15.7172 3.39832 17.188 4.83833 17.19 6.61539V7.07526H15.781C13.4474 7.07795 11.5565 8.92933 11.5538 11.2141V15.3529H10.1447ZM27.9928 16.7325C27.9908 18.5096 26.52 19.9496 24.705 19.9516H23.7657C23.5063 19.9516 23.296 20.1575 23.296 20.4115V24.3599L18.9312 20.0863C18.8431 20.0001 18.7236 19.9516 18.5991 19.9516H15.781C13.966 19.9496 12.4952 18.5096 12.4932 16.7325V11.2141C12.4952 9.43703 13.966 7.99702 15.781 7.99499H24.705C26.52 7.99702 27.9908 9.43703 27.9928 11.2141V16.7325Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M25.6455 10.7539H14.8427C14.5834 10.7539 14.373 10.9598 14.373 11.2138C14.373 11.4677 14.5834 11.6736 14.8427 11.6736H25.6455C25.9049 11.6736 26.1152 11.4677 26.1152 11.2138C26.1152 10.9598 25.9049 10.7539 25.6455 10.7539Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M25.6455 13.5137H14.8427C14.5834 13.5137 14.373 13.7196 14.373 13.9735C14.373 14.2275 14.5834 14.4334 14.8427 14.4334H25.6455C25.9049 14.4334 26.1152 14.2275 26.1152 13.9735C26.1152 13.7196 25.9049 13.5137 25.6455 13.5137Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M25.6455 16.2734H14.8427C14.5834 16.2734 14.373 16.4793 14.373 16.7333C14.373 16.9873 14.5834 17.1932 14.8427 17.1932H25.6455C25.9049 17.1932 26.1152 16.9873 26.1152 16.7333C26.1152 16.4793 25.9049 16.2734 25.6455 16.2734Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M3.5693 7.07599H13.4327C13.6921 7.07599 13.9024 6.87008 13.9024 6.61612C13.9024 6.36216 13.6921 6.15625 13.4327 6.15625H3.5693C3.30991 6.15625 3.09961 6.36216 3.09961 6.61612C3.09961 6.87008 3.30991 7.07599 3.5693 7.07599Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M10.6146 8.91406H3.5693C3.30991 8.91406 3.09961 9.11997 3.09961 9.37393C3.09961 9.62789 3.30991 9.8338 3.5693 9.8338H10.6146C10.874 9.8338 11.0843 9.62789 11.0843 9.37393C11.0843 9.11997 10.874 8.91406 10.6146 8.91406Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M10.1449 11.6738H3.5693C3.30991 11.6738 3.09961 11.8797 3.09961 12.1337C3.09961 12.3877 3.30991 12.5936 3.5693 12.5936H10.1449C10.4043 12.5936 10.6146 12.3877 10.6146 12.1337C10.6146 11.8797 10.4043 11.6738 10.1449 11.6738Z"
                                                    fill="black"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <p className="text">
                                        Consult With It Advisor?{" "}
                                        <a href="page-contact.html">Click Now</a>
                                    </p>
                                </div>
                                <div className="triangle">
                                    <img src="images/shape/objective-triangle.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-6 content-column wow fadeInRight"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="inner-column">
                                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home"
                                            type="button"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            About
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                        >
                                            Mission
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#contact"
                                            type="button"
                                            role="tab"
                                            aria-controls="contact"
                                            aria-selected="false"
                                        >
                                            Vision
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content mt-30" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="content">
                                            <figure className="image">
                                                <img
                                                    src="images/about/about-three-image2.jpg"
                                                    alt="Image"
                                                />
                                                <a
                                                    className="btn-play playbtnanim"
                                                    href="https://www.youtube.com/watch?v=Lplq8RjQ0zU"
                                                    data-fancybox="gallery"
                                                    data-caption=""
                                                >
                                                    <i className="icon fa-solid fa-play" />
                                                </a>
                                            </figure>
                                            <ul>
                                                <li>Technology Growth</li>
                                                <li>Customer Oriented Program</li>
                                                <li>Dedicated Team member</li>
                                                <li>Customer Oriented Program</li>
                                            </ul>
                                        </div>
                                        <div className="progress mt-30">
                                            <div className="progress-single">
                                                <h5 className="progress-title">
                                                    Project Score <span>75%</span>
                                                </h5>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        <div className="content">
                                            <figure className="image">
                                                <img
                                                    src="images/about/about-three-image2.jpg"
                                                    alt="Image"
                                                />
                                                <a
                                                    className="btn-play playbtnanim"
                                                    href="https://www.youtube.com/watch?v=Lplq8RjQ0zU"
                                                    data-fancybox="gallery"
                                                    data-caption=""
                                                >
                                                    <i className="icon fa-solid fa-play" />
                                                </a>
                                            </figure>
                                            <ul>
                                                <li>Technology Growth</li>
                                                <li>Customer Oriented Program</li>
                                                <li>Dedicated Team member</li>
                                                <li>Customer Oriented Program</li>
                                            </ul>
                                        </div>
                                        <div className="progress mt-30">
                                            <div className="progress-single">
                                                <h5 className="progress-title">
                                                    mission success
                                                    <span>75%</span>
                                                </h5>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="contact"
                                        role="tabpanel"
                                        aria-labelledby="contact-tab"
                                    >
                                        <div className="content">
                                            <figure className="image">
                                                <img
                                                    src="images/about/about-three-image2.jpg"
                                                    alt="Image"
                                                />
                                                <a
                                                    className="btn-play playbtnanim"
                                                    href="https://www.youtube.com/watch?v=Lplq8RjQ0zU"
                                                    data-fancybox="gallery"
                                                    data-caption=""
                                                >
                                                    <i className="icon fa-solid fa-play" />
                                                </a>
                                            </figure>
                                            <ul>
                                                <li>Technology Growth</li>
                                                <li>Customer Oriented Program</li>
                                                <li>Dedicated Team member</li>
                                                <li>Customer Oriented Program</li>
                                            </ul>
                                        </div>
                                        <div className="progress mt-30">
                                            <div className="progress-single">
                                                <h5 className="progress-title">
                                                    Vision success
                                                    <span>75%</span>
                                                </h5>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Client />
            <section className="case-section-three d-none">
                <div className="sec-shape">
                    <img
                        className="sway_Y__animation"
                        src="images/shape/case-three-shape.png"
                        alt="Image"
                    />
                </div>
                <div className="box-shape">
                    <div
                        className="box1 wow slideInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    />
                    <div
                        className="box2 wow slideInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    />
                </div>
                <div className="outer-box">
                    <div className="content-column">
                        <div className="inner-column">
                            <div className="sec-title mb-30">
                                <h6
                                    className="sub-title wow fadeInUp"
                                    data-wow-delay="00ms"
                                    data-wow-duration="1500ms"
                                >
                                    Case studies
                                </h6>
                                <h2 className="title text-white wow splt-txt" data-splitting="">
                                    Passionate About Help You Achieve{" "}
                                    <span className="font-weight-300">Success</span>
                                </h2>
                                <p
                                    className="text text-white wow fadeInUp"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    Sed ut perspiciatis unde omnis iste natus voluptatem doloremque
                                    laudantium totames aperiam eaque quaesy inventore a tetar bikal
                                    architecto beatae vitae dicta.
                                </p>
                            </div>
                            <ul
                                className="info wow fadeInDown"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                            >
                                <li>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={10} cy={10} r={10} fill="#C6D936" />
                                        <path
                                            d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                            fill="black"
                                        />
                                    </svg>
                                    Real-time insights to drive results.
                                </li>
                                <li>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={10} cy={10} r={10} fill="#C6D936" />
                                        <path
                                            d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                            fill="black"
                                        />
                                    </svg>
                                    Accept fast payments directly during meetings.
                                </li>
                            </ul>
                            <a
                                className="btn-one-rounded mt-50 wow fadeInDown"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                href="page-case.html"
                            >
                                View all projects <i className="fa-regular fa-angle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="image-column">
                        <div className="row g-0">
                            <div className="col-sm-6">
                                <div className="case-block-three overlay-anim">
                                    <figure className="image">
                                        <img src="images/case/case-three-image1.jpg" alt="Image" />
                                    </figure>
                                    <a className="icon" href="page-case-details.html">
                                        <i className="fa-solid fa-arrow-up-right" />
                                    </a>
                                    <div className="content">
                                        <h5 className="title">
                                            <a href="page-case-details.html">HR Development</a>
                                        </h5>
                                        <h4 className="sub-title">
                                            <a href="page-case.html">All</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="case-block-three overlay-anim">
                                    <figure className="image">
                                        <img src="images/case/case-three-image2.jpg" alt="Image" />
                                    </figure>
                                    <a className="icon" href="page-case-details.html">
                                        <i className="fa-solid fa-arrow-up-right" />
                                    </a>
                                    <div className="content">
                                        <h5 className="title">
                                            <a href="page-case-details.html">HR Development</a>
                                        </h5>
                                        <h4 className="sub-title">
                                            <a href="page-case.html">All</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="case-block-three overlay-anim">
                                    <figure className="image">
                                        <img src="images/case/case-three-image3.jpg" alt="Image" />
                                    </figure>
                                    <a className="icon" href="page-case-details.html">
                                        <i className="fa-solid fa-arrow-up-right" />
                                    </a>
                                    <div className="content">
                                        <h5 className="title">
                                            <a href="page-case-details.html">HR Development</a>
                                        </h5>
                                        <h4 className="sub-title">
                                            <a href="page-case.html">All</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="case-block-three overlay-anim">
                                    <figure className="image">
                                        <img src="images/case/case-three-image4.jpg" alt="Image" />
                                    </figure>
                                    <a className="icon" href="page-case-details.html">
                                        <i className="fa-solid fa-arrow-up-right" />
                                    </a>
                                    <div className="content">
                                        <h5 className="title">
                                            <a href="page-case-details.html">HR Development</a>
                                        </h5>
                                        <h4 className="sub-title">
                                            <a href="page-case.html">All</a>
                                        </h4>
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

export default Services
