import { useState } from "react";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";


const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <section className="md:mx-14 lg:mx-28 mx-2 pt-3 pb-6">
            {/* common part  */}
            <SectionTitel heading="make an appoinment"></SectionTitel>
            <input selected={selectedDate}
                onChange={(date) => setSelectedDate(date)} type="date" name="" id="" />

            <form action="#">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />

                <select required>
                    <option value="" disabled selected>Select Your Makeup Type</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="party">Party Makeup</option>
                    <option value="casual">Casual Makeup</option>
                </select>

                <input type="date" required />
                <span className="input-description">Select a date for your appointment</span>

                <select required>
                    <option value="" disabled selected>Choose Your Time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                <textarea placeholder="Any Notes For Us"></textarea>

                <button type="submit">Book Now</button>
            </form>


        </section>
    );
};

export default Appoinment;