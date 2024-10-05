import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import iconsImg from "../../../assets/icons/hair_icon3.png"
import gallery1 from "../../../assets/mens/hairwash.jpg"
import gallery2 from "../../../assets/womens/girl2.jpg"
import gallery3 from "../../../assets/mens/haircut_2.jpg"
import gallery4 from "../../../assets/womens/woman1.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {

    const getYear = () => {
        const date = new Date();
        let year = date.getFullYear();
        document.getElementById("current_year").innerHTML = year;
    }
    return (
        <footer>
            <section className="md:px-14 lg:px-28 px-2 py-10 bg-[#131313]" >
                <div className="grid lg:grid-cols-4 md:grid-cols-2 md:text-start text-center gap-5">
                    {/* 1st grid : about me  */}
                    <div className="text-white">
                        <div className="flex items-center md:justify-start justify-center gap-3 mb-3">
                            <LazyLoadImage src={iconsImg} className="w-14" alt=""></LazyLoadImage>
                            <div className="div">
                                <p className="md:text-3xl text-xl royal-text" style={{ letterSpacing: '3px' }}>Royal Salon</p>
                                <p className="md:text-2xl text-xl hair-text font-medium" style={{ letterSpacing: '3px' }}>hair glamorous</p>
                            </div>
                        </div>
                        <p className="mb-3 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id deserunt, adipisci explicabo natus non.</p>
                        <p className="mb-3 hover:text-cyan-600 font-medium transition delay-75 duration-300 ease-in-out"><span>Share With Us</span></p>
                        <div className='text-white flex items-center md:justify-start justify-center my-3 gap-4'>
                            <a className='hover:text-cyan-600 hover:cursor-pointer'><FaFacebookF /></a>
                            <a className='hover:text-cyan-600 hover:cursor-pointer'><FaLinkedinIn /></a>
                            <a className='hover:text-cyan-600 hover:cursor-pointer'><FaTwitter /></a>
                            <a className='hover:text-cyan-600 hover:cursor-pointer'><FaInstagram /></a>
                            <a className='hover:text-cyan-600 hover:cursor-pointer'><FaPinterestP /></a>
                            <a className='hover:text-cyan-600 hover:cursor-pointer'><FaYoutube /></a>
                        </div>
                    </div>

                    {/* 2nd grid : work time part  */}
                    <div className="text-white">
                        <h4 className="mb-3 md:text-3xl text-2xl hover:text-cyan-600 transition delay-75 duration-300 ease-in-out">Work Time</h4>
                        <div className=''>
                            <p className="mb-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"><span>Monday</span>  ------------ <span>10:00AM-10:00PM</span></p>
                            <p className="mb-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"><span>Tuesday</span> ------------ <span>10:00AM-10:00PM</span></p>
                            <p className="mb-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"><span>Thursday</span> ----------- <span>10:00AM-10:00PM</span></p>
                            <p className="mb-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"><span>Friday</span>  --------------- <span>10:00AM-10:00PM</span></p>
                            <p className="mb-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"><span>Saturday</span> ------------ <span>10:00AM-10:00PM</span></p>
                            <p className="mb-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"><span>Weekend</span> --------------------------- <span>Closed</span></p>
                        </div>
                    </div>

                    {/* 3rd grid : gallary part  */}
                    <div className="text-white">
                        <h4 className="mb-3 md:text-3xl text-2xl hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"> Gallery</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {/* <img src={gallery1} className="h-[100px] w-full rounded-sm" alt="" /> */}
                            <LazyLoadImage src={gallery1} className="h-[100px] w-full rounded-sm" alt=""></LazyLoadImage>
                            <LazyLoadImage src={gallery2} className="h-[100px] w-full rounded-sm" alt=""></LazyLoadImage>
                            <LazyLoadImage src={gallery3} className="h-[100px] w-full rounded-sm" alt=""></LazyLoadImage>
                            <LazyLoadImage src={gallery4} className="h-[100px] w-full rounded-sm" alt=""></LazyLoadImage>
                        </div>
                    </div>

                    {/* 4th grid : contact part  */}
                    <div className="text-white">
                        <h4 className="mb-3 md:text-3xl text-2xl hover:text-cyan-600 transition delay-75 duration-300 ease-in-out">Contact Us</h4>
                        <p className="mb-3 flex items-center md:justify-start justify-center gap-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out">
                            <FaLocationDot className="text-2xl" /> <span>Sher-e-Bangla, West-Agargoan, Dhaka-1207</span>
                        </p>
                        <p className="text-2xl mb-3 flex items-center md:justify-start justify-center gap-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"> <MdAddIcCall /> <span>0140362****</span>
                        </p>
                        <p className="text-2xl mb-3 flex items-center md:justify-start justify-center gap-2 hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"> <MdAddIcCall /> <span>01312******</span>
                        </p>
                        <a href="#" className="mb-3 flex items-center md:justify-start justify-center gap-2 text-xl hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"> <IoIosMail className="text-2xl mt-1" /> <span>royalsalon1@gmail.com</span></a>
                        <a href="#" className="mb-3 flex items-center md:justify-start justify-center gap-2 text-xl hover:text-cyan-600 transition delay-75 duration-300 ease-in-out"> <IoIosMail className="text-2xl mt-1" /> <span>royalsalon2@gmail.com</span></a>

                    </div>

                </div>
            </section >

            {/* all reserved part  */}
            <div>
                <aside className="text-center py-3 bg-black text-white px-2">
                    <p onMouseEnter={getYear}>Copyright &copy; <span id="current_year"></span> Royal Salon.All rights Reserved.  Designed by Md Mustafijur Rahman Munna</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;