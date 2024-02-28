import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
const Layouts = () => {
  return (
    <>
    <Navbar/>
    <main className='sidebar'>
        <Toaster/> 
        <div className="layout">
        <ul>
            <li>
                <Link to="/">Create User</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/editusers/:id">Edit Users</Link>
            </li>
            <li>
                <Link to="/allusers">All Users</Link>
            </li>
        </ul>
        </div>
        {/* <hr/> */}
        <Outlet/>
       
    </main>
    </>
  )
}
export default Layouts;