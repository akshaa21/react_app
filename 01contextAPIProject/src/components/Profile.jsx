import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if (!user.username) return <div className='text-xl font-semibold text-gray-700'><br/>Please login</div>
    else if(!user.password) return <div className='text-xl font-semibold text-gray-700'><br/>Please enter the Password</div>

    return <div className='text-xl font-semibold text-gray-700'><br/>Welcome {user.username}</div>

    
}

export default Profile;
