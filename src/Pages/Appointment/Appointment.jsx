import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <Helmet>
                <meta name='best doctor' content='doctor portal' />
                <title>doctors house | appointment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div>
                <AppointmentBanner
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                ></AppointmentBanner>
                <AvailableAppointment
                    selectedDate={selectedDate}
                ></AvailableAppointment>
            </div>

        </div>
    );
};

export default Appointment;