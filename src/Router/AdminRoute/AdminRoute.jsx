import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../component/Loading/Loading';

const AdminRoute = ({ children }) => {

    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;