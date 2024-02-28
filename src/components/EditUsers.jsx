import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "./axios";
const EditUsers = () => {
  let { id } = useParams();
  let navigator = useNavigate()
  let [state, setState] = useState({
    name: "",
    salary: "",
    company: "",
  });

  let { name, salary, company } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    axios.get(`/users/${id}`).then((response) => {
      console.log(response.data);
      setState({
        ...state,
        name: response.data.name,
        salary: response.data.salary,
        company: response.data.company,
      });
    });
  }, []);

  let handleSubmit = (e)=>{
    e.preventDefault();
    let payload = {name, salary, company}
    axios.put(`/users/${id}`, payload)
    .then(()=>{
      console.log("Data has been updated");
    })
    navigator("/users")
  }

  return (
    <section className="content">
      <main className="innerContent">
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Salary</label>
            <input
              type="text"
              name="salary"
              placeholder="Enter Salary"
              value={salary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company"
              value={company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Update User</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default EditUsers;
