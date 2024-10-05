import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import img1 from "../../../assets/mens/shave.jpg"
import img2 from "../../../assets/mens/haircut2.jpg"
import img3 from "../../../assets/mens/hairWash.jpg"
import icon1 from "../../../assets/icons/straight-razor.png"
import icon2 from "../../../assets/icons/haircut.png"
import icon3 from "../../../assets/icons/shampoo.png"


import './Offering.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Offering = () => {

    return (
        <section className="md:mx-14 lg:mx-28 mx-2 pt-5 pb-10">
            {/* common heading  */}
            <SectionTitel heading="What We're Offering"></SectionTitel>

            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                    {/* 1st cols  */}
                    <div className="relative offering_main">
                        <div className="relative overflow-hidden"
                        >
                            <LazyLoadImage src={img1} alt="" className={`w-full hoverdImg`}></LazyLoadImage>
                            {/* <img src={img1} alt="" className={`w-full hoverdImg`} /> */}
                            <div className={`overlay absolute `}></div> {/* Overlay div */}
                        </div>

                        <div>
                            <div className="p-5 offering_titel text-center absolute">
                                <div>
                                    <LazyLoadImage src={icon1} alt="" className="w-10 mx-auto" ></LazyLoadImage>
                                    {/* <img src={icon1} alt="" className="w-10 mx-auto" /> */}
                                    <h4 className="text-2xl mt-3 text-white">Beard Trim</h4>
                                </div>
                            </div>
                            <div className="border-[1px] border-cyan-400 w-14 left-36 bottom-6 line absolute"></div>
                        </div>

                        {/* content part  */}
                        <div className="content hidden absolute p-5">
                            <p className="text-center text-white">Shaves ons amet ravida haretra nuam the drana miss uctus enec accumsan.</p>
                            <h5 className="text-center text-2xl text-cyan-500 font-semibold">$30</h5>
                        </div>
                    </div>
                    {/* 2nd cols  */}
                    <div className="relative offering_main">
                        <div className="relative overflow-hidden"
                        >
                            <LazyLoadImage src={img2} alt="" className={`w-full hoverdImg`}></LazyLoadImage>
                            <div className={`overlay absolute `}></div> {/* Overlay div */}
                        </div>

                        <div>
                            <div className="p-5 offering_titel text-center absolute">
                                <div>
                                    <LazyLoadImage src={icon2} alt="" className="w-10 mx-auto" ></LazyLoadImage>
                                    <h4 className="text-2xl mt-3 text-white">Hair Cut</h4>
                                </div>
                            </div>
                            <div className="border-[1px] border-cyan-400 w-14 left-36 bottom-6 line absolute"></div>
                        </div>

                        {/* content part  */}
                        <div className="content hidden absolute p-5">
                            <p className="text-center text-white">Hair cut amet ravida haretra nuam the drana miss uctus enec accumsan.</p>
                            <h5 className="text-center text-2xl text-cyan-500 font-semibold">$30</h5>
                        </div>
                    </div>
                    {/* 3rd cols  */}
                    <div className="relative offering_main">
                        <div className="relative overflow-hidden"
                        >
                            <LazyLoadImage src={img3} alt="" className={`w-full hoverdImg`}></LazyLoadImage>
                            <div className={`overlay absolute `}></div> {/* Overlay div */}
                        </div>

                        <div>
                            <div className="p-5 offering_titel text-center absolute">
                                <div>
                                    <LazyLoadImage src={icon3} alt="" className="w-10 mx-auto" ></LazyLoadImage>
                                    <h4 className="text-2xl mt-3 text-white">Hair Wash</h4>
                                </div>
                            </div>
                            <div className="border-[1px] border-cyan-400 w-14 left-36 bottom-6 line absolute"></div>
                        </div>

                        {/* content part  */}
                        <div className="content hidden absolute p-5">
                            <p className="text-center text-white">Hair wash amet ravida haretra nuam the drana miss uctus enec accumsan.</p>
                            <h5 className="text-center text-2xl text-cyan-500 font-semibold">$30</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offering;