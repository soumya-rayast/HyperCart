import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For hamburger and close icons
import SearchBar from "../Components/SearchBar";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // navList Data
    const navList = (
        <ul
            className={`flex flex-col lg:flex-row lg:space-x-5 text-white font-medium text-md lg:px-5 space-y-3 lg:space-y-0`}
        >
            {/* Home */}
            <li>
                <Link to={"/"}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={"/allProduct"}>All Product</Link>
            </li>

            {/* Signup */}
            <li>
                <Link to={"/auth"}>Signup</Link>
            </li>

            {/* User */}
            <li>
                <Link to={"/user-dashboard"}>User</Link>
            </li>

            {/* Admin */}
            <li>
                <Link to={"/admin-dashboard"}>Admin</Link>
            </li>

            {/* Cart */}
            <li>
                <Link to={"/cart"}>Cart(0)</Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gradient-to-r from-purple-500 to-pink-500 sticky top-0 z-10">
            {/* Main */}
            <div className="flex justify-between items-center py-3 px-4 lg:px-8">
                {/* Left: Logo */}
                <div className="text-white font-bold text-2xl">
                    <Link to={"/"}>HyperCart</Link>
                </div>

                {/* Right: Hamburger Menu for Small Screens */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleNav}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Right: Navigation and SearchBar */}
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    {navList}
                    <SearchBar />
                </div>
            </div>

            {/* Small Screen Navigation */}
            <div
                className={`lg:hidden ${isNavOpen ? "block" : "hidden"} px-4 overflow-y-scroll pb-10`}
            >
                {navList}
                <div className="mt-3">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
