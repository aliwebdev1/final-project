import React from 'react';
import loader from '../../assets/images/loader.gif'
const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>

            <img style={{ width: '200px', height: '200px' }} src={loader} alt="loader" />



        </div>
    );
};

export default Loading;