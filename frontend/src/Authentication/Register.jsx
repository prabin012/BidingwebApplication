
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'
import { useRef, useState } from 'react'
import axios from 'axios'


const Register = () => {
    const [check, setCheck] = useState(false);
    const [info, setInfo] = useState(false);
    const [file , setFile] = useState();
   

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const phone = useRef();
    const Address = useRef();
    const images = useRef();

   

    const filehandle =(e)=>{
        const img =e.target.files[0];
        setFile(img)
    }

    const history = useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();
        const data = {
            name : name.current.value,
            email : email.current.value,
            password : password.current.value,
            phone : phone.current.value,
            Address : Address.current.value,

        }
        if (file) {
            const datas = new FormData();
            const fileName = Date.now() + file.name;
            datas.append("name", fileName);
            datas.append("file", file);
            data.images = fileName;
            console.log(datas);
            
            try {
              await axios.post("http://localhost:5500/api/upload/", datas);
          
            } catch (err) {}
            
          }
        // console.log(data)
        
        try {
            console.log(data)
            const res = await axios.post(`http://localhost:5500/api/user/register`, data);
            setInfo(res.data.message)
            if (res.data.success === true) {
                setTimeout(() => {
                    setInfo(false)
                    history('/login')
                }, 2000)
            }
        } catch (error) {
            // const message = error.response.data.message;
            console.log(error)
            // setInfo(message)
            // setTimeout(() => {
            //     setInfo(false)
            // }, 2000)
        }
    }
    console.log()
    return (
        <>
            {info && (
                <div className="notifications">
                    <span className="userSuccess">{info}</span>
                </div>
            )}


            <div className="registerMAinPage">
                <div className="registerContsiner">
                    <form action="" className="registerForm" onSubmit={submitForm} encType='multipart/form-data'>
                        <span className="formHead">Register Here</span>

                        <span><Link to='/teacherauth' className='alreadylogin '> click for Admin </Link></span>
                        <input
                            type="text"
                            name='name'
                            className="userName textareas"
                            placeholder='User Name'
                            // value={data.name}
                            ref={name}
                            // onChange={changeHandle}
                        />

                        <input
                            type="email"
                            name='email'
                            className="userName textareas"
                            placeholder='email'
                            // value={data.email}
                            // onChange={changeHandle}
                            ref={email}

                        />
                        <input
                            type="text"
                            name='phone'
                            className="userName textareas"
                            placeholder='Phone Number'
                            // value={data.phone}
                            // onChange={changeHandle}
                            ref={phone}

                        />
                        <input
                            type="text"
                            name='Address'
                            className="userName textareas"
                            placeholder='Address'
                            // value={data.Address}
                            // onChange={changeHandle}
                            ref={Address}

                        />

                        <input
                            name='password'
                            type={check ? "text" : "password"}
                            className="userName textareas"
                            placeholder='Password'
                            // value={data.password}
                            // onChange={changeHandle}
                            ref={password}

                        />
                          <input type="checkbox" name="" id="" className="checkbox " onChange={() => setCheck(!check)} />
                        <input
                            type="file" name="file" id="file"
                            className="userName "
                            onChange={filehandle}
                            ref={images}
                        />
                      
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

export default Register
