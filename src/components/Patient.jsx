import React from 'react'
import { useState } from 'react'//hook use effect ek hook
import './Stylings/Patient.css'
import axios from 'axios'

export default function Patient() {
    const [patientData,SetpatientData]=useState({
        name:"",
        age:"",
        number:"",
        gender:"",
        salary:"",
        weight:"",
        doctor:""
    }
    )
    function handleChange(e){
        const {name,value}=e.target
        SetpatientData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(patientData)
        axios.post(`https://doc-back.onrender.com/doctors`,{
            name:patientData.name,
            age:patientData.age,
            gender:patientData.gender,
            salary:patientData.disease,
            specialization:patientData.weight
        })
        .then((res)=>{
            console.log(res)
        })
        console.log(patientData)
    }
    return (
        <div className='patent-container'>
            <h1>Welcome to THis Patient page</h1>
            <form action="" onSubmit={handleSubmit} >
                <p>
                    <input type="text" placeholder='name'  name='name' onChange={handleChange}/>
                </p>
                <p>
                    <input type="number" placeholder='age' name='number' onChange={handleChange}/>
                </p>
                <p>
                    <input type="radio" placeholder='gender' name='gender' value="male" onChange={handleChange}/>Male
                    <input type="radio" placeholder='gender' name='gender' value="female" onChange={handleChange}/>Female
                </p>
                <p>
                    <input type="text" placeholder='Desease' name='desease' onChange={handleChange}/>
                </p>
                <p>
                    <input type="number" placeholder='weight' name='weight' onChange={handleChange}/>
                </p>
                <p>
                    <input type="text" placeholder='doctor' name='doctor' onChange={handleChange}/>
                </p>
                <button color="secondary">Submit</button>
            </form>
        </div>
    )
}
