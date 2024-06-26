import axios  from "axios";

export const LoginCall = async(userCenserditial , dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post(`/user/login`, userCenserditial);
      dispatch({type:"LOGIN_SUCCESS" , payload:res.data});
    } catch (error) {
      dispatch({type:"LOGIN_FALURE", error})
    }
}

export const userBiding =async(userbidData, dispatch)=>{
  dispatch({
    type:"BIDING",
  })
}
    