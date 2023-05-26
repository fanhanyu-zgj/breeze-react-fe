import React from 'react'

const GuestLayout = () => {
    const {user} =useAuthContext()
    return user?<Outlet/>:<Navigate to='/login'/>;
}

export default GuestLayout