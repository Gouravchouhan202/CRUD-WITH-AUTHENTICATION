import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const Login = () => {

      let navigate = useNavigate();

    let [loginData, setLoginData] = useState({
        email:"",
        password:"",
        token:uuidv4()
    })

      let {email, password , token } = loginData;

        let handleChange=(e)=>{
            let {name, value} = e.target;
            setLoginData({...loginData, [name]: value})
        }

        let handleSubmit = async (e)=>{
            e.preventDefault ();
            let {data} = await axios.get("http://localhost:4000/users")
            let filteredData = data.filter((emp)=>{
                  return(
                    emp.email === loginData.email && emp.password === loginData.password
                  )
            })
            if(filteredData.length>0){
                navigate("/users")
                localStorage.setItem("TOKEN", token)
                setLoginData({})
                toast.success("LOGGED IN SUCCESSFULLY")
            } else{
                navigate("/register")
                toast.error("NOT REGISTERED")
            }
            
        }


  return (

    <main>
        <h1>Login</h1>
         <form onSubmit={handleSubmit}>
         <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name='email' value={email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name='password' value={password} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <button>Login</button>
            </div>
         </form>
    </main>
  )
}

export default Login