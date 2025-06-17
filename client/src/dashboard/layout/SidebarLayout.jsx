import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { ImProfile } from "react-icons/im";



const SidebarLayout = () => {
    const { pathname } = useLocation()
    return (
        <div className='sidebar w-[250px] h-screen fixed left-0 top-0 bg-white'>
            <div className="h-[70px] flex justify-center items-center bg-red-400">
                <h2 className='text-[40px] font-bold text-white'>LOGO HERE</h2>
            </div>
            <ul className='flex flex-col gap-y-2 font-medium p-3'>
                <li>
                    <Link className={`w-full flex gap-x-1 justify-start items-center px-3 py-2 hover:shadow-md hover:text-[#eeeeee] hover:bg-[#2a4759] ${pathname === '/dashboard/admin' ? 'bg-[#2A4759] text-[#EEEEEE]' : 'text-[#4040f6]'} rounded-sm`} >
                        <span className='text-xl'><AiFillDashboard /></span>
                        <span>Dashboard</span>
                    </Link>
                </li>
                 <li>
                    <Link className={`w-full flex gap-x-1 justify-start items-center px-3 py-2 hover:shadow-md hover:text-[#EEEEEE] hover:bg-[#2A4759] ${pathname === '/dashboard/news' ? 'bg-[#2A4759] text-[#EEEEEE]' : 'text-[4040f6]'} rounded-sm`} >
                        <span className='text-xl'><PiNewspaper /></span>
                        <span>News</span>
                    </Link>
                </li>
                 <li>
                    <Link className={`w-full flex gap-x-1 justify-start items-center px-3 py-2 hover:shadow-md hover:text-[#EEEEEE] hover:bg-[#2A4759] ${pathname === '/dashboard/editors' ? 'bg-[#2A4759] text-[#EEEEEE]' : 'text-[4040f6]'} rounded-sm`} >
                        <span className='text-xl'><FiUsers /></span>
                        <span>Editors</span>
                    </Link>
                </li>
                 <li>
                    <Link className={`w-full flex gap-x-1 justify-start items-center px-3 py-2 hover:shadow-md hover:text-[#EEEEEE] hover:bg-[#2A4759] ${pathname === '/dashboard/addEditor' ? 'bg-[#2A4759] text-[#EEEEEE]' : 'text-[4040f6]'} rounded-sm`} >
                        <span className='text-xl'><IoMdAdd /></span>
                        <span>Add Editor</span>
                    </Link>
                </li>
                <li>
                    <Link className={`w-full flex gap-x-1 justify-start items-center px-3 py-2 hover:shadow-md hover:text-[#EEEEEE] hover:bg-[#2A4759] ${pathname === '/dashboard/profile' ? 'bg-[#2A4759] text-[#EEEEEE]' : 'text-[4040f6]'} rounded-sm`} >
                        <span className='text-xl'> <ImProfile /> </span>
                        <span>Profile</span>
                    </Link>
                </li>
                 <li>
                    <Link className={`w-full flex gap-x-1 justify-start items-center px-3 py-2 hover:shadow-md hover:text-[#EEEEEE] hover:bg-[#2A4759] ${pathname === '/dashboard/logout' ? 'bg-[#2A4759] text-[#EEEEEE]' : 'text-[4040f6]'}  rounded-sm`} >
                        <span className='text-xl'> <MdLogout /> </span>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SidebarLayout