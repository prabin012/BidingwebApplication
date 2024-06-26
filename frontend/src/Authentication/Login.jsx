
import { Link,useNavigate } from 'react-router-dom'
import './auth.css'
import { useContext, useState } from 'react'
import axios from 'axios';
import { AppContext } from '../context/AppContect';
import {LoginCall} from '../context/AppAction'


const Login = () => {
    const {userData, setStudent, dispatch } = useContext(AppContext);
    const [check , setCheck] = useState(false);
    const [info, setInfo] = useState(false);
    const [data, setData] = useState({
        email:'',
        password:''
    })

    const clickhandle =(e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    const history =useNavigate();
    const submithandle =async(e)=>{
        e.preventDefault();
        try {
            LoginCall(data, dispatch);
            if(userData.success===true){
                history('/')
                const users = userData.user 
                setStudent(users) 
                
            }
        } catch (error) {
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
                    <form action="" className="registerForm" onSubmit={submithandle}>
                        <span className="formHead">User Login !!</span>
                        <span><Link to='/tlogin' className='alreadylogin '> Login as Admin </Link></span>
                    
                        <input
                            type="email"
                            className="userName textareas"
                            placeholder='email'
                            name='email'
                        value={data.email}
                        onChange={clickhandle}
                        />

                        <input
                            type={check ? "text":"password"}
                            className="userName textareas"
                            placeholder='Password'
                            name='password'
                        value={data.password}
                        onChange={clickhandle}
                        />
                        <input type="checkbox" name="" id="" className="checkbox " onChange={()=>setCheck(!check)}/>
                        <button className="submitButton textareas" type='submit'>
                            Login
                        </button>
                        <div className="already">
                        <span className="gotoLogin">Ditn't have Registered  ! </span>
                        <span><Link to='/register'  className='alreadylogin'>register Here </Link></span>
                    </div>
                    </form>
                   
                </div>
            </div>
        </>
    )
}

export default Login
