import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;