import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContect';
import axios  from 'axios';
import './appl.css'

const AllBides = () => {
  const {inf , setInf,userData} = useContext(AppContext)
  useEffect(()=>{
    const getData = async()=>{
          try {
            const res =await axios.get(`http://localhost:5500/api/user/appliedJobs/`)
            setInf(res.data.Auctions)
          } catch (error) {
            console.log(error)
          }
      }
      getData();
      },[]);

    //   const acceptHandler =async(ids) =>{
    //     const id = ids.ids
    //     try {
    //       const res =await axios.get(`http://localhost:5500/api/user/appliedJobs/${id}`)
    //       console.log(res.data)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   const deleteHandler =async(ids) =>{
    //     const id = ids.ids
    //     try {
    //       const res =await axios.delete(`http://localhost:5500/api/user/deleteBids/${id}`)
    //       console.log(res.data)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }

  return (
    <div className="ourFaculties allFac">
          <span className="ourteacherhead">Total Bids , Wins & Achievements 🎉</span>
          {Array.isArray(inf) && inf.map((job) => (
            
              <div className="facultiesitem" key={job._id}>
                <div className="jobdesc">
                  <span className="companeyname">Bid For : {job.productName}</span>
                  <span className="postDate">{job.createdAt}</span>
                  <span className="companeylocation postDate">Email : {job.email}</span>
                  <span className="skillsRequire j1 ">{job.name}</span>
                  {/* <span className="skillsRequire j1 ">Bid For : {job.productName}</span> */}
                  <span className="jobRole j1">OriginalPrice :$ {job.OriginalPrice}</span>
                  <span className="jobRole j1">BindingProice :$ {job.BindingProice}</span>
                  <span className="jobRole j1">Per_bid :$ {job.Per_bid}</span>
                </div>
                <div className='pricess'>
                <span className=" pricecolors">Your Biding Price : {job.BindingProice}</span> <br />
                <span className="pricecolor">Pending...</span>
                </div>
              </div>
          ))}
        </div>

   
  )
}

export default AllBides
