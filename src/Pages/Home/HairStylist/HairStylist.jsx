import { useEffect, useState } from "react";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import StylistMemberInfo from "../../Shared/StylistMemberInfo/StylistMemberInfo";


const HairStylist = () => {

    const [hairStyllist, setHairStylist] = useState([]);

    useEffect(() => {
        fetch("../../../../public/OursTeam.json")
            .then(res => res.json())
            .then(data => setHairStylist(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <section className="md:mx-14 lg:mx-28 mx-2 py-6">
            {/* common part  */}
            <SectionTitel heading="Hair Stylists"></SectionTitel>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-14 py-6">
                {
                    hairStyllist.map(stylist => <StylistMemberInfo
                        key={stylist.stylist_id}
                        stylist={stylist}
                    ></StylistMemberInfo>)
                }
            </div>
        </section>
    );
};

export default HairStylist;