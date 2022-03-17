import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutAction } from '../NewStore/action/auth';

const Dashboard = () => {

  const { userEmail, userPassword } = useSelector(
    (state) => state.loginReducer
  );
    const dispatch = useDispatch();
    console.log(userEmail,userPassword)

    const logout = () =>{
      dispatch(logOutAction())
    }
  return (
    <div>
      <h1>
         {userEmail && `Email ${userEmail}`}
      </h1>
      <h1>
      {userPassword && ` Password ${userPassword}`}
      </h1>
    </div>
  )
}

export default Dashboard
