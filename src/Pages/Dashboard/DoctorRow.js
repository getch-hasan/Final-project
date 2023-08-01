import React from 'react';


const DoctorRow = ({ doctor, index ,setDeletingDoctor}) => {
    const { name, img, specialty } = doctor;
    
    return (

        <tr>
            <td>{index + 1}</td>
            <td> <img className='rounded-full w-20 h-20' src={img} alt="" /> </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
            <button className="btn btn-xl btn-error" for="delete-confirm-modal" onClick={()=>setDeletingDoctor(doctor)}>Remove</button>
           
                </td>

        </tr>



    );
};

export default DoctorRow;