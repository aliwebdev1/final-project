import React from 'react';
import dentalImage from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const ExceptionalDental = () => {
    return (
        <div className='md:w-3/4 mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:space-y-5 md:ps-10 mt-10 md:mt-0'>
                        <h1 className="text-2xl md:text-5xl font-bold">Your New Smile Starts <br className='hidden md:block' /> Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                    <img src={dentalImage} className=" md:w-2/5 rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;