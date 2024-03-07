import React from 'react';
import { Helmet } from 'react-helmet';

const Appointment = () => {
    return (
        <div>
            <Helmet>
                <meta name='best doctor' content='doctst, oral' />
                <title>doctors house | appointment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>appointment</h1>
        </div>
    );
};

export default Appointment;