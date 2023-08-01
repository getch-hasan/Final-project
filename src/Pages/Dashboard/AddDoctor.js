import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:8000/service')
        .then(res => res.json()))

    /*
     *3 way to image storing
     1.third party storage // free open public storage for practice other way privet paid 
     1.your won storage on your server
     3.database:mongoDB
     YUP:to validate file
    */
    const imageStorageKey = 'be2a267b2edab0d09da4dd3b3073e7c5'

    const add = async data => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    //for send to database
                    fetch('http://localhost:8000/doctor',
                        {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(doctor)

                        })


                        .then(res => res.json())
                        .then(inserted => {
                                if(inserted.insertedId){
                                    toast.success('Doctor added successfully')
                                    reset()
                                }
                                else{
                                    toast.error("Failed to add doctor")
                                }
                            })

                    
                }
                

            })





    }
    if (isLoading) {

    }
    return (
        <div>
            <h2 className="text-3xl">Add a new doctor</h2>

            <form onSubmit={handleSubmit(add)}>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select w-full max-w-xs">

                        {
                            services?.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                        }

                    </select>






                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input type="file" className="file-input w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Please enter Your photo'
                            },

                        })} />


                </div>

                <input className='btn w-full max-w-xs mt-6' type='submit' value='Submit' />

            </form>
        </div>
    );
};

export default AddDoctor;