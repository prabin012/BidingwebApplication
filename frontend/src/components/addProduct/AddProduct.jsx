
import { Link,useNavigate } from 'react-router-dom'
import '../../Authentication/auth.css'
import './add.css'
import { useContext, useRef, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../../context/AppContect'
import Contact from '../contact/Contact'


const AddProduct = () => {
    const{ admin, userData} = useContext(AppContext);
    const [check, setCheck] = useState(false);
    const [info, setInfo] = useState(false);
    const [file, setFile] = useState();
    // const [data, setData] = useState({
    //     productName:'',
    //     price: '',
    //     BindingProice: '',
    //     OriginalPrice:'',
    // })
    const productName = useRef();
    const price = useRef();
    const BindingProice = useRef();
    const OriginalPrice = useRef();
    const images = useRef();


    const history =useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();
        const userID =admin? admin._id:userData.user._id
        //  userID =;
        console.log(userID)
        // console.log(userID)
        const data ={
            productName:productName.current.value,
            BindingProice:BindingProice.current.value,
            OriginalPrice:OriginalPrice.current.value,
            price:price.current.value,
        }

        if(file){
            const imagesfile = new FormData();
            const fileName = Date.now() + file.name;
            imagesfile.append("name", fileName);
            imagesfile.append("file", file);
            data.images = fileName;
            try {
                const res =await axios.post("http://localhost:5500/api/upload", imagesfile);
            } catch (error) {
                console.log(error)
            }
        }
        try {
            const res = await axios.post(`http://localhost:5500/api/user/addjob/${userID}`, data);
            setInfo(res.data.message)
            if(res.data.success===true){
                setTimeout(() => {
                    setInfo(false) 
                }, 2000)
            }
           
           
        } catch (error) {
            const message = error.response.data.message;
            setInfo(message)
            setTimeout(() => {
                setInfo(false)
            }, 2000)
        }
    }
    return (
        <>
        { info && (
            <div className="notifications">
             <span className="userSuccess">{info}</span>
             </div>
        )}
       
           
            <div className="registerMAinPage">
                <div className="registerContsiner">
                    <form action="" className="registerForm addform" onSubmit={submitForm} encType='multipart/form-data'>
                        <span className="formHead">Add Product Here</span>
                       
                        {/* <span><Link to='/teacherauth' className='alreadylogin '> click for Teacher </Link></span> */}
                        <input
                            type="text"
                            name='productName'
                            className="userName textareas"
                            placeholder='Item Name'

                            ref={productName}
                        />
                         
                         <input
                            type="text"
                            name='OriginalPrice'
                            className="userName textareas"
                            placeholder='Original Price'
        
                            ref={OriginalPrice}
                        />
                       <textarea
                            type="text"
                            name='BindingProice'
                            className="userName textareas"
                            placeholder='Start Bid'
        
                            ref={BindingProice}
                        />
                        <input
                            type="Number"
                            name='price'
                            className="userName textareas"
                            placeholder='Price Per Bid'
                            ref={price}
                        />
                        <input
                            type="file"
                            name='file'
                            id='file'
                            className="userName textareas"
                            placeholder='image'
                            onChange={(e)=>setFile(e.target.files[0])}
                            ref={images}
                        />
                       
                      
                       
                        <button className="submitButton textareas" type='submit'>
                            Add
                        </button>
                      
                    </form>

                </div>
            </div>
            <Contact/>
        </>
    )
}

export default AddProduct
