import React from 'react'
import Header from '../components/header/Header'

import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Add from '../components/Apply/Add'


const Home = () => {
  return (
    <>
      <div className="homePage">
        <Header/>
        <Outlet />
        {/* <input type="text" /> */}
        <Footer/>
      </div>
      
    </>
  )
}

export default Home
