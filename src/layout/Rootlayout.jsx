import React from 'react'
import Navbar from "../components/common/Navabr"
import { Outlet } from 'react-router-dom'
import Footer from "../components/common/Footer"


const Rootlayout = () => {
  return (
    <div>

<Navbar/>

<main>



    <Outlet/>


</main>

<Footer/>
    </div>
  )
}

export default Rootlayout