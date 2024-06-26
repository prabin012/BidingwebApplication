import { useContext, useState } from 'react'
import { FaCartPlus } from "react-icons/fa6";
import './header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContect.js'


const Header = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
 
  const { userData, student, admin } = useContext(AppContext);
  const [open , setOpen] =useState(false);
  // console.log(typeof(userData.user.file))
 
  const history = useNavigate();

  const logoutHandle = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    window.location.reload()
    history('/');
  }
 
  return (
    <>
      <div className="navbarContaner">
        <div className="navbarElement">
          <div className="navbarLogo">
            <span className="logotext">eGallery..</span>
          </div>
          <div className="narbarItem">
            <ul className="navbarList">
              <li className="Link home navbartext"><NavLink to='/' className='Links'>Home</NavLink></li>
              <li className="Link home navbartext"><NavLink to='/products' className='Links'>Products</NavLink></li>
              <li className="Link home navbartext"><NavLink to='/about' className='Links'>Contact</NavLink></li>
              
              {/* <li className="Link home navbartext"><NavLink to='/product' className='Links'>LatestArt</NavLink></li> */}
           
             
            </ul>
          </div>

          <div className="portoalUsername" onClick={()=> setOpen(!open)}>
            {userData ? <span className="userPortail">{userData.user.name}</span> : ""}
            {userData ? <img className="userPortailImage" src={PF + userData.user.file} /> : ""}
            {admin ? <span className="userPortail">{admin.name}</span> : ""}
          </div>
          {open && (
            <div className='Opened' onClick={()=>setOpen(false)}>
               {userData ? <li className=""><Link to='/userprof' className='logout Links'>Profile</Link></li> : ""}
               {admin ? <li className=""><Link to='/userProfile' className=' logout Links'>Bid Request</Link></li> : ""}
               {admin ? <li className=""><Link to='/allbids' className=' logout Links'>Total Bids</Link></li> : ""}
               {userData ||admin? <li className=""><Link to='/addproduct' className=' logout Links'>Add Arts</Link></li> : ""}
 {userData || admin ? <li className=" "><span onClick={logoutHandle} className='logout Links'>Logout 📤</span></li> : null}
            </div>
          )}
         
          {userData || admin ? null : <li className="regis home navbartext"><Link to='/register' className='Links'>Register</Link></li>}
         
         
        </div>
      </div>

    </>
  )
}

export default Header
