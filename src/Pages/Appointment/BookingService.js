import React from 'react';
import BookingModal from './BookingModal';

const BookingService = ({ service,setTreatment,date }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body justify-center">
                <h2 class=" text-sm font-bold text-center text-secondary">{name}</h2>
                <p className='text-center'>
                    {slots.length > 0 ?
                        <span> {slots[0]}</span> :
                        <span className='text-red-500'>Not Available slots!try another day</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                    
                    <label onClick={()=> setTreatment(service,date)} for="Booking-modal" disabled={slots.length === 0} class="btn btn-primary bg-gradient-to-r from-secondary to-primary" >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingService;