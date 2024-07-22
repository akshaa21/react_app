import React, { useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='w-full border-2 border-gray-300 bg-green-50 shadow-lg m-auto rounded-lg'>
       <h3 className='text-3xl text-blue-500 font-medium p-3 mb-1'>Login</h3>
       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'
              className='w-64 p-1 border-2 border-gray-300 shadow-lg rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400'/><br/><br/>
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'
              className='w-64 p-1 border-2 border-gray-300 shadow-lg rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400'/><br/><br/>
       <button onClick={handleSubmit} className='text-xl font-medium text-white bg-blue-600 border-2 border-blue-800  rounded-xl p-2.5 mb-2 hover:bg-blue-400'>Submit</button>
    </div>
  )
}

export default Login
