import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, updateUserName, googleLogin } = useContext(AuthContext)
    const [authError, SetAuthError] = useState('')

    // console.log(createUser);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                if (user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your account has been created',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                updateUserName(data.name)
                    .then(() => {
                        saveTheUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))

                // call the api post function


            })
            .catch(error => {
                SetAuthError(error.message)
            })

    }

    const saveTheUser = (name, email) => {
        const userObject = { name, email }
        fetch('https://f23-3final-backend.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }



    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your account has been created By using Google',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
            .then(error => {
                SetAuthError(error.message)
            })
    }

    return (
        < div className="hero min-h-screen " >
            <div className="hero-content flex-col ">

                <div className="card shrink-0 w-96  shadow-2xl bg-base-100">
                    <h1 className="text-xl font-semibold text-center mt-8">Sign Up </h1>

                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "Please give your valid Name" })} type="text" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500 mt-2'>{errors.name.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Give your valid email" })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500 mt-2'>{errors.email.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>


                            <input
                                {...register("password", {
                                    required: "Password is Required",
                                    minLength: {
                                        value: 8, message: "password must be 8 characters long",
                                    },
                                    pattern: { value: /[A-Z].*[A-Z].*[#?!@$%^&*]/, message: "please give Two uppercase and special characters" },


                                })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-500 mt-2'>{errors.password.message}</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-accent">SIGN UP</button>
                        </div>

                        {authError && <p className='text-red-500'>{authError}</p>}

                        <p className='text-sm text-center mt-2'>Already Have an account? <Link className='text-primary' to='/login'>Please Login</Link> </p>
                        <div className="divider">OR</div>

                        <div className="form-control ">
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-accent">CONTINUE WITH GOOGLE</button>
                        </div>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;