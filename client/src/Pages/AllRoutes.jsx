import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import AllCatagory from './AllCatagory'
import Home from './Home'
import ErrorComponents from '../Components/ErrorComponents'
const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/healthcare" element={<AllCatagory/>}/>
           <Route  path="*" element={<ErrorComponents />} />
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes