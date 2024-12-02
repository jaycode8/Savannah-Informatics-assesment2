import { HiBars3BottomRight } from "react-icons/hi2"
import { BiCross, BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const [location, setLocation] = useState(window.location.href);
    const curentPath = useLocation();
    
    const menuToggle = () => {
        setNav(!nav);
        setLocation(window.location.href);
    }
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/");
    };

    const isOpen = nav ? "top-12" : "-top-[25rem]";

    const links = ["users", "albums"];

    return (
        <div className="w-full h-12 fixed top-[-1px] flex justify-between items-center py-4 px-4 lg:px-20 bg-[#121212] text-[#d6d8e6] z-10">
            <a href="/" className="text-xl text-white" style={{ fontFamily: 'billgates' }}>
                PixKeep
            </a>
            <nav className={`h-auto w-[90%] lg:w-auto py-5 pl-8 lg:pl-0 lg:pt-0 bg-[#121212] lg:bg-transparent absolute lg:relative ${isOpen} lg:top-1 right-[5%] transition-all duration-700 ease-in-out -z-10`}>
                <ul className="relative grid gap-4 lg:gap-6 grid-flow-row lg:grid-flow-col list-none">
                    <Link to="/" className={`headerlink text-xl ${curentPath.pathname === "/" ? "line-through text-primary font-bold" : ""}`} onClick={() => menuToggle()}>
                        Home
                    </Link>
                    {links.map((li, index) => {
                        return (
                            <Link to={`${li}`} key={index} className={`headerlink text-xl capitalize ${curentPath.pathname === "/" + li ? "line-through text-primary font-bold" : ""}`} onClick={() => menuToggle()}>
                                {li}
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            {token ? (
                <button
                    onClick={handleLogout}
                    className="absolute top-2 right-14 lg:right-10 cursor-pointer text-red-500"
                >
                    Logout
                </button>
            ) : (
                <Link
                    to="/signin"
                    className="absolute top-2 right-14 lg:right-10 text-3xl cursor-pointer"
                >
                    <BiUserCircle />
                </Link>
            )}
            {/* <Link to="/signin" className="absolute top-2 right-14 lg:right-10 text-3xl cursor-pointer"><BiUserCircle  /></Link> */}
            {
                nav ? <BiCross onClick={menuToggle} className="block cursor-pointer text-[1.8rem] lg:hidden rotate-45" /> : <HiBars3BottomRight onClick={menuToggle} className="block cursor-pointer text-[1.8rem] lg:hidden" />
            }
        </div>
    );
};

export default NavBar;