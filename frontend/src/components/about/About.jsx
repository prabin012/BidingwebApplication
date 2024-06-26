import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContect';
import axios  from 'axios';
import './appl.css'

const About = () => {
  const {inf , setInf} = useContext(AppContext)
  const {userData} = useContext(AppContext);

    useEffect(()=>{
        const getData = async()=>{
          try {
            const res =await axios.get(`http://localhost:5500/api/user/appliedJobs`)
            console.log(res.data)
            setInf(res.data.Auctions)
          } catch (error) {
            console.log(error)
          }
      }
      getData();
      },[]);

      console.log(inf)
  return (
    <div className="ourFaculties allFac">
          <span className="ourteacherhead">Total Bids , And Users 🎉</span>
          {Array.isArray(inf) && inf.map((job) => (
            
              <div className="facultiesitem" key={job._id}>
                <div className="jobdesc">
                  <span className="companeyname">{job.name}</span>
                  <span className="postDate">{job.createdAt}</span>
                  <span className="companeylocation postDate">Email : {job.email}</span>
                  <span className="skillsRequire j1 ">Bid For : {job.productName}</span>
                  <span className="jobRole j1">OriginalPrice :$ {job.OriginalPrice}</span>
                  <span className="jobRole j1">BindingProice :$ {job.BindingProice}</span>
                  <span className="jobRole j1">Per_bid :$ {job.Per_bid}</span>
                </div>
                <div className="jobApply">
                 
                  <button className="applyforJob">Status panding..</button>
                </div>
              </div>
          ))}
        </div>
  )
}

export default About
