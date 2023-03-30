import React from 'react';
import whiteing from '../../assets/images/whitening.png'
import cevity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import { Link } from 'react-router-dom';
const Services = () => {
    const services = [{
        _id: 1,
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor Ex nihil in veniam unde repudiandae ducimus commodi quam animi?'
    },
    {
        _id: 2,
        name: 'Cavity filling',
        img: cevity,
        description: 'Lorem ipsum dolor Ex nihil in veniam unde repudiandae ducimus commodi quam animi?'
    },
    {
        _id: 3,
        name: 'Teeth whitening',
        img: whiteing,
        description: 'Lorem ipsum dolor Ex nihil in veniam unde repudiandae ducimus commodi quam animi?'
    }
    ];
    return (
        <div>
            <div className='text-center mb-8 '><h5>OUR SERVICES</h5>
                <h1 className='text-xl'>Service We Provide</h1></div>
            <div className='grid lg:grid-cols-3 mx-5 sm:grid-cols-1'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                    <div className='ml-8 mx-w-mx w-1/2'>
                        <h1 className="text-5xl ">Exponential Dental <br /> Care,on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus reprehenderit eius aperiam, sunt nostrum quisquam, libero praesentium optio quos excepturi architecto. Perspiciatis, commodi exercitationem. Nisi, nobis! Earum, deleniti sequi! Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary"><Link to={'/appointment'}> Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;