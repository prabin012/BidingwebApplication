import './event.css'
import { events } from '../../dummy'
import { bed } from '../../dummy';
import { office } from '../../dummy';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContect';
import { BsHammer } from "react-icons/bs";
import axios from 'axios'

const Event = (item) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const [info, setInfo] = useState(false);
  const [bid, setBid] = useState("Add Bid");
  const [prize, setPrize] = useState(item.item.OriginalPrice);
  const {userData } = useContext(AppContext);
// console.log(item)
  if (!item) return "loading";
  const items = item.item
  const binhandler = async(items)=>{
    const jid = items._id
    const iid = userData.user._id
      try {
          const res = await axios.post(`http://localhost:5500/api/user/apply/${iid}/${jid}`);
          setInfo(res.data.message)
         
          if(res.data.success===true){
            setPrize(items.OriginalPrice+items.Per_bid);
            setBid("Bid completed..")
              setTimeout(() => {
                  setInfo(false)
              }, 3000)
          }
         
      } catch (error) {
          const message = error.response.data.message;
          setInfo(message)
          setBid("Bid completed..")
          setTimeout(() => {
              setInfo(false)
          }, 2000)
      }
  }
  const time = new Date(item.item.createdAt)
  const dat = time.toLocaleDateString();
  const dats = time.toLocaleTimeString();
 
  return (
    <>
     { info && (
            <div className="notifications usernnt">
             <span className="userSuccess">{info}</span>
             </div>
        )}
      
         
                <div className="cardItem " key={item._id}>
                  <div className="conatinerptti sal  ">
                    <span>{dat}<br />
                    <span>{dats} <BsHammer /></span>
                    </span></div>
                  <img src={PF + item.item.file} alt="" />
                  <span className="track">{items.productName}</span>   
                  <div className="conatDIbsab">
                    <div className="desc descHR">
                      <span className="desc CurrentBid"> 🎢 Current Bid  </span>
                      <span className="desc ">💵 $ {items.BindingProice}  </span>
                    </div>
                    <div className="desc">
                      <span className="desc buyNow"> 🎢Buy Now</span>
                      <span className="desc">  💵 $ {items.OriginalPrice}  </span>
                    </div>
                  </div>
                   <span className="   bidamount">Per BID <BsHammer />: $ {items.Per_bid}</span>
                  <button className="explore" onClick={()=>{
                    binhandler(items)
                     setBid(true)}
                     } >{bid}</button>
                </div>
            {/* </div>
          </div>
        </div> */}
      
      {/* <div className="eventContainer">
        <sapn className="eventTttles0">We offer affordable Vehicles
          .</sapn>
        <sapn className="eventTttles">"MoterBike_____🏍️" </sapn>
        <div className="eventsItem" >
          <div className="blog3">
            <div className="blogcontainer">
              {bed.map((item) => (
                <div className="cardItem " key={item._id}>
                     <div className="conatinerptti sal  "><span>2 day ago <BsHammer /></span></div>
              
                  <img src={item.image} alt="" />
                  <span className="track">{item.tittle}</span>
                 
                  <div className="conatDIbsab">
                    <div className="desc descHR">
                      <span className="desc CurrentBid"> 🎢 Current Bid  </span>
                      <span className="desc ">💵 $ 20000  </span>
                    </div>
                    <div className="desc">
                      <span className="desc buyNow"> 🎢Buy Now</span>
                      <span className="desc">  💵 $ 10000  </span>
                    </div>
                  </div>
                   <span className="   bidamount">Per BID <BsHammer />: $ 500</span>
                  <button className="explore">Submit A Bid</button>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div> */}
      {/* <div className="eventContainer">
        <sapn className="eventTttles0">Find auctions for Homes, Condos, Residential & Commercial Properties
          .</sapn>
        <sapn className="eventTttles">"Real Estate ,Homes , Residential !" </sapn>
        <div className="eventsItem" >
          <div className="blog3">
            <div className="blogcontainer">
              {office.map((item) => (
                <div className="cardItem " key={item._id}>
                      <div className="conatinerptti sal  "><span>2 day ago <BsHammer /></span></div>
              
                  <img src={item.image} alt="" />
                  <span className="track">{item.tittle}</span>
                
                  <div className="conatDIbsab">
                    <div className="desc descHR">
                      <span className="desc CurrentBid"> 🎢 Current Bid  </span>
                      <span className="desc ">💵 $ 20000  </span>
                    </div>
                    <div className="desc">
                      <span className="desc buyNow"> 🎢Buy Now</span>
                      <span className="desc">  💵 $ 10000  </span>
                    </div>
                  </div>
                   <span className="   bidamount">Per BID <BsHammer />: $ 500</span>
                  <button className="explore">Submit A Bid</button>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Event
