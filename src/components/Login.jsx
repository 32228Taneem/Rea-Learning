import './Stylings/Navigation.css'
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [formData,SetFormData]=useState({
        email:"",
        password:"",
        name:""
    })
    const navigate=useNavigate()
    function handleChange(e){
        const {name,value}=e.target
       // console.log(e)
        //prev is used to access other objects like name,password
        //SetFormData((prev)=>({}))
        SetFormData((prev)=>({
            ...prev,//it is a spred operator ,spreading the every object and getting the specific objects key
            [name]:value//picking the specific key and storing the user entered value
    }))
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        axios.post(`https://jobportal.codegnan.com/api/v1/studentlogin`,{username:formData.email,password:formData.password})
        .then((res)=>{
          console.log("status code",res.data)
          if(res.status===200){
            console.log("login succesful")
            localStorage.setItem("student_id",res.data.student_id)
            navigate("/")
            return;
          }
        })
        .catch((error)=>{
          console.log("status code",error.status)
          alert("invalid credentials")
        })
        //alert("handleling submit")
    }
    //this function helps to save the entered input field data
    function handleEvent(e){
        console.log(e.target.value)
        //event always carry the target object from which we get information
        setEmail(e.target.value)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <h1 className='h1-container'>Login Component</h1>
        <p><input type="email" placeholder='enter ur email' name='email' onChange={handleChange}
        // onChange={handleSubmit} 
        />
        </p>
        <p><input type="password" placeholder='password' name='password' onChange={handleChange}
        // onChange={(e)=>{setPassword(e.target.value)}}
        />
        </p>
        <p><input type="text" placeholder='enter  ur name' name='name' onChange={handleChange} /></p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
