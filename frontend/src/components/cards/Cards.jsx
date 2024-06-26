import './cards.css'
import { BsHammer } from "react-icons/bs";
const Cards = () => {
  return (
    <>
      <div className="card">
        <div className="cardElemet">
          <div className="cardImages">
            <img className='catdimg' src="/images/a1.png" alt="" />
            {/* <img className='catdimg' src="/images/a2.jpg" alt="" /> */}
            <div className="stepOfBids">
              <div className="contss">
                <span className="boxss">1</span>
                <button className='ExploreB'>Sign up</button>
              </div>
              <div className="contss">
                <span className="boxss">2</span>
                <button className='ExploreB'>BID <BsHammer /></button>
              </div>
              <div className="contss">
                <span className="boxss">3</span>
                <button className='ExploreB'>Win 🎉</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
