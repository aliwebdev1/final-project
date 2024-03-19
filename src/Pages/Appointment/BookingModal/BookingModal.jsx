import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ selectedDate, treatment, setTreatment }) => {

    const date = format(selectedDate, 'PP')
    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.fullName.value;
        const number = form.number.value;
        const email = form.email.value;


        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName: patientName,
            slot,
            number,
            email,
        }
        console.log(booking);

        // send the booking in backend
        setTreatment(null)

    }



    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className='flex justify-between'>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <label htmlFor="bookingModal" className=" cursor-pointer bg-accent px-4 py-2 text-base-100 rounded-full">X</label>

                    </div>

                    <form onSubmit={handleBooking}>
                        <input type="text" defaultValue={date} disabled placeholder="Type here" className="my-3 input input-bordered w-full " />

                        <select name='slot' className="my-3 select select-bordered w-full ">
                            {
                                slots?.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>

                        <input type="text" required name='fullName' placeholder="Full Name" className="my-3 input input-bordered w-full " />

                        <input type="number" required name='number' placeholder="Phone Number" className="my-3 input input-bordered w-full " />

                        <input type="email" name='email' required placeholder="emaiil" className="my-3 input input-bordered w-full " />

                        <input type='submit' value="SUBMIT" className="mt-3 w-full btn btn-md bg-accent text-base-100 border-0 font-bold" />

                    </form>


                </div>
            </div>

        </div>
    );
};

export default BookingModal;