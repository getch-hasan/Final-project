import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmain = () => {
        fetch(`https://doctors-portal-6w1i.onrender.com/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }

        )
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.result.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made an admin')

                }
                console.log(data)
            });
    }

    return (
        <tr >

            <td>{user.email}</td>

            <td>{role !== 'admin' && <button onClick={makeAdmain} className="btn btn-xs">Make admin</button>}</td>
            <td>{role === 'admin' && <button className="btn btn-xs">remove admin</button>}</td>

        </tr>
    );
};

export default User;