import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/appointment'>Appointment</NavLink></li>
        {
            user ? <li><button onClick={logOut} >Sign Out</button></li> : <li><NavLink to='/login'>Login</NavLink></li>
        }
        {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }

    </>


    return (
        <div className="navbar fixed bg-white z-50 top-0 justify-between">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost text-xl">Doctors House</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            <label tabIndex={0} role="button" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            {/* <label className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        </div>
    );
};

export default Header;