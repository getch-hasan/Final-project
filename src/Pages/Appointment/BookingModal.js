import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value
        const date = event.target.date.value
        const name = event.target.name.value
        const phone = event.target.phone.value
        const email = event.target.email.value

        setTreatment(null) //for close modal


    }
    return (
        <div className='mx-w-lg mx-h-max'>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='justify-center'>

                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' disabled type="text" value={format(date, 'PP')} name='date' /><br />
                        <select name='slot' className='mt-2 align-center px-3 rounded-md w-full h-12'>

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' placeholder='Full Name' type="text" name='name' required /><br />
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' placeholder='Phone' type="number" name="phone" id="" required /><br />
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' placeholder='Email' type="email" name="email" id="" />
                        <button type="submit" for="Booking-modal" className="btn mt-2  w-full h-12 text-lg " >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;