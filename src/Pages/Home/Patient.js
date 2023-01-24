import React from 'react';

const Patient = ({ petient }) => {
    return (


        <div className="py-8 text-black grid grid-cols-1 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:items-center justify-center">

            <div className='items-center justify-center'><p>
                Lorem ipsum dolor, earum laboriosam exercitationem iste quisquam iure! Doloremque, itaque sapiente.
            </p>
            </div>

            <div className="flex items-center justify-around ">
                <img className='w-16' src={petient.img} />
                <div>
                    <strong>{petient.name}</strong>
                    <p>Technical advisor</p>
                </div>
            </div>
        </div>



    );
};

export default Patient;