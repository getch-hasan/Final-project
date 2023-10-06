import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const MyAppointment = () => {
    const [appointments, setAppointment] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        if (user) fetch(`https://doctors-portal-6w1i.onrender.com/booking?patient=${user.email}`,
            {
                method: 'GET', //this method for user verification
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                }
            }

        )
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken') //unauthorized kew hole take page thek logout kore dibo
                    navigate('/home')

                }

                return res.json()
            })
            .then(data => {
                setAppointment(data)
            })
    }

        , [user])
    return (
        <div>

            <h1 className='mx-5 my-4'>My Appointment {appointments.length}</h1>

            <table className='table table-zebra w-full'>
                <thead><tr>
                    <th>index</th>
                    <th>Name</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>TREATMENT</th>
                    <th>PAYMENT</th>
                </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) => <tr
                            key={index}

                        >
                            <td>{index + 1}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatment}</td>
                            <td>{(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className='btn btn-xs btn-secondary'> Pay</button></Link>}</td>
                            <td>{(appointment.price && appointment.paid) && <span className='text-success'> Paid</span>}</td>

                        </tr>

                        )

                    }
                </tbody>
            </table>


        </div>
    );
};

export default MyAppointment;