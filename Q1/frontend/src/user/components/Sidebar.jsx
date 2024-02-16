import React from 'react'

export default function Sidebar() {
    const Logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
    }
  return (
    <div>
      <div className='flex flex-col w-[300px] h-screen border-[#D9D9D9] border-r-4 fixed sidebar'>
        <div className='text-center border-[#D9D9D9] border-b-4 py-16 flex justify-center'> <img src='./logo.png' /></div>
        <div className='text-center border-[#D9D9D9] border-b-4 py-10 text-gray-400 hover:text-black'> Cart</div>
        <div className='text-center border-[#D9D9D9] border-b-4 py-10 hover:text-black'>Market</div>
        <div className='text-center border-[#D9D9D9] border-b-4 py-10 text-gray-400 hover:text-black' >Settings</div>
        <div  onClick={Logout} className='text-center border-[#D9D9D9] border-b-4 py-10 text-gray-400 hover:text-black cursor-pointer'> Logout</div>
      </div>
      
    </div>
  )
}
