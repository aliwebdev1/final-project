import React from 'react';
import bannerImage from '../../../assets/images/chair.png'
import bgBanner from '../../../assets/images/bg.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgBanner})` }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="md:w-2/5 rounded-lg shadow-2xl" />
                <div className='md:space-y-5'>
                    <h1 className="text-2xl md:text-5xl font-bold">Your New Smile Starts <br className='hidden md:block' /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;