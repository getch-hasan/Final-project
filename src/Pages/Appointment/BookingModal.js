import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const [user] = useAuthState(auth);
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
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='justify-center'>

                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' disabled type="text" value={format(date, 'PP')} name='date' /><br />
                        <select name='slot' className='mt-2 align-center px-3 rounded-md w-full h-12'>

                            {
                                slots.map((slot,index) => <option 
                                   key={index}
                                   value={slot}>{slot}</option>)
                            }
                        </select>
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' value={user?.displayName || ''} type="text" name='name' disabled /><br />
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' disabled value={user?.email || ''} type="email" name="email" id="" />
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' placeholder='Phone' type="number" name="phone" id="" required /><br />

                        <button type="submit" for="Booking-modal" className="btn mt-2  w-full h-12 text-lg " >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;