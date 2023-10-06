import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SingUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    const navigate = useNavigate()


    let singUpError;
    /* if (gUser || user) {
        
        // navigate('/appointment')//token hooks use korar age 
    } */
    if (token) {

        navigate('/appointment')
    }
    if (loading || gLoading || updating) {
        return <div className='justify-center grid h-screen items-center'><button className="btn loading">loading</button></div>
    }
    if (error || gError || Uerror) {
        singUpError = <small><p className='text-red-500'>{error?.message || gError?.message || Uerror?.message}</p></small>
    }

    const signUp = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        const success = await updateProfile({ displayName: data.name });
        if (success) {
            alert('Updated profile');
            // navigate('/appointment')/sing up er por direct navigate korar jonno hooks use er age

        }

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='content-center mx-7'>
                        <h1 className='text-center text-2xl mt-2'>SignUp</h1>
                        <form onSubmit={handleSubmit(signUp)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>
                                <input type="text" className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Please enter Your Name'
                                        },

                                    })} />
                                {errors.name?.type === 'required' && <p className='text-red-500' >{errors.name.message}</p>}

                            </div>
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
                            {singUpError}

                            <input className='btn w-full max-w-xs mt-6' type='submit' value='Signup' />
                            <p className='text-center mt-2'>Already have an account? <Link to='/login'><span className='font-light text-primary'>Please login</span></Link></p>
                        </form>
                    </div>
                   
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className='btn mx-7  my-4'>TO CONTINUE WITH GOOGLE</button>

                </div>


            </div>
        </div>
    );
};

export default SingUp;