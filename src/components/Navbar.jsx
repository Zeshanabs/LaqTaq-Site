import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-purple-300 justify-between px-2 items-center py-1 my-2 mx-1'>
        <div className=' font-bold text-2xl'>
        <span className='text-orange-700'>&lt;</span>Laq
        <span className='text-orange-700'>Taq/&gt;</span>
        </div>
        <div className='flex list-none'>
        <li className='space-x-3'>
            <a href="#" className='hover:font-bold hover:border border-orange-600 rounded-full p-2 hover:bg-orange-400'>Home</a>
            <a href="#" className='hover:font-bold hover:border border-orange-600 rounded-full p-2 hover:bg-orange-400'>Product</a>
            <a href="#" className='hover:font-bold hover:border border-orange-600 rounded-full p-2 hover:bg-orange-400'>ContactUs</a>
            </li>
            </div>
    </nav>
  )
}

export default Navbar
