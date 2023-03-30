import React from 'react';
import { useQuery } from 'react-query';
import User from './User';

const Users = () => {
    const { data: users, isLoading, error, refetch } = useQuery(['users'], () =>
        fetch(`https://doctor-portal-server-ag3l.onrender.com/user`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`//user gulo secure thakar karone header k methode na pathale ui access pabena.

                }
            }

        )
            .then(res => res.json()));
    if (isLoading) {
        return <p>Loading......</p>
    }
    return (
        <div>

            <table className='table table-zebra w-full'>
                <thead><tr>
                    <th>Email</th>
                    <th>Admin</th>

                    <th>Remove</th>
                </tr></thead>
                <tbody>
                    {
                        users.map((user, index) => <User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></User>

                        )

                    }
                </tbody>
            </table>



        </div>
    );
};

export default Users;