import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import companyLogo1 from "../../../assets/company/company1.png"
import companyLogo2 from "../../../assets/company/company2.png"
import companyLogo3 from "../../../assets/company/company3.png"
import companyLogo4 from "../../../assets/company/company4.png"
import companyLogo5 from "../../../assets/company/company5.png"

import "./CompanyLogos.css"

const CompanyLogos = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-6 my-6">
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img className="w-36 image-full logoChangeBg" src={companyLogo1} alt="companyLogo" />
                    </div>
                    <div>
                        <img className="w-36 image-full logoChangeBg" src={companyLogo2} alt="companyLogo" />
                    </div>
                    <div>
                        <img className="w-36 image-full logoChangeBg" src={companyLogo3} alt="companyLogo" />
                    </div>
                    <div>
                        <img className="w-36 image-full logoChangeBg" src={companyLogo4} alt="companyLogo" />
                    </div>
                    <div>
                        <img className="w-36 image-full filter logoChangeBg" src={companyLogo5} alt="companyLogo" />
                    </div>

                </Slider>
            </div>
        </section>
    );
};

export default CompanyLogos;