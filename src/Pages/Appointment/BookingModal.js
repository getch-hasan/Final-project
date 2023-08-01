import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, refetch, setTreatment }) => {
    const { name, _id, slots } = treatment;
    const [user] = useAuthState(auth);

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value
        const phone = event.target.phone.value
        const date = event.target.date.value
        const booking = {
            treatmentId: _id,
            treatment: name,
            date,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: phone,
        }
        console.log()
        fetch('https://doctor-portal-server-ag3l.onrender.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data, date)
                if (data.success) {
                    toast(`Appointment is set for ${date} at ${slot}`)
                }
                else {
                    toast.error(`this appointment already exist for ${date} at ${slot}`)
                }
                refetch();//ekta booking dear por automatic abr  fetch kore available data dekhabe r reload kora lagbena
                setTreatment(null) //for close modal

            })





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
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' value={user?.displayName || ''} type="text" name='name' />
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' disabled value={user?.email || ''} type="email" name="email" id="" />
                        <input className='mt-2 align-center px-3 rounded-md w-full h-12' placeholder='Phone' type="number" name="phone" id="" required /><br />

                        <button type="submit" htmlFor="Booking-modal" className="btn mt-2  w-full h-12 text-lg " >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;