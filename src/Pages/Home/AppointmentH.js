import React from 'react';
import smile from '../../assets/images/doctor-small.png'
import background from '../../assets/images/appointment.png'
import { Link } from 'react-router-dom';

const AppointmentH = () => {
    return (

        <div style={{ background: `url(${background})` }} className=" hero bg-base-200">
            <div className="hero-content flex justify-center ">
                <div className=' hidden lg:block'><img src={smile} className="max-w-lg mt-[-100px] mb-[0px] rounded-lg " /></div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Make Appointment Today</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary"><Link to={'/appointment'}> Get Started</Link></button>
                </div>
            </div>
        </div>

    );
};

export default AppointmentH;