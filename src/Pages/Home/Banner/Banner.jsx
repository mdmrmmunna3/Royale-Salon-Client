
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/mens/haircut.jpg"
import img2 from "../../../assets/womens/woman1.jpg"
import img3 from "../../../assets/womens/hair-cut-hairdresser-s-salon_78492-381.avif"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LazyLoadImage } from "react-lazy-load-image-component";


const Banner = () => {

    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}  // Autoplay, 
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="banner_main relative">
                        <LazyLoadImage className="w-full lg:h-[630px] md:h-[600px] h-[500px]" src={img1} alt=""></LazyLoadImage>
                        {/* <img className="w-full lg:h-[630px] md:h-[600px] h-[500px]" src={img1} alt="" /> */}
                        <div className="banner_content absolute lg:top-64 lg:left-[30%] md:top-[245px] md:left-[22%] top-48 text-center">
                            <h3 className="text-white">stay sharp, look good</h3>
                            <h2 className="lg:text-5xl md:text-3xl text-2xl uppercase font-medium text-white mt-4" style={{ letterSpacing: '3px' }}>Royal salon <br /> for every men</h2>
                            <p className="text-white lg:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam, unde! Molestiae reprehenderit ducimus quam repellendus?</p>
                            <div className="appoinment-btn bg-[--primary-color] hover:bg-[--secondary-color] mx-auto w-52 px-5 py-2 md:mt-10 mt-5 rounded-full duration-500">
                                <button className="btn-color uppercase font-medium">
                                    Book Appointment
                                </button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner_content relative">
                        <LazyLoadImage className="w-full lg:h-[630px] md:h-[600px] h-[500px]" src={img2} alt=""></LazyLoadImage>
                        <div className="banner_content absolute lg:top-64 lg:left-[30%] md:top-[245px] md:left-[22%] top-48 text-center">
                            <h3 className="text-white">stay sharp, look good</h3>
                            <h1 className="lg:text-5xl md:text-3xl text-2xl uppercase font-medium text-white mt-4" style={{ letterSpacing: '3px' }}>Royal salon <br /> for every Women</h1>
                            <p className="text-white lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quas quaerat saepe voluptate possimus minus deserunt!</p>
                            <div className="appoinment-btn bg-[--primary-color] hover:bg-[--secondary-color] mx-auto w-52 px-5 py-2 md:mt-10 mt-5 rounded-full duration-500">
                                <button className="btn-color uppercase font-medium">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner_content relative">
                        <LazyLoadImage className="w-full lg:h-[630px] md:h-[600px] h-[500px]" src={img3} alt=""></LazyLoadImage>
                        <div className="banner_content absolute lg:top-64 lg:left-[30%] md:top-[245px] md:left-[22%] top-48 text-center">
                            <h3 className="text-white">stay sharp, look good</h3>
                            <h1 className="lg:text-5xl md:text-3xl text-2xl uppercase font-medium text-white mt-4" style={{ letterSpacing: '3px' }}>Royal salon <br /> for every Women</h1>
                            <p className="text-white lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Esse doloremque libero iure molestiae sapiente. Saepe.</p>
                            <div className="appoinment-btn bg-[--primary-color] hover:bg-[--secondary-color] mx-auto w-52 px-5 py-2 md:mt-10 mt-5 rounded-full duration-500">
                                <button className="btn-color uppercase font-medium">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;