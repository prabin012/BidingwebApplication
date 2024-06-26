import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContect';
import axios  from 'axios';
import './appl.css'

const Applied = () => {
  const {inf , setInf} = useContext(AppContext)
  const {userData} = useContext(AppContext);
  const [info, setInfo] = useState(false);
  useEffect(()=>{
    const getData = async()=>{
          try {
            const res =await axios.get(`http://localhost:5500/api/user/getalljob`)
            setInf(res.data.AllJobs)
          } catch (error) {
            setInfo("Something went Wrong !")
          setTimeout(()=>{
            setInfo(false)
          },2000)
            console.log(error)
          }
      }
      getData();
      },[inf]);

      const acceptHandler =async(ids) =>{
        const id = ids.ids
        try {
          const res =await axios.get(`http://localhost:5500/api/user/accepbid/${id}`)
          setInfo(res.data.message)
          setTimeout(()=>{
            setInfo(false)
          },2000)
        } catch (error) {
          setInfo("Something went Wrong !")
          setTimeout(()=>{
            setInfo(false)
          },2000)
          console.log(error)
        }
      }
      const deleteHandler =async(ids) =>{
        const id = ids.ids
        try {
          const res =await axios.delete(`http://localhost:5500/api/user/deleteBids/${id}`)
          setInfo(res.data.message)
          setTimeout(()=>{
            setInfo(false)
          },2000)
        } catch (error) {
          setInfo("Something went Wrong !")
          setTimeout(()=>{
            setInfo(false)
          },2000)
          console.log(error)
        }
      }

  return (
    <>
    { info && (
            <div className="notifications">
             <span className="userSuccess">{info}</span>
             </div>
        )}
    <div className="ourFaculties allFac">
          <span className="ourteacherhead">Total Bids , Wins & Achievement 🎉</span>
          {Array.isArray(inf) && inf.map((job) => (
            
              <div className="facultiesitem" key={job._id}>
                <div className="jobdesc">
                  <span className="companeyname">{job.userName}</span>
                  <span className="postDate">{job.createdAt}</span>
                  <span className="companeylocation postDate">Email : {job.email}</span>
                  <span className="skillsRequire j1 ">Bid For : {job.productName}</span>
                  <span className="jobRole j1">OriginalPrice :$ {job.OriginalPrice}</span>
                  <span className="jobRole j1">BindingProice :$ {job.BindingProice}</span>
                  <span className="jobRole j1">Per_bid :$ {job.Per_bid}</span>
                </div>
                {job.status==true? <div className="jobApplys ">
                  <button className="applyforJob"> Status : Accepted</button> 
                  <button className="applyforJob jobsp" onClick={()=>{
                    deleteHandler({ids:job._id})
                  }}>Complete ? delete</button>
                </div>
                :<div>
                <button className="applyforJob">New Status : Pending......</button><br />
                   
                <div className="jobApply">
                  
                  <button className="applyforJob jobsA" onClick={()=>{
                    acceptHandler({ids:job._id})
                  }}>Accept</button>
                  <button className="applyforJob jobsp" onClick={()=>{
                    deleteHandler({ids:job._id})
                  }}>Reject</button>
                </div>
                </div>}
              </div>
          ))}
        </div>

        </>
  )
}

export default Applied
