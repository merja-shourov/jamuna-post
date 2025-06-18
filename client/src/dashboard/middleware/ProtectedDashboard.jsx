import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



const ProtectedDashboard = () => {

  const userInfo = {
    name: "aladdin",
    role: "admin",
  }

  if(userInfo){
    return <Outlet />
  }else{
    return <Navigate to={"/login"} />
  }

}

export default ProtectedDashboard