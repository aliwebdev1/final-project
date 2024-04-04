import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2';
import Loading from '../../../component/Loading/Loading';

const ManageDoctors = () => {

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch("https://f23-3final-backend.vercel.app/doctors");
            const data = res.json();
            return data;
        }
    })


    const deleteDoctor = (doctor) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Are you want to delete ${doctor?.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://f23-3final-backend.vercel.app/doctors/${doctor._id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${doctor?.name} has been deleted`,
                                icon: "success"
                            });
                            // update ui re again
                            refetch()
                        }
                    })
            }
        });

    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-semibold'>Manage Doctors {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table mt-10 bg-white">
                    {/* head */}
                    <thead className='bg-gray-300'>
                        <tr className='font-bold text-accent'>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Doctor Email</th>
                            <th>Doctor Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <img className='rounded-full w-10 h-10' src={`data:image/png;base64,${doctor.image}`} alt="base 64 image" />


                                </td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.name}</td>
                                <td><button onClick={() => deleteDoctor(doctor)} className="btn btn-outline btn-sm btn-error">Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;