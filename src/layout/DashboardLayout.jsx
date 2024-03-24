import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>

            <div className="drawer lg:drawer-open mt-24">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100 ">
                    {/* Page content here */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard'>My Appointment</NavLink></li>
                        <li><NavLink to='/dashboard'>My Appointment</NavLink></li>
                        <li><NavLink to='/dashboard'>My Appointment</NavLink></li>
                        <li><NavLink to='/dashboard'>My Appointment</NavLink></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;