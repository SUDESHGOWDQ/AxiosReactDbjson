import axios from 'axios'
import './Home.css'
import { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Home = () => {
    const[data,setData]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
       axios.get('http://localhost:3000/users')
       .then(res=>setData(res.data))   
    },[])


    function handleDelete(id){
        axios.delete('http://localhost:3000/users/'+id)
        .then(res=>console.log(res))
        navigate('/')
    }


  return (
    <div className='Home'>

    <main>
    <h1>AXIOS CRUD</h1>
    <Link to={'/create'}><button>Add +</button></Link>
    </main>

<hr></hr>






    <table  cellPadding={'10'} cellSpacing={'10'}>
        <thead>
            <tr>
                <td><b>Name</b></td>
                <td><b>Email</b></td>
                <td><b>Action</b></td>
            </tr>
        </thead>
        
        <tbody>
            {
                data.map((user,index)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                               <Link to={`/read/${user.id}`}><button>Read</button></Link>
                                <Link to={`/update/${user.id}`}><button>Update</button></Link>
                                <button onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}

export default Home
