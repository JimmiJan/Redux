import action_Type from "../constant"

const INITIAL_STATE={
    userEmail: "",
    userPassword: ""

}

// const login = (state =INITIAL_STATE, action)=>{
//     if(action.type === action_Type.USER_LOGIN){
//         return{
//             ...state,
//             useEmail: action.payload.email,
//             usePassword: action.payload.usePassword,
//         }else if(action.type === action_Type.USER_LOGOUT){
// }
 
//     }
//     else{
//          return(
//             state
//          )
//          }
// }



const loginReduycer = (state = INITIAL_STATE, action)=>{
    if(action.type === action_Type.USER_LOGIN){
        return{
            ...state,
            userEmail:action.payload.email,
            userPassword :action.payload.password
        }
    }else if(action.type === action_Type.USER_LOGOUT){
        return{
            ...state,
            userEmail:"",
            userPassword:"",
        }
    }else{
        return state
    }
}

export {loginReduycer }