import action_Type from "../constant"

const loginAction = (data)=>{
    return(dispatch)=>{
        dispatch({
            type:action_Type.USER_LOGIN,
            payload:data ,
        })
    }
}

const logOutAction = ()=>{
    return(dispatch)=>{
        dispatch({
            type : action_Type.USER_LOGOUT,
        })
    }
}
export {loginAction , logOutAction}