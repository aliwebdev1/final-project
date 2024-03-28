import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);
    const email = user.email;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/bookings?email=${email}`);
            const data = res.json();
            return data;
        }
    })



    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-semibold'>My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table mt-10 bg-white">
                    {/* head */}
                    <thead className='bg-gray-300'>
                        <tr className='font-bold text-accent'>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{booking?.patientName}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;