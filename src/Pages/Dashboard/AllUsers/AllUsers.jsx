import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/users");
            const data = res.json();
            return data;
        }
    })

    const deleteUser = (user) => {
        // const agree = window.confirm(`Are you want to delete ${user.email}`)
        // if (agree) {
        //     console.log('yes....');
        // }

        Swal.fire({
            title: "Are you sure?",
            text: `Are you want to ${user.email} this User!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/${user._id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User has been deleted.",
                                icon: "success"
                            });
                            // update ui re again
                            refetch()
                        }
                    })
            }
        });






    }


    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-semibold'>My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table mt-10 bg-white">
                    {/* head */}
                    <thead className='bg-gray-300'>
                        <tr className='font-bold text-accent'>
                            <th>Serial</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user?.email}</td>
                                <td><button className='btn btn-outline btn-sm'>Make Admin</button></td>
                                <td><button onClick={() => deleteUser(user)} className="btn btn-outline btn-sm btn-error">Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;