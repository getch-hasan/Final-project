import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useToken from '../../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let singInError;
    const navigate = useNavigate()
    const location = useLocation()
    const [token]=useToken(user || gUser)
    let from = location.state?.from?.pathname || '/home'
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })

        }
    }, [token, from, navigate])
    if (loading || gLoading) {
        return <div className='justify-center grid h-screen items-center'><button className="btn loading">loading</button></div>
    }
    if (error || gError) {
        singInError = <small><p className='text-red-500'>{error?.message || gError?.message}</p></small>
    }
  


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }







    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='content-center mx-7'>
                        <h1 className='text-center text-2xl mt-2'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input type="email" className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'provide a valid email'
                                        }
                                    })} />
                                {errors.email?.type === 'required' && <p className='text-red-500' >{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500' >{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input type="password" className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password required'
                                        },
                                        minLength: {
                                            value: 6
                                            ,
                                            message: 'minimum 6 character required'

                                        }
                                    })} />
                                {errors.password?.type === 'required' && <p className='text-red-500'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500' >{errors.password.message}</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>


                            </div>
                            {singInError}
                            <input className='btn w-full max-w-xs mt-6' type='submit' value='Login' />
                            <p className='text-center mt-2'>New to doctors portal? <Link to='/singUp'><span className='font-light text-primary'>Create a account</span></Link></p>
                        </form>
                    </div>
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className='btn mx-7  my-4'>TO CONTINUE WITH GOOGLE</button>

                </div>


            </div>
        </div>
    );
};

export default Login;