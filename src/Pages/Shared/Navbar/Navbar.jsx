import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import './Navbar.css';
import useToggleTheme from "../../../Hooks/useToggleTheme";
// import { GiMustache } from "react-icons/gi";

import iconsImg from "../../../assets/icons/hair_icon3.png"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {

    const [iconSwap, setIconSwap] = useState(false);
    const [isDarkMode, handleToggleTheme] = useToggleTheme();

    const handleIconSwap = () => {
        setIconSwap(!iconSwap)
    }


    const navOptions = <>
        {/* <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} style={{ fontWeight: '600' }}>Home</NavLink></li> */}
        <li><NavLink to="/" style={{ fontWeight: '600' }}>Home</NavLink></li>
        <li><NavLink to="/services" className="font-semibold">Services</NavLink></li>
        <li><NavLink to="/ourPortfolio" className="font-semibold">Our Portfolio</NavLink></li>
        <li><NavLink to="/ourTeam" className="font-semibold">Our Team</NavLink></li>
        <li className="pages"><NavLink to="/aboutUs" className="font-semibold">pages</NavLink>
            <ul className="pages_ul">
                <li><NavLink to="/aboutUs" className="font-semibold">About Us</NavLink></li>
                <li><NavLink to="/blogs" className="font-semibold">Blogs</NavLink></li>

            </ul>
        </li>
        <li><NavLink to="/contactUs" className="font-semibold">Contact Us</NavLink></li>
        <li onClick={handleToggleTheme} className=" flex items-center justify-center" id="modeChange"><label>
            {isDarkMode ? <IoSunnySharp /> : <IoMoonSharp />}
        </label></li>
    </>
    return (
        <section>
            <div
                style={{
                    boxShadow: `rgba(143, 194, 197, 0.356) 0px 5px 15px`,
                    backdropFilter: `blur(8px)`
                }}
                // bg-[--primary-color] 
                className={`navbar fixed z-50 bg-[--primary-color] `}>
                <div className="navbar-start">
                    <Link to="/" className="font-semibold  flex items-center gap-3">
                        <span>
                            {/* <GiMustache className="text-5xl" /> */}
                            {/* <img src={iconsImg} className="md:w-14 w-12" alt="" /> */}
                            <LazyLoadImage src={iconsImg} className="md:w-14 w-12" alt="" ></LazyLoadImage>
                        </span>
                        <div className="div">
                            <p className="md:text-3xl text-xl royal-text" style={{ letterSpacing: '3px' }}>Royal Salon</p>
                            <p className="md:text-2xl text-xl hair-text font-medium" style={{ letterSpacing: '3px' }}>hair glamorous</p>
                        </div>
                    </Link>
                </div>
                <div className="lg:hidden navbar-end">
                    <details className="dropdown" onClick={handleIconSwap}>
                        <summary tabIndex={0} className="lg:hidden swap swap-rotate">
                            {iconSwap ? <GiCrossedSwords className="h-6 w-6 fill-current" /> : <MdMenuOpen className="h-6 w-6 fill-current" />}
                        </summary>
                        <ul
                            style={{
                                boxShadow: `rgba(12, 228, 235, 0.753) 0px 5px 15px`
                            }}
                            tabIndex={0} className="menu menu-sm dropdown-content right-[1px] mt-3 z-[1] p-2 shadow bg-[--primary-color] rounded-box w-96">
                            {navOptions}
                        </ul>
                    </details>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Navbar;