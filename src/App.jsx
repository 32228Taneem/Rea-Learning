import { useState } from 'react'
import List from './List.jsx'//.jsx nai naad be import karay ja
import InpData from './Input.jsx'
import Appbar from './Appbar.jsx'
//import './App.css'
import MuiNavbar from './MuiNavbar.jsx'
import Cards from './Cards.jsx'
import RegForm from './RegForm.jsx'
import Carousel from './Carousel.jsx'
import demoVideo from '/src/assets/demoVideo.mp4';
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Patient from './components/Patient.jsx'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='patient' element={<Patient />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


// function App() {
//   // const [count, setCount] = useState(0)
//   // const slides = [
//   //   "https://i.ibb.co/ncrXc2V/1.png",
//   //   "https://i.ibb.co/B3s7v4h/2.png",
//   //   "https://i.ibb.co/XXR8kzF/3.png",
//   //   "https://i.ibb.co/yg7BSdM/4.png"
//   // ];

//   return (

//     // <main className='App'>
//     // <div className='max-w-lg'>


//       {/* <Carousel autoSlide>
//         {[
//           ...slides.map((s, index)=>( 
//             <img src={s} />
//           // <img src={s} key={index} alt={`Slide ${index+1}`} />
//         )),
//           <video key="video-slide" src={demoVideo} autoPlay muted loop />
//       ]}
//       </Carousel> */}
//       // <Cards />
//       // <Appbar />
//       // <RegForm />
//       // <MuiNavbar />


//       {/* <InpData/>
//     <List/> */}
//       {/* // <>
//     //   <div>
//     //     {/* <List/> function ku call karay */}

//       {/* <a href="https://vitejs.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div> */}
//       {/* //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p> */}

//     // </div>
//     // </main>
//   )
// }

export default App
