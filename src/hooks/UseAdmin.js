import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const email = user.email
        if (email) {
            fetch(`https://doctor-portal-server-ag3l.onrender.com/admin/${email}`,
                {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },

                })
                .then(res => res.json())
                .then(data =>

                // setToken(data)
                {
                    console.log(data)

                    setAdmin(data.admin);
                }
                )

        }
    }, [user])
    return [admin]

}
export default useAdmin