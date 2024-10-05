
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


const CoverBanner = ({ img, smallTitel, bigTitel, linkTitel }) => {
    return (
        <section>
            <Parallax
                blur={{ min: -25, max: 25 }}
                bgImage={img}
                bgImageAlt="cover bg img"
                strength={200}
            >
                <div className="hero md:h-[550px] h-[350px]"
                    style={{ backgroundColor: `rgba(0, 0, 0, 0.4)`, width: '100%' }}
                >
                    <div className="" >
                        <div
                            className="hero-content text-center text-white">
                            <div className="max-w-md">
                                <p className=" md:text-3xl text-xl font-semibold mb-3 cover_titel" style={{ letterSpacing: '2px' }}>{smallTitel}</p>
                                <h3 className="lg:text-5xl md:text-4xl text-2xl" style={{ letterSpacing: '2px' }}>{bigTitel}
                                </h3>
                                {/* extra  */}
                                <div className="flex justify-center items-center gap-2 mt-3">
                                    ----- <Link to="/" className="font-medium">Home</Link> : <p className="font-medium">{linkTitel}</p>-----
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    );
};

export default CoverBanner;