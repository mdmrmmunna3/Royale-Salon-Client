import { useEffect, useState } from "react";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import ServicesItem from "../../Shared/ServicesItem/ServicesItem";


const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("../../../../public/services.json")
            .then(res => res.json())
            .then(data => {
                const limitService = data.slice(0, 6);
                setServices(limitService)
            })
            .catch(err => console.error(err))

    }, [])

    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-6">
            {/* common part  */}
            <SectionTitel heading="Our Services"></SectionTitel>

            <p className="text-center text-2xl mb-2">We Also Offer</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    services.map(service => <ServicesItem
                        key={service.pricing_id}
                        service={service}
                    ></ServicesItem>)
                }
            </div>
        </section>
    );
};

export default OurServices;