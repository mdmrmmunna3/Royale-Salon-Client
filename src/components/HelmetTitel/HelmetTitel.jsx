import { Helmet } from "react-helmet-async";


const HelmetTitel = ({ titel }) => {
    return (
        <div>
            <Helmet>
                <title>Royal Salon || {titel}</title>
            </Helmet>
        </div>
    );
};

export default HelmetTitel;