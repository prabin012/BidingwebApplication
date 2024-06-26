import { useContext, useState } from 'react';

import './body.css'
import { AppContext } from '../../context/AppContect';
// import FoodItem from '../menu/FoodItem';
import Cards from '../cards/Cards';
import Contact from '../contact/Contact';
import axios from 'axios';
import Event from '../event/Event';
import Card from '../cards/Card';
import Events from '../event/Events';
import AllEvent from '../event/AllEvent';
import Add from '../Apply/Add';



const Body = () => {
  const { student, teachers } = useContext(AppContext);
  
   

  return (

    <>

      <div className="body">
        <div className="bodycolor">
          <div className="bodyItem">
            <div className="bodyContainer">
               

          <form action="" className="SearchJob">
            <input type="text" className="inputArea" placeholder='Search ' />
          
          </form>
          
              <label className='jobfind' htmlFor="">Find Your
Next Deal!
                !</label>
              <span className='jobFins'>Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.</span>
              <span className='jobFins'>Are you an artist looking to share your vision with the world? Join our vibrant community of creators and gain exposure for your work. Showcase your talent, connect with a global audience, and participate in our regular bidding events that allow your art to reach discerning collectors.</span>
             <button className='ExploreB'>GET STARTED</button>
            </div>
          </div>
        </div>

      </div>
      {/* <Event /> */}
      <AllEvent/>
      <Card/>
      {/* <FoodItem /> */}
      {/* <Events/> */}
      <Cards />
      <Contact />

    </>

  )
}

export default Body
