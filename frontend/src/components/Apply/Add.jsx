import React, { useRef, useState } from 'react'
import axios from 'axios';

const Add = () => {
    const [image, setIimage] = useState();
    const img = useRef();

    const clickhandle =(e)=>{
        setIimage(e.target.files[0])
    }
    const submithandle =async(e)=>{
        e.preventDefault();

        const data = new FormData();
        data.append('image', image)
        
        console.log(data)
        try {
            const res = await axios.post(`http://localhost:5500/api/upload`, data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <input type="file" name="file" id="file" ref={image} onChange={clickhandle}/>
      <button onClick={submithandle}>submit</button>
    </div>
  )
}

export default Add
