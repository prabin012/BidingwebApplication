import './footer.css'
import {Link} from 'react-router-dom'
import { BsGlobe2,BsGoogle,BsSkype,BsGithub,BsCCircle } from "react-icons/bs";

const Footer = () => {
  
  return (
    <div>
      <div className="footer">
        <div className="footerUpper">
          <div className="box-1">
            <span className="uperlogo">
            <div className="navbarLogo">
        <span className="logo"  >eGallery</span>
        </div>
            </span>
            <span className="uperdesc">"Get In Touch:
Have questions or need assistance? Reach out to us! Our dedicated team is ready to assist you with any queries regarding our products, orders, or services." </span>
            <div className="footerIcons">
              <li className="icons" ><BsGlobe2/></li>
              <li className="icons" ><BsGoogle/></li>
              <li className="icons" ><BsSkype/></li>
              <li className="icons" ><BsGithub/></li>
            </div>
          </div>
          <div className="box-2">
            <span className='ft'>Pages</span>
            <Link className="footerlink">Services</Link>
            <Link className="footerlink">Contact</Link>
            <Link className="footerlink">Latest Art</Link>
            {/* <Link className="footerlink"></Link> */}
            {/* <Link className="footerlink">about</Link> */}
          </div>
          <div className="box-3">
          <span  className='ft'>Quick links</span>
            <Link className="footerlink">privacy policy</Link>
            <Link className="footerlink">Descilimar</Link>
            <Link className="footerlink">Term & condition</Link>
            <Link className="footerlink">Credit</Link>
            <Link className="footerlink">FAQ</Link>
          </div>
        </div>
        <div className="footerlower">
          {/* <span className="footerbtm">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</span> */}
          <span className="copyright">copyright ©️  2023 eGallery || All right Reversed</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
