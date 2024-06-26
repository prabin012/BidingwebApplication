// export const Reducer =async(state , action)=>{
//     switch (action.type) {
//         case "LOGIN_START":
//             return {
//             userData:null,
//             isError:false,
//             isLoading:true,
//         };
//         case "LOGIN_SUCCESS":
//             return{
//                 userData:action.payload,
//                 isLoading:false,
//                 isError:false,
//             };

//         case "LOGIN_FALURE":
//             return{
//                 userData:null,
//                 isError:true,
//                 isLoading:false
//             };
//             default :
//             return state;   
//     }
   

// }
export const Reducer =(state, action)=>{
    switch (action.type) {
        case "LOGIN_START":
            return{
                userData:null,
                isError:false,
                isLoading:true,
            }
            
         case "LOGIN_SUCCESS":
            return {
                userData:action.payload,
                isError:false,
                isLoading:false
            }  

        case "LOGIN_FALURE" :
            return{
                userData:null,
                isError:true,
                isLoading:false
            }
        case "BIDING":
            return{
           userBid:action.payload,
           isError:false,
           isLoading:false 
        }
        default:
            return state;
    }
    
}

