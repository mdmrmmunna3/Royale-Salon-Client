import { GiCursedStar } from "react-icons/gi";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import aboutImg1 from "../../../assets/mens/barber.jpg"
import aboutImg2 from "../../../assets/womens/hairdresser.jpg"
import aboutImg3 from "../../../assets/mens/hairdressing.jpg"
import aboutImg4 from "../../../assets/mens/haircut.jpg"
import Button from "../../../components/Button/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-10">
            {/* common heading  */}
            <SectionTitel heading="About Us"></SectionTitel>

            {/* first section  */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                {/* left-about-content  */}
                <div >
                    <h4 className="short-text font-semibold text-2xl">Since 2007</h4>
                    <h3 className="lg:text-4xl md:text-2xl text-xl">Royal Salon Shop</h3>
                    <div className="salon-content">
                        <p className="">Come experience a unique and edgy Royal Salon Shop for all your hair and beard needs.Everything about this place is simply goods.loved and atmosphere and friendly staf</p>
                        <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nulla dolore praesentium sunt velit ad voluptates, omnis, rerum culpa autem optio illo accusantium, molestiae assumenda! Voluptatem, facilis. Eum, excepturi ipsam?</p>
                        <ul>
                            <li className="flex items-center gap-1 "><span className="text-8xl">
                                <svg width="18" height="18" viewBox="0 0 100 100" >
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#0fd1a5' }} />
                                            <stop offset="25%" style={{ stopColor: '#0f9dd1' }} />
                                            <stop offset="50%" style={{ stopColor: '#850de6' }} />
                                            <stop offset="75%" style={{ stopColor: '#e60dca' }} />
                                            <stop offset="100%" style={{ stopColor: '#f2b46b' }} />
                                        </linearGradient>
                                    </defs>
                                    <GiCursedStar style={{ fill: 'url(#gradient)' }} />
                                </svg>
                            </span> <span>We are professional and certified barbers</span></li>

                            <li className="flex items-center gap-1">
                                <span className="text-8xl">
                                    <svg width="18" height="18" viewBox="0 0 100 100" >
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#0fd1a5' }} />
                                                <stop offset="25%" style={{ stopColor: '#0f9dd1' }} />
                                                <stop offset="50%" style={{ stopColor: '#850de6' }} />
                                                <stop offset="75%" style={{ stopColor: '#e60dca' }} />
                                                <stop offset="100%" style={{ stopColor: '#f2b46b' }} />
                                            </linearGradient>
                                        </defs>
                                        <GiCursedStar style={{ fill: 'url(#gradient)' }} />
                                    </svg>
                                </span>  <span> We care about our customers satisfaction</span></li>
                            <li className="flex items-center gap-1"> <span className="text-8xl">
                                <svg width="18" height="18" viewBox="0 0 100 100" >
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#0fd1a5' }} />
                                            <stop offset="25%" style={{ stopColor: '#0f9dd1' }} />
                                            <stop offset="50%" style={{ stopColor: '#850de6' }} />
                                            <stop offset="75%" style={{ stopColor: '#e60dca' }} />
                                            <stop offset="100%" style={{ stopColor: '#f2b46b' }} />
                                        </linearGradient>
                                    </defs>
                                    <GiCursedStar style={{ fill: 'url(#gradient)' }} />
                                </svg>
                            </span>  <span> We use quality products to make you look perfect</span></li>

                        </ul>
                    </div>
                </div>

                {/* right-about-content  */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="my-6">
                        <LazyLoadImage src={aboutImg1} className="h-full w-full" alt=""></LazyLoadImage>
                    </div>
                    <div className="my-6">
                        <LazyLoadImage src={aboutImg2} className="mb-3" alt=""></LazyLoadImage>
                        <LazyLoadImage src={aboutImg3} alt=""></LazyLoadImage>
                    </div>
                </div>
            </div>

            {/* second section  */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* first section  */}
                <div>
                    <LazyLoadImage src={aboutImg4} className="rounded-sm" alt=""></LazyLoadImage>
                </div>

                {/* second section  */}
                <div className="lg:my-10 my-1">
                    <h4 className="short-text text-2xl font-semibold">17 Year Of Experience</h4>
                    <h3 className="text-xl md:text-2xl lg:text-4xl uppercase font-medium mt-2">
                        <span className="lg:block">Making People look</span>
                        <span> Awesome Since 2007 </span>
                    </h3>
                    <p className="lg:my-4 my-2">Come experience a unique and edgy Royal Salon Shop for all your hair and beard needs.Everything about this place is simply goods.loved and atmosphere and friendly staf.</p>

                    <Button buttonText="Read More"></Button>
                </div>
            </div>
        </section>
    );
};

export default About;