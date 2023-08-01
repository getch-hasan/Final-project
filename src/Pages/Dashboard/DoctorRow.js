import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index ,refetch}) => {
    const { name, img, specialty,email } = doctor;
    const deleteDoctor=(email)=>{
        fetch(`http://localhost:8000/doctor/${email}`,
        {
            method: 'DELETE',
            headers: {
               
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
         

        })


        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount===1){
                toast.success('Doctor Deleted')
                refetch();
            }
        })
    }
    return (

        <tr>
            <td>{index + 1}</td>
            <td> <img className='rounded-full w-20 h-20' src={img} alt="" /> </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button className='btn btn-xl btn-error' onClick={()=>deleteDoctor(email)}>Remove</button></td>

        </tr>



    );
};

export default DoctorRow;