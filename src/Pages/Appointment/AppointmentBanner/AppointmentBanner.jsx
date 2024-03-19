import React, { useState } from 'react';
import bannerImage from '../../../assets/images/chair.png'
import bgBanner from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';



const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div style={{ backgroundImage: `url(${bgBanner})` }} className="py-28">
            <div className="md:flex gap-12 md:flex-row-reverse justify-center">
                <img src={bannerImage} className="md:w-2/5 rounded-lg shadow-2xl" />
                <div className='bg-base-100 shadow-lg rounded-lg'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;