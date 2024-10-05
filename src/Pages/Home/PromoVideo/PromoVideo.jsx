
import salonVideo from "../../../assets/videos/Salon_video.mp4"
import videoPoster from "../../../assets/mens/video.jpg"
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";


const PromoVideo = () => {
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
        <section className="md:mx-14 lg:mx-28 mx-2 relative">
            <div className="w-full lg:h-[500px] md:h-[400px]">
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
        </section>
    );
};

export default PromoVideo;