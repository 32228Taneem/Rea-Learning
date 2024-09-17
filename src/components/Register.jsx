import React,{useState} from 'react'
import './Stylings/Navigation.css'
import Fruits from './Fruits'

export default function Register() {
  const [fruits,setFruits]=useState([
    {fruitName:"mango",fruitPrice:60,fruitDescription:"tasty healthy"},
    {fruitName:"watermellon",fruitPrice:40,fruitDescription:"contains potasium & calcium"},
    {fruitName:"Papaya",fruitPrice:30,fruitDescription:"contains vitamin A"},
    {fruitName:"Apple",fruitPrice:20,fruitDescription:"apple a day keeps a doctor away"}
  ])
  return (
    <div>
      <h1 className='h1-container'>Register Component</h1>
        <Fruits myFruits={fruits}/>
    </div>
  )
}
