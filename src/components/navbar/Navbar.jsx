import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.png"
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div className="px-2 md:px-6 lg:px-[80px] pt-6 flex items-center justify-between">

            <div onClick={() => setDisplay(!display)} className="lg:hidden">
                {
                    display === true ? <RxCross2 className="text-[#f9a51a] text-3xl md:text-6xl"></RxCross2> : <MdOutlineMenu className="text-[#f9a51a] text-3xl md:text-6xl"></MdOutlineMenu>
                }
            </div>

            <div>
                <Link to='/'>
                    <img className="image-filter w-[20vw] md:w-[25vw] lg:w-[8vw]" src={logo} alt="logo" />
                </Link>
            </div>

            <div>
                <div className="flex items-center gap-2 bg-[#FFFFFF57] border-[white] border-[1px] py-2 px-3 lg:py-2 lg:px-3 md:py-3 md:px-4  rounded-lg">
                    <IoIosSearch className="text-white lg:text-xl md:text-5xl"></IoIosSearch> <input className="bg-transparent outline-none text-white text-xl" type="search" placeholder="search here" name="search" id="search" />
                </div>
            </div>

            <div className={`hidden lg:flex items-center gap-10 `}>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/news'>News</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/destination'>Destination</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/contact'>Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/signUp'>Sign Up</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 rounded-xl' : 'text-white font-medium leading-5 bg-transparent'} to='/login'>Login</NavLink>
            </div>
            <div className={`${display ? "" : "hidden"} flex flex-col gap-4 absolute top-[75px] md:top-[120px] lg:hidden`}>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/news'>News</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/destination'>Destination</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/contact'>Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/signUp'>Sign Up</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-black bg-[#f9a51a] py-2 px-3 font-medium leading-5 md:leading-6 rounded-xl md:py-3 md:px-4 md:text-xl' : 'text-white text-xl font-medium leading-5 md:leading-6 bg-transparent'} to='/login'>Login</NavLink>
            </div>

        </div>
    );
};

export default Navbar;