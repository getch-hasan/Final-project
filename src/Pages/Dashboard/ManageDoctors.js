import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DoctorRow from './DoctorRow';
import DeleteConfirmMOdal from './DeleteConfirmMOdal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:8000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <h1> Loading....</h1>
    }

    return (
        <div className='grid justify-center'>
            <h2 className='text-2xl text-center mt-5'>Manage Doctors: {doctors.length}</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table">

                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((doctor, index) => <DoctorRow
                                    key={doctor._id}
                                    doctor={doctor}
                                    index={index}

                                    setDeletingDoctor={setDeletingDoctor}
                                ></DoctorRow>)

                            }



                        </tbody>
                    </table>

                </div>

            </div>
            {
                deletingDoctor && <DeleteConfirmMOdal
                    deletingDoctor={deletingDoctor}
                    refetch={refetch}
                ></DeleteConfirmMOdal>
            }



        </div>
    );
};

export default ManageDoctors;