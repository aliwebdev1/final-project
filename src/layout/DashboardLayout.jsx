import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>

            <div className="drawer lg:drawer-open mt-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100 py-10 px-8">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-0 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <li><Link className='rounded-none focus:bg-slate-100 ' to='/dashboard'>My Appointment</Link></li>
                        <li><Link className='rounded-none focus:bg-slate-100 ' to='/dashboard/all-users'>All Users</Link></li>

                        <li><Link className='rounded-none focus:bg-slate-100 ' to='/dashboard'>Add a Doctor</Link></li>
                        <li><Link className='rounded-none focus:bg-slate-100 ' to='/dashboard'>Manage Doctors</Link></li>
                        <li><Link className='rounded-none focus:bg-slate-100 ' to='/'>Home</Link></li>



                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;