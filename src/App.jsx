import React from 'react'
import Navbar from './components/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Route'
import './global.css'
const App = () => {
  return (
    <>
        {/* <Navbar/> */}
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App