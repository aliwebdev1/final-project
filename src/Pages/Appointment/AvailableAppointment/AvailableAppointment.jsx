import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../../../component/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {

    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState({})

    const { data: appointOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://f23-3final-backend.vercel.app/appointmentOptions?date=${date}`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    refetch={refetch}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;