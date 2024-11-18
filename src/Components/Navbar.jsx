import { Link, NavLink } from "react-router-dom";
import logoPic from '../assets/logo3.png'

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/campaigns'>Donation Campaigns</NavLink></li>
        <li><NavLink to='/help'>How to Help</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar bg-[#1CABE2] py-5 lg:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-28" src={logoPic} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#1CABE2] border-2 text-white font-semibold">Login</a>
            </div>
        </div>
    );
};

export default Navbar;