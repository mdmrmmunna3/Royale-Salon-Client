import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ServicesItem.css"

const ServicesItem = ({ service }) => {

    const { image, serve_name, details } = service

    return (
        <div>
            <div
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
                    borderRadius: `5px`
                }}
                className="flex flex-col justify-center items-center p-5 text-center servies_main">
                <LazyLoadImage className="w-14 h-16 services_img" src={image} alt="service-img"></LazyLoadImage>
                {/* <img className="w-14 h-16 services_img" src={image} alt="" /> */}
                <h3 className="my-3 services_name">{serve_name}</h3>
                <p className="text-gray-500">{details}</p>
            </div>
        </div >
    );
};

export default ServicesItem;