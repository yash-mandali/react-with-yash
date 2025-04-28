import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='text-red-600'>please login</div>
    
    return <div>Welcome {user.username} your password is {user.password }</div>
}

export default Profile;