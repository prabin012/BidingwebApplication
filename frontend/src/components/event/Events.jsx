import './event.css'
import { events } from '../../dummy'
import { bed } from '../../dummy';
import { office } from '../../dummy';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContect';
import { BsHammer } from "react-icons/bs";
import Event from './Event';
import AllEvent from './AllEvent';


const Events = () => {
  const { item } = useContext(AppContext);

  if (!item) return "loading";
  return (
    <>
      <div className='eventContainer'>
         <sapn className="eventTttles0">Latest Art & Collection..
          .</sapn>
        <sapn className="eventTttles">BID & WIN 😊 </sapn>
<div className="allItemProduct">
{ item.map((item)=>{
              return <Event key={item._id} item={item} />
            })}
</div>
   </div>
    </>
  )
}

export default Events
