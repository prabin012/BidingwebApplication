import './contact.css'
import Footer from '../footer/Footer'
import { BsFillGeoAltFill,BsFillTelephoneFill,BsEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
  
  return (
    <>
    <div className="homeBody">
    <div className="bgimage"><div className="bd"></div></div>
     
     </div>

     <div className="contact">
     <div className="feedoverTittle">
                    {/* <p>to learn more about our services and solutions.</p> */}
                    <span className='eventTttles '>Contact us</span>
                    </div>
      <div className="conatcItems">
      <div className="contactContainer">
        <div className="contactAddress" >
        <div className="address">
          <span className="addresslogo"><BsFillGeoAltFill/></span>
          <div className="addresstext">
          <span className="addressname">Address</span>
          <span className="addressname aname">Nepal</span>
          </div>
        </div>
        <div className="address">
          <span className="addresslogo"><BsFillTelephoneFill/></span>
          <div className="addresstext">
          <span className="addressname">Email</span>
          <span className="addressname aname">example@gmail.com</span>
          </div>
        </div>
        <div className="address">
          <span className="addresslogo"><BsEnvelopeAtFill/></span>
          <div className="addresstext">
          <span className="addressname">Phone</span>
          <span className="addressname aname">+977-98009800</span>
          </div>
        </div>
       
        </div>
        <form action="" className="contactForm">
          <div className="inputfield">
          <input type="text" className="forminput" placeholder='Name'/>
          </div>
          <div className="inputfield">
          <input type="text" className="forminput" placeholder='Email'/>
          </div>
          <div className="inputfield">
          <textarea type="text" className="forminput inputTextArea" placeholder='Message'/>
          </div>
          <button className="submitbtn">Submit</button>
        </form>
      </div>
      </div>
      
     </div>
    
     </>
  )
}

export default Contact
