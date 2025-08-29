import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Client = () => {
    const brandsData = [
        { id: 1, img: "images/brand/brand-two-image1.png", alt: "Brand 1", link: "#" },
        { id: 2, img: "images/brand/brand-two-image2.png", alt: "Brand 2", link: "#" },
        { id: 3, img: "images/brand/brand-two-image3.png", alt: "Brand 3", link: "#" },
        { id: 4, img: "images/brand/brand-two-image4.png", alt: "Brand 4", link: "#" },
        { id: 5, img: "images/brand/brand-two-image5.png", alt: "Brand 5", link: "#" },
        { id: 6, img: "images/brand/brand-two-image1.png", alt: "Brand 6", link: "#" },
        { id: 7, img: "images/brand/brand-two-image2.png", alt: "Brand 7", link: "#" },
        { id: 8, img: "images/brand/brand-two-image3.png", alt: "Brand 8", link: "#" },
        { id: 9, img: "images/brand/brand-two-image4.png", alt: "Brand 9", link: "#" },
        { id: 10, img: "images/brand/brand-two-image5.png", alt: "Brand 10", link: "#" }
    ];

    return (
        <>
            <div className="brand-section-two pb-120 pt-50">
                <div className="container">
                    <div className="outer-box">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={5}
                            // autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className="brand-slider"
                        >
                            {brandsData.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="brand-block">
                                        <a href={brand.link}>
                                            <img src={brand.img} alt={brand.alt} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client
