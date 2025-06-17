import React from 'react'
import SidebarLayout from './SidebarLayout'
import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'

const IndexLayout = () => {
  return (
    <div className='index'>
      <SidebarLayout />
      <div className="main ml-[250px] w-[calc(100wh-250px)] min-h-100vh">
        <HeaderLayout />
        <div className="pages mt-[100px] px-4">
          <div className="cantainer bg-white p-3 w-full h-100vh rounded-sm">
            <Outlet></Outlet>
          </div>
        </div>
      </div>





    </div>
  )
}

export default IndexLayout