import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { Reducer } from './AppReducer';
import { foodItem } from '../dummy';

const INITIAL_STATE ={
  userData :JSON.parse(localStorage.getItem('user'))|| null,
  iserBid:null,
  isLoading : false,
  isError : false,

}

const AppContext = createContext();

const AppProvider =({children})=>{

  const [data, setdata] = useState(foodItem);
  const [admin , setAdmin] =useState();
  const [item, setItem] = useState();
  const [homes, setHomes] = useState();
  const [inf , setInf] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/user/alljob');
        const resp = await axios.get('http://localhost:5500/api/user/appliedJobs');
       console.log(res.data.AllJobs)
        setItem(res.data.AllJobs);
        // setHomes(resp.data.appliedJObs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[inf]); // The empty array ensures this runs only once when the component mounts


    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.userData))
        localStorage.setItem("admin", JSON.stringify(admin))
      },[state.userData])

    

    return <AppContext.Provider value={{
      userData:state.userData,
      isLoading:state.isLoading,
      isError:state.isError,
      data, setdata,
      admin , setAdmin,
         dispatch,
         item, setItem,
         homes, setHomes,
         inf , setInf

    }}>{children}</AppContext.Provider>


}

export {AppContext, AppProvider}