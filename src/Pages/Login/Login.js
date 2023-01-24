import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";


const Login = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user) {
        console.log(user)
    }


    const onSubmit = data =>
        console.log(data);
       
        


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='content-center mx-7'>
                        <h1 className='text-center text-2xl mt-2'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>

                                </label>
                                <input type="email" class="input input-bordered w-full max-w-xs"
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
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                    
                                </label>
                                <input type="password" class="input input-bordered w-full max-w-xs"
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
                                    {errors.password?.type === 'required' && <p  className='text-red-500'>{errors.password.message}</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-500' >{errors.password.message}</p>}
                                    
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <input className='btn w-full max-w-xs mt-6' type='submit' value='Login' />
                            <p className='text-center mt-2'>New to doctors portal? <span className='font-light'>Create a account</span></p>
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