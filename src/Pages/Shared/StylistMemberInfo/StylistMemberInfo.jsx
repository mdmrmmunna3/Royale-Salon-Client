import Button from '../../../components/Button/Button';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";



import './StylistMemberInfo.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StylistMemberInfo = ({ stylist }) => {
    const { name, category, details, image } = stylist
    return (
        <div className="relative stylist_main">
            <div className=''>
                <div className='relative overflow-hidden'>
                    <LazyLoadImage src={image} className={`w-full image-full rounded-sm hoverdImg2 h-[400px]`} alt=""></LazyLoadImage>
                    {/* <img src={image} className={`w-full image-full rounded-sm hoverdImg2 h-[400px]`} alt="" /> */}
                    <div className="imgOverlay absolute overflow-hidden">
                        <div className='stylist_content p-5 text-center absolute'>

                            <div>
                                <h3 className='text-white'>{name}</h3>
                                <p className=" font-semibold text-cyan-600">{category}</p>
                            </div>

                            <p className='text-white'>{details}</p>
                            <div className='text-white flex justify-center items-center my-3 gap-4'>
                                <a className='hover:text-cyan-600 '><FaFacebookF /></a>
                                <a className='hover:text-cyan-600 '><FaLinkedinIn /></a>
                                <a className='hover:text-cyan-600 '><FaTwitter /></a>
                                <a className='hover:text-cyan-600 '><FaInstagram /></a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button buttonText="Team Details"></Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[-40px] text-center border-[1px] w-[90%] left-4 py-5 bg-white text-black rounded-sm stylist_titel hover:hidden">
                    <h3>{name}</h3>
                    <p className=" font-semibold cat">{category}</p>
                </div>

                {/* content part  */}
                {/* <div className='stylist_content p-5 text-center absolute hidden'>
                    <p className='text-white'>{details}</p>
                </div> */}
            </div>
        </div>
    );
};

export default StylistMemberInfo;