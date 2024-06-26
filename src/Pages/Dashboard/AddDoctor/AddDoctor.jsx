import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../../component/Loading/Loading';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch("https://f23-3final-backend.vercel.app/appointmentSpecialty");
            const data = res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        // console.log(data);
        const image = data.image[0];
        const fromDate = new FormData()
        fromDate.append('image', image);
        fromDate.append('name', data.name)
        fromDate.append('email', data.email)
        fromDate.append('specialty', data.specialty)


        fetch('https://f23-3final-backend.vercel.app/doctors', {
            method: 'POST',
            body: fromDate
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Doctor Added Confirmed',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })

                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: "Doctor is not Post",
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                }
            })
        navigate('/dashboard/manage-doctors')

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-semibold'>Add a New Doctor</h1>
            <div className='w-1/3 bg-white rounded-md p-6 mt-5'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <input type="text" {...register('name', { required: "Must be write doctor name" })} placeholder="Doctor Name" className="my-3 input input-bordered w-full " />
                    {errors.name && <span className='text-red-500 mt-2'>{errors.name.message}</span>}

                    <input type="email" {...register('email', { required: "Must be write doctor email" })} placeholder="doctor email here" className="my-3 input input-bordered w-full " />
                    {errors.email && <span className='text-red-500 mt-2'>{errors.email.message}</span>}

                    <select {...register('specialty')} className="my-3 select select-bordered w-full ">
                        {
                            specialties?.map((specialty, i) => <option value={specialty.name} key={i}>{specialty.name}</option>)
                        }
                    </select>

                    <input type="file"  {...register('image', { required: "Please add image" })} className="my-3 input input-bordered w-full " />
                    {errors.image && <span className='text-red-500 mt-2'>{errors.image.message}</span>}


                    <input type='submit' value="Add Doctor" className="mt-3 w-full btn btn-md bg-accent text-base-100 border-0 font-bold" />

                </form>
            </div>


        </div>
    );
};

export default AddDoctor;