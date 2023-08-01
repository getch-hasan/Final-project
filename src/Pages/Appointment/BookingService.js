import React from 'react';


const BookingService = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body justify-center">
                <h2 className=" text-sm font-bold text-center text-secondary">{name}</h2>
                <p className='text-center'>
                    {slots.length > 0 ?
                        <span> {slots[0]}</span> :
                        <span className='text-red-500'>Not Available slots!try another day</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p className='text-center'><small>Price:${price}</small></p>
                <div className="card-actions justify-center">

                    <label onClick={() => setTreatment(service)} htmlFor="Booking-modal" disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-secondary to-primary" >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingService;