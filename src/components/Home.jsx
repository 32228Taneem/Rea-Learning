import React,{useEffect, useState} from 'react'
import './Stylings/Home.css'
import axios from 'axios'

export default function Home() {
  const  [doctors,setDoctors]=useState([])
  useEffect(()=>{
    axios.get(`https://doc-back.onrender.com/doctors`)
    .then((res)=>{
      console.log(res.data)
      setDoctors(res.data)
    })
    console.log("from useeffect")
  },[])
  return (
    <div className='doctor-container'>
        {
          doctors.map((i)=>(
            <div className='doctor' key={i.id}>
              <p>Name:{i.name}</p>
              <p>specialization:{i.specialization}</p>
              <p>Age:{i.age}</p>
              <p>Gender:{i.gender}</p>
            </div>
          ))
        }
      {/* {console.log("from return")} */}
      <h1 className='h1-container'>Home Component</h1>
    </div>
  )
}
