import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  loginAction  } from '../NewStore/action/auth'
import style from "./login.module.css"


const Login = () => {
    const dispatch = useDispatch()

    const [name,SetName]=useState("")
    const [emai,Setemai]=useState("")
    const [pass,Setpass]=useState("")
    
  const login =(e)=>{
     e.preventDefault();
      console.log(name,pass,emai)

      dispatch(loginAction({name,emai,pass}))
  }
    return (
        <div className={`${style.div}`} >

          
             <div className={style.divs}>
            <h1>
                Login 
            </h1>

            <form onClick={login} >
                <div className='dics w-100 mx-auto'>

                
                <div>
                    <input value={name} type="text" placeholder='Name' className="input-group form-control mt-4" onChange={(e)=>SetName(e.target.value)} />
                </div>
                                
                <div>
                    <input value={emai} type="email" placeholder='Email' className="input-group form-control mt-4" onChange={(e)=>Setemai(e.target.value)}/>
                </div>
                                
                <div>
                    <input value={pass} type="password" placeholder='Password' className="input-group form-control mt-4" onChange={(e)=>Setpass(e.target.value)}/>
                </div>
                </div>
                <div className='w-100 mt-2'>
                    <button className='btn btn-primary'>
                        Login
                    </button>
                </div>
            </form>
            </div>
   
        
        </div>
        
    )
}

export default Login



