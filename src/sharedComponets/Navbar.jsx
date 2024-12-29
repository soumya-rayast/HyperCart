import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import SearchBar from "../Components/SearchBar";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")); 
        if (user?.role) {
            setUserRole(user.role); 
        } else {
            setUserRole(null); 
        }
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const handleLogout = () =>{
        localStorage.removeItem('user');
        setUserRole(null);
        navigate('/')
    }
    const navList = (
        <ul
            className={`flex flex-col lg:flex-row lg:space-x-5 text-white font-medium text-md lg:px-5 space-y-3 lg:space-y-0`}
        >
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/allProduct"}>All Product</Link>
            </li>
            {userRole === "user" && (
                <>
                    <li>
                        <Link to={"/user-dashboard"}>Profile</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>Cart(0)</Link>
                    </li>
                </>
            )}
            {userRole === "admin" && (
                <>
                    <li>
                        <Link to={"/admin-dashboard"}>Admin Profile</Link>
                    </li>
                </>
            )}
            {!userRole && (
                <li>
                    <Link to={"/auth"}>Signup</Link>
                </li>
            )}
            {
                userRole && (
                    <li onClick={handleLogout} className="cursor-pointer">
                        Logout
                    </li>
                )
            }
        </ul>
    );

    return (
        <nav className="bg-black sticky top-0 z-10">
            <div className="flex justify-between items-center py-3 px-4 lg:px-8">
                <div className="text-white font-bold text-2xl">
                    <Link to={"/"}>HyperCart</Link>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={toggleNav}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    {navList}
                    <SearchBar />
                </div>
            </div>
            <div
                className={`lg:hidden ${isNavOpen ? "block" : "hidden"} px-4 pb-10`}
            >
                {navList}
            </div>
        </nav>
    );
};

export default Navbar;