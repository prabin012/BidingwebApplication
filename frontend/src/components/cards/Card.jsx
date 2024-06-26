import { Link } from 'react-router-dom'
import './cards.css'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContect'

const Card = () => {
  const {userData} =useContext(AppContext);
  return (
    <>
    <div className="cards">
            <div className="cardElemet">
                 <label className='jobfind b1' htmlFor="">Register For Free & Start Bidding Now!
                !</label>
                <span className='jobFins b1'>From cars to diamonds to iPhones, we have it all.</span>
                {userData ?<span className='ExploreB '><Link to='/' className='cds'>Welcome , {userData.user.name}</Link></span> :<span className='ExploreB'><Link to='/register' className='ExploreB'>Register</Link></span> }
            </div>
            <div className="cardImages">  
              <img className='catdimgs' src="/images/a2.png" alt="" />
            </div>
        
    </div>
    </>
  )
}

export default Card