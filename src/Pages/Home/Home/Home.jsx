
import Helmet from "../../../components/HelmetTitel/HelmetTitel";
import About from "../About/About";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import HairStylist from "../HairStylist/HairStylist";
import LatestNews from "../LatestNews/LatestNews";
import Offering from "../Offering/Offering";
import OurServices from "../OurServices/OurServices";
import PricingPlan from "../PricingPlan/PricingPlan";
import PromoVideo from "../PromoVideo/PromoVideo";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (

        <>
            <Helmet titel='Home'></Helmet>

            <div>
                <Banner></Banner>
                <About></About>
                <Offering></Offering>
                <PromoVideo></PromoVideo>
                <Features></Features>
                <Testimonial></Testimonial>
                <PricingPlan></PricingPlan>
                <OurServices></OurServices>
                <HairStylist></HairStylist>
                <LatestNews></LatestNews>
                <Appoinment></Appoinment>
            </div>
        </>

    );
};

export default Home;