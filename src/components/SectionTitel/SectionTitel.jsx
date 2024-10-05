import { GiCursedStar } from "react-icons/gi";
import { SlMustache } from "react-icons/sl";

const SectionTitel = ({ heading }) => {
    return (
        <div className="text-center">
            <h3 className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold italic uppercase headingText">
                <span className="text-8xl star-icon"><svg width="27" height="27" viewBox="0 0 100 100" >
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
                </svg></span>
                {heading}
                <span className="text-8xl star-icon"><svg width="27" height="27" viewBox="0 0 100 100" >
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
                </svg></span>
            </h3>
            <h4 className="flex justify-center items-center text-3xl gap-1">------<span> <SlMustache /> </span>------</h4>
        </div>
    );
};

export default SectionTitel;