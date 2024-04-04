import React from 'react';
import PrimaryButton from '../../../../component/PrimaryButton/PrimaryButton';
import doctorImage from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'


const MakeAppointment = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }} className='md:mt-32 mb-10'>
            <div className="hero-content block md:flex p-0">
                <img src={doctorImage} className="hidden md:block md:w-2/5  rounded-lg md:-mt-28" />
                <div className='md:space-y-2 text-base-100 px-8 py-16 md:p-0'>
                    <h3 className='text-secondary font-bold'>Appointment</h3>
                    <h1 className="text-2xl md:text-5xl font-bold ">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;