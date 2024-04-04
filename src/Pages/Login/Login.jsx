import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { userSignIn, googleLogin } = useContext(AuthContext)
    const [loginError, SetLoginError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        userSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login In Successfully Done',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                navigate(from, { replace: true })

            })
            .then(error => {
                SetLoginError(error.message)
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
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">

                <div className="card shrink-0 w-96  shadow-2xl bg-base-100">
                    <h1 className="text-xl font-semibold text-center mt-8">Login</h1>

                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "give your valid email" })} type="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className='text-red-500 mt-2'>{errors.email.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: "Password is Required",
                                })}

                                type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-500 mt-2'>{errors.password.message}</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">LOGIN</button>
                        </div>

                        {loginError && <p className='text-red-500'>{loginError}</p>}

                        <p className='text-sm text-center mt-2'>New to Doctors Portal? <Link className='text-primary' to='/sign-up'>Create new account</Link> </p>
                        <div className="divider">OR</div>

                        <div className="form-control ">
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-accent">CONTINUE WITH GOOGLE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;