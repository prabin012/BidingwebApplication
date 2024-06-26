import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContect'
import Event from './Event'
import Card from '../cards/Card'
import { events } from '../../dummy'
import Events from './Events'




const AllEvent = () => {
    const {item } = useContext(AppContext)
    if(!item ) return "Loding" ;
    // console.log(item)
  return (
    <>
    <div className='eventContainer'>
         <sapn className="eventTttles0">For Sellers:
          .</sapn>
        <sapn className="eventTttles">Discover Exceptional Artwork and Support Talented Artists😊 </sapn>
        <sapn className="eventTttles0">Experience the Thrill of Art Auctions from Anywhere </sapn>
        <div className="allItemProduct">
       
        {item.map((item)=>{
        return <Event key={item._id} item={item}/>
     })}
        </div>
    
       
    </div>
  
     {/* <Events/> */}
   

    </>
  )
}

export default AllEvent
