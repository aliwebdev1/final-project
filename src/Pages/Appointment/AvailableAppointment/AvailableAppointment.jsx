import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState({})

    const { data: appointOptions = [] } = useQuery({
        queryKey: 'appointmentOptions',
        queryFn: async () => {
            const res = await fetch("appointmentOptions.json");
            const data = res.json();
            return data;
        }
    })

    return (
        <div className='my-16'>
            <div className='text-center'>
                <p className='text-secondary text-xl font-semibold'>Available Services on {format(selectedDate, 'PP')}.</p>
                <h4 className='text-accent'>Please select a service.</h4>
            </div>
            <div className='grid md:grid-cols-3 gap-5 px-5'>
                {
                    appointOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;