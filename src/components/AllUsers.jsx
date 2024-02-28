import React, { useEffect, useState } from 'react'
import Search from './Search'
import DisplayUsers from './DisplayUsers'
import axios from './axios'
const AllUsers = () => {
    let [state,setState]= useState(null)
    let [searchTerm, setSearchterm] = useState("")

     let fetchUsers = async ()=>{
        let {data} = await axios.get("users")
        setState(data)
     }
     useEffect(()=>{
        fetchUsers();
     },[])

     let handleSearch = (term)=>{
        setSearchterm(term)
     }

     let FilteredUsers = state?.filter(val=>{
        if(searchTerm==""){
            return val;
        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
        }
     }).map(users=> <DisplayUsers  key={users.id} {...users}/>)




  return (
    <main className='allusers'>
            <h1>All Users</h1>
            <Search handleSearch={handleSearch}/>
            <div className='users'>
                {
                    state===null ? "Loading......" : FilteredUsers
                } 
            </div>
    </main>
  )
}

export default AllUsers