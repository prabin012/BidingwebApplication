
import { Link,useNavigate } from 'react-router-dom'
import '../../Authentication/auth.css'
import './add.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../../context/AppContect'
import Contact from '../contact/Contact'


const AddHome = () => {
    const{ admin} = useContext(AppContext);
    const [check, setCheck] = useState(false);
    const [info, setInfo] = useState(false);
    const [data, setData] = useState({
        Location:'',
        name:'',
        number:'',
        price: '',
        rating: ''
    })

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    // console.log(data);
    const history =useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();
        const iid = admin._id
        try {
            const res = await axios.post(`http://localhost:5500/api/user/apply/${iid}`, data);
            setInfo(res.data.message)
            if(res.data.success===true){
                setTimeout(() => {
                    setInfo(false)
                    // setData()
                    // history('/login') 
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
                    <form action="" className="registerForm addform" onSubmit={submitForm}>
                        <span className="formHead">Add Home Here</span>
                       
                        {/* <span><Link to='/teacherauth' className='alreadylogin '> click for Teacher </Link></span> */}
                        <input
                            type="text"
                            name='Location'
                            className="userName textareas"
                            placeholder='Location'
                            value={data.Location}
                            onChange={changeHandle}
                        />
                        <input
                            type="text"
                            name='name'
                            className="userName textareas"
                            placeholder='Owner Name'
                            value={data.name}
                            onChange={changeHandle}
                        />
                        <input
                            type="text"
                            name='number'
                            className="userName textareas"
                            placeholder='Contact Number'
                            value={data.number}
                            onChange={changeHandle}
                        />
                        <input
                            type="Number"
                            name='price'
                            className="userName textareas"
                            placeholder='Rent'
                            value={data.price}
                            onChange={changeHandle}
                        />
                        <input
                            type="text"
                            name='rating'
                            className="userName textareas"
                            placeholder='Rating / 5'
                            value={data.rating}
                            onChange={changeHandle}
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

export default AddHome
