import SectionTitel from "../../../components/SectionTitel/SectionTitel";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./Testimonial.css"

import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("../../../../public/testimonials.json")
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [])

    return (
        // className="pb-10 mx-2 md:mx-14 py-5 lg:mx-28"
        <section className="py-5">
            {/* common part  */}
            <SectionTitel heading="Testimonials"></SectionTitel>

            <div className="testi_item relative bg-fixed lg:h-[400px] md:h-[35vh] h-[320px]">
                <div className="testi_overlay ">
                    <>
                        <Swiper
                            loop={true}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >

                            {
                                reviews.map(review => <SwiperSlide key={review.testi_id}>
                                    <div className="flex flex-col justify-center items-center lg:pt-20 md:pt-10 lg:pb-14 md:pb-10 py-7 md:mx-48 mx-5 text-white">
                                        <Rating
                                            style={{
                                                maxWidth: 100,
                                                paddingBottom: 15
                                            }}
                                            value={review?.rating}
                                            readOnly
                                        />
                                        {/*  */}
                                        <p className="text-center overflow-hidden max-h-[4.8em] line-clamp-3 ">{review?.reviews}</p>
                                        <div className="my-4">
                                            <img src={review?.image} className="w-20 h-20 rounded-[100%]" alt="" />
                                        </div>
                                        <p >{review?.name}</p>

                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;




// formula
// const truncatedText = text.split(" ").slice(0, 150).join(" "); 