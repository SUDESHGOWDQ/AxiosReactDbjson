import { useState } from 'react'
import './Create.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const[values,setValues]=useState({name:"",email:""})
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/users',values)
        .then(res=>{console.log(res)
            navigate('/')
        })
    }
  return (
    <div className="Create">
    <form onSubmit={handleSubmit}>
        <h1>Create Data</h1>
        <input value={values.name} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} name="name" type="text" placeholder="Enter Your Name"></input>
        <br></br>
        <input value={values.email} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} name="email" type="email" placeholder="Enter Your Email"></input>
        <br></br>
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Create
