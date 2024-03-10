import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='btn btn-md bg-gradient-to-l from-primary to-secondary border-0 text-white font-bold'>{children}</button>
        </div>
    );
};




export default PrimaryButton;