import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl text-primary'> welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-50 bg-base-100 text-base-content">
                    {/*   <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    {admin && <li><Link to='/dashboard/allUsers'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;