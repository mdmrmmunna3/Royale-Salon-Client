
import CoverBanner from "../Shared/CoverBanner/CoverBanner";
import bgImg from "../../assets/mens/barber-shop-.jpg"
import HelmetTitel from "../../components/HelmetTitel/HelmetTitel";
import About from "../Home/About/About";
import { useState } from "react";
import salonVideo from "../../assets/videos/Salon_video.mp4"
import videoPoster from "../../assets/mens/video.jpg"
import { IoPlayCircleOutline } from "react-icons/io5";

const AboutUs = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        const video = document.getElementById('salonVideo');
        if (isPlaying) {
            video.pause();
        }
        else {
            video.play();
        }
    }

    return (
        <section >
            <HelmetTitel titel="About Us"></HelmetTitel>
            <CoverBanner
                img={bgImg}
                smallTitel="About Us"
                bigTitel="Our History"
                linkTitel="About Us"
            ></CoverBanner>
            {/* home about part  */}
            <About></About>

            <div className="grid lg:grid-cols-2 gap-4 md:mx-14 lg:mx-28 mx-2 py-6">
                {/* video  */}
                <div className="relative">
                    <div className="w-full ">
                        <video
                            id="salonVideo"
                            poster={videoPoster}
                            className="rounded-lg w-full h-full object-cover"
                            onClick={togglePlay}
                            muted
                        >
                            <source src={salonVideo} type="video/mp4" />
                        </video>
                    </div>
                    {
                        !isPlaying &&
                        <button
                            className="absolute top-1/2 left-1/2 text-6xl transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-cyan-400 duration-500 transition-transform"
                            onClick={togglePlay}
                        >
                            <IoPlayCircleOutline />
                        </button>
                    }
                </div>

                {/* why choose content  part*/}
                <div className="relative">
                    <div className="img_overlay">
                        <div className="lg:mx-12 lg:my-5">
                            <h4 className="short-text text-4xl font-semibold">Why choose our hair salon?</h4>

                            <p className="mt-4">Our team consists of highly trained professionals with years of experience in the beauty industry. Each stylist and technician at Royal Salon is committed to ongoing education to stay up-to-date with the latest trends, techniques, and products. Whether you are looking for a classic cut, a trendy style, or specialized treatments, our experts are equipped to deliver exceptional results. </p>
                            <p className="mt-4">Our salon is the territory created purely for people who appreciate premium quality, time and flawless look. At our place, you have a chance to have a really good time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;