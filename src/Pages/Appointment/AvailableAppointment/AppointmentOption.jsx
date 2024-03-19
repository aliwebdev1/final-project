import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { _id, name, slots } = appointmentOption;

    return (
        <div className="card text-center shadow-xl px-4 ">
            <div className="card-body">
                <h2 className="text-2xl text-secondary font-semibold text-center">{name}</h2>
                <p className=''>{slots[0]}</p>
                <p className='mb-5'>Available {slots.length} {slots.length > 1 ? "Spaces" : "Space"} </p>

                {/* The button to open modal */}
                <label
                    disabled={slots.length == 0}
                    onClick={() => setTreatment(appointmentOption)} htmlFor="bookingModal" className="w-[50%] mx-auto btn btn-md bg-gradient-to-l from-primary to-secondary border-0 text-white font-bold">Book Appointment</label>

            </div>
        </div>
    );
};

export default AppointmentOption;