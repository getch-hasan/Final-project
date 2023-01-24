import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookingService from './BookingService';


const AvailableAppointment = ({ date, }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {

        fetch('http://localhost:8000/service')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])


    return (
        <div className='m-10'>
            <div>
                <h3 className='text-center text-xl'>Available service on {format(date, 'PP')}.</h3>
                <p className='text-center'>Please select service</p>
            </div>
            <div className='my-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
                {
                    services.map(service => <BookingService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}


                    ></BookingService>)
                }



            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}

        </div>

    );
};

export default AvailableAppointment;