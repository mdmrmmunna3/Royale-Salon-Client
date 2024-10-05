import Button from "../../../components/Button/Button";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";

import img1 from "../../../assets/mens/glazma-mens-hair-colouring.jpg"
import img2 from "../../../assets/mens/Haircut-grooming.jpg"
import img3 from "../../../assets/mens/Kids-Haistyle-Small.jpg"

import "./Features.css"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Features = () => {
    return (
        <section className="py-10 mx-2 md:mx-14 lg:mx-28">
            {/* common part  */}
            <SectionTitel heading="Other Features"></SectionTitel>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolor! Minus corporis repellat autem maiores?</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4">
                <div className="p-3 feature_main "> {/* border-[1px] border-cyan-500 */}
                    <div className="relative ">
                        <LazyLoadImage src={img1} className="w-full hoverd-img" alt=""></LazyLoadImage>
                        {/* <img src={img1} className="w-full hoverd-img" alt="" /> */}
                        <div className="overlay absolute"></div>
                    </div>
                    <h3 className="mt-4 mb-3">Apply custom colors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero laudantium ad? Officia accusamus dolores dolor libero doloremque blanditiis aspernatur.</p>
                    <Button buttonText="Appointment"></Button>
                </div>

                <div className="p-3 feature_main">
                    <div className="relative ">
                        <LazyLoadImage src={img2} className="w-full hoverd-img" alt=""></LazyLoadImage>
                        <div className="overlay absolute"></div>
                    </div>
                    <h3 className="mt-4 mb-3">Grooming</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero laudantium ad? Officia accusamus dolores dolor libero doloremque blanditiis aspernatur.</p>
                    <Button buttonText="Appointment"></Button>
                </div>

                <div className="p-3 feature_main">
                    <div className="relative ">
                        <LazyLoadImage src={img3} className="w-full hoverd-img" alt=""></LazyLoadImage>
                        <div className="overlay absolute"></div>
                    </div>
                    <h3 className="mt-4 mb-3">kids cuts</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero laudantium ad? Officia accusamus dolores dolor libero doloremque blanditiis aspernatur.</p>
                    <Button buttonText="Appointment"></Button>
                </div>


            </div>

        </section>
    );
};

export default Features;