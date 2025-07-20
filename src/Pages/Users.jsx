import { Heading3 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)
    const [search,setSearch]=useState('')

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log("Something Wrong",err)
            setLoading(false)
        })
    },[])

    const filterdUser=users.filter((user)=>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
    );

    




  return (
    <div className='bg-gray-300 min-h-screen w-full text-center flex flex-col items-center justify-center'>
        <h1 className='text-3xl mb-4'>User List</h1>

        <input className='p-2 text-center border-2 rounded-xl bg-white mb-3' type="text" placeholder='Search Name Here' value={search} onChange={(e)=>setSearch(e.target.value)} />


        {loading ? (
            <h3 className='text-center'>Loading...</h3>
        ) : filterdUser.length === 0 ? (
            <p className='text-center'>Please Search User First</p>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-4'>

                {filterdUser.map((user)=>{
                    return(
                        <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300' key={user.id}>
                            <h3 className='font-bold text-lg'>{user.name}</h3>
                            <p className='text-sm text-gray-700'>{user.username}</p>
                            <p className='text-sm text-gray-700'>{user.email}</p>
                            <p className='text-sm text-gray-700'>{user.phone}</p>
                            <p className='text-sm text-blue-600'>
                            <a href={`https://${user.website}`} target='_blank' rel="noopener noreferrer" className="text-blue-500 underline">{user.website}</a>
                            </p>
                            

                    </div>


                    )
                    


                })}



            </div>

        )
        }






      
    </div>
  )
}

export default Users
