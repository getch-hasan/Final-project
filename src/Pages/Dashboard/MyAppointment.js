import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const MyAppointment = () => {
    const [appointments, setAppointment] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    console.log(user.email)

    useEffect(() => {
        if (user) fetch(`https://doctor-portal-server-ag3l.onrender.com/booking?patient=${user.email}`,
            {
                method: 'GET', //this method for user verification
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                }
            }

        )
            .then(res => {
                console.log('res', res)
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
                <thead> <tr>
                    <th>Name</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>TREATMENT</th>
                </tr></thead>
                <tbody>
                    {
                        appointments.map((appointment, index) => <tr >
                            <td>{index + 1}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatment}</td>

                        </tr>

                        )

                    }
                </tbody>
            </table>


        </div>
    );
};

export default MyAppointment;