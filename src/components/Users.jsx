import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from './axios'
import { Link } from 'react-router-dom'
const Users = () => {
  let [content, setContent] = useState([])

      useEffect(()=>{
         axios.get("/users")
         .then((response)=>{
          setContent(response.data)
         })
      },[])

      let deleteUser = (id)=>{
        axios.delete(`/users/${id}`)
        window.location.assign("/users")
      }

      // console.log(content);
  return (
    <section className='userBlock'>
        <article className='container'>
          <header>
            Users
          </header>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
                <th>COMPANY</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {content.map(user=>(
                
                <tr key={user.id}>
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.salary}</td>
                   <td>{user.company}</td>
                   <td><Link to={`/editusers/${user.id}`}>EDIT USER</Link></td>
                   <td><button onClick={()=>deleteUser(user.id)}>DELETE</button></td>
                </tr>
              ))}
            </tbody>
           
          </table>
        </article>
    </section>
  )
}

export default Users;