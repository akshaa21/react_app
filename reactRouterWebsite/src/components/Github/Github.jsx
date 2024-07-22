import React, { useEffect, useState } from 'react'
import { Link, useLoaderData} from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akshaa21')
    //     .then(res => res.json())
    //     .then(data => {
    //        setData(data)
    //     })
    // }) OR we can use "Loader" method for which we have to import "useLoaderData" , (loader is linked or routed in main.jsx)
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl flex flex-wrap justify-between'>
      <div className='p-11 mt-4 m-auto font-bold flex flex-col justify-center right-4 sm:mt-5'>
        To explore Github Profile 
        <Link
          to="https://github.com/akshaa21"
          className="text-blue-300 "
        >
          click here
        </Link>
      </div>
      <img src={data.avatar_url} alt="Git picture" width={200} className='m-auto border-double border-4 border-blue-800 rounded-full s'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/akshaa21') 
    return response.json()
}

