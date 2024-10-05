import { useEffect, useState } from "react";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "./LatestNews.css"
import { LazyLoadImage } from "react-lazy-load-image-component";

const LatestNews = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../../public/Blogs&News.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-10">
            {/* common part  */}
            <SectionTitel heading="Blogs & News"></SectionTitel>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        50: {
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        blogs.map(blog => <SwiperSlide key={blog?.blogs_id}>
                            <div className="blogs_main pb-20 relative">
                                <>
                                    <div className=" relative overflow-hidden ">
                                        {/* <img src={blog?.image} className="w-full h-[350px] rounded-sm hoverdImg2" alt="" /> */}
                                        <LazyLoadImage src={blog?.image} className="w-full h-[350px] rounded-sm hoverdImg2" alt=""></LazyLoadImage>
                                        <span className="absolute text-black px-4 py-2 rounded-sm left-6 text-center top-8 bg-white">{blog?.postDate}</span>
                                    </div>

                                    <div className="absolute bottom-[50px] text-center w-[90%] left-4 bg-white text-black rounded-sm border-[1px] py-5 px-2 hover:bottom-[100px] blogs_content">
                                        <h3>{blog?.titel}</h3>
                                        <p className="capitalize text-xl">{blog?.titel_descip}</p>
                                    </div>
                                </>
                            </div>
                        </SwiperSlide>)
                    }



                </Swiper>
            </div>

        </section>
    );
};

export default LatestNews;