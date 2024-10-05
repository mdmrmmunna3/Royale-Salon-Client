
import img1 from "../../../assets/mens/barber.jpg"
import img2 from "../../../assets/mens/barber-shop-.jpg"
import img3 from "../../../assets/mens/client-doing-hair-cut-barber-shop-salon_1303-20772.avif"
import img4 from "../../../assets/mens/haircut-grooming.jpg"
import img5 from "../../../assets/mens/haircut2.jpg"
import img6 from "../../../assets/mens/hairwash.jpg"
import img7 from "../../../assets/mens/shave.jpg"
import img8 from "../../../assets/mens/hairdressing.jpg"

import SectionTitel from "../../../components/SectionTitel/SectionTitel";

const PhotosGallery = () => {



    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-6">
            {/* common part  */}
            <SectionTitel heading="Image Gallery"></SectionTitel>
            <div className="grid grid-cols-1 gap-3 mt-3">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-2">
                    <img src={img1} className="w-full lg:h-[280px] md:h-[290px]" alt="" />
                    <img src={img2} className="w-full lg:h-[280px] md:h-[290px]" alt="" />
                    <img src={img3} className="w-full lg:h-[280px] md:h-[290px]" alt="" />
                </div>
                <div className="grid lg:grid-cols-2 gap-2">
                    <img src={img8} className="w-full lg:h-[400px] " alt="" />
                    <img src={img5} className="w-full lg:h-[400px] lg:block md:hidden" alt="" />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
                    <img src={img4} className="w-full lg:h-[280px] md:h-[290px]" alt="" />
                    <img src={img7} className="w-full lg:h-[280px] md:h-[290px]" alt="" />
                    <img src={img6} className="w-full lg:h-[280px] md:h-[290px] md:hidden lg:block" alt="" />
                </div>
            </div>
        </section>
    );
};

export default PhotosGallery;
