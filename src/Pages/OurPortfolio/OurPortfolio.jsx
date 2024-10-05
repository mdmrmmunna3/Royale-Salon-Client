
import CoverBanner from "../Shared/CoverBanner/CoverBanner";
import bgImg from "../../assets/mens/haircut_2.jpg"
import PhotosGallery from "../Shared/PhotosGallery/PhotosGallery";
import HelmetTitel from "../../components/HelmetTitel/HelmetTitel";
const OurPortfolio = () => {
    return (
        <section>
            <HelmetTitel titel="Our Portfolio"></HelmetTitel>
            <CoverBanner
                img={bgImg}
                smallTitel="Gallery & video"
                bigTitel="Our Portfolio"
                linkTitel="Our Portfolio"
            ></CoverBanner>

            <PhotosGallery></PhotosGallery>
        </section>
    );
};

export default OurPortfolio;