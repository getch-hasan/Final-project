
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmMOdal = ({ deletingDoctor,refetch }) => {

    const { name,email } = deletingDoctor
    console.log(deletingDoctor)
    const deleteDoctor=(email)=>{
        fetch(`http://localhost:8000/doctor/${email}`,
            {
                method: 'DELETE',
                headers: {

                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },


            })


            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    toast.success('Doctor Deleted')
                    refetch();
                    
                }
            })
    }
    return (
        <div>


            <input type="checkbox" id="delete-confirm-modal" className='modal-toggle' />
            <form method="dialog" class="modal-box">
                <h3 class="font-bold text-lg">Are you sure you want to delete {name}</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action"  >

                    <label  className ="btn btn-xs" htmlFor="delete-confirm-modal">cancel</label>
                    <button className ="btn btn-xs btn-error"  onClick={()=>deleteDoctor(email)}>Remove</button>
                    
                </div>
            </form>

        </div>
    );
};

export default DeleteConfirmMOdal;