import { useEffect, useState } from "react";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import PricingMenuItem from "../../Shared/PricingMenuItem/PricingMenuItem";


const PricingPlan = () => {

    const [pricePlan, setPricePlan] = useState([]);

    useEffect(() => {
        fetch("../../../../public/pricing.json")
            .then(res => res.json())
            .then(data => setPricePlan(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-6">
            {/* common part  */}
            <SectionTitel heading="Pricing Plan"></SectionTitel>

            <div className="grid md:grid-cols-2 gap-6 ">
                {
                    pricePlan.map(priceMenuItem => <PricingMenuItem
                        key={priceMenuItem?.pricing_id}
                        priceMenuItem={priceMenuItem}
                    ></PricingMenuItem>)
                }
            </div>
        </section>
    );
};

export default PricingPlan;