import React from 'react'

const HeaderLayout = () => {
  return (
    <div className='fixed top-4 px-4 w-[calc(100vw-250px)]'>
      <div className="bg-white px-4 py-3 rounded-sm  flex justify-between items-center ">
        <input type="text" placeholder='Search' className='py-1 px-2 rounded-sm outline-0 border-1  border-gray-200 focus:border-gray-400 w-[300px] '/>
        <div className="profile flex justify-start items-center gap-x-2">
          <div className="detail flex flex-col justify-start items-end text-sm">
            <span>Your Name</span>
            <span className='text-[12px] font-semibold'>Admin</span>
          </div>
          <div className="avater">
            <img className='w-[40px] rounded-full' src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderLayout