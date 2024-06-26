
import { Link,useNavigate } from 'react-router-dom'
import './auth.css'
import { useState } from 'react'
import axios from 'axios'


const AdminRegister = () => {
    const [check, setCheck] = useState(false);
    const [info, setInfo] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const history =useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post(`http://localhost:5500/api/user/admin`, data);
            setInfo(res.data.message)
            if(res.data.success===true){
                setTimeout(() => {
                    setInfo(false)
                    history('/login') 
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
                    <form action="" className="registerForm" onSubmit={submitForm}>
                        <span className="formHead">Register Here</span>
                       
                        <span><Link to='/register' className='alreadylogin '> click for User </Link></span>
                        <input
                            type="text"
                            name='name'
                            className="userName textareas"
                            placeholder='Admin Name'
                            value={data.name}
                            onChange={changeHandle}
                        />

                        <input
                            type="email"
                            name='email'
                            className="userName textareas"
                            placeholder='email'
                            value={data.email}
                            onChange={changeHandle}

                        />

                        <input
                            name='password'
                            type={check ? "text" : "password"}
                            className="userName textareas"
                            placeholder='Password'
                            value={data.password}
                            onChange={changeHandle}

                        />
                        <input type="checkbox" name="" id="" className="checkbox " onChange={() => setCheck(!check)} />
                        <button className="submitButton textareas" type='submit'>
                            Register
                        </button>
                        <div className="already">
                            <span className="gotoLogin">Already Registered  ! </span>
                            <span><Link to='/login' className='alreadylogin'>Login Here </Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AdminRegister
