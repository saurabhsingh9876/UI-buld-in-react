import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
function Navbar() {
  return (
    <div className='bg-slate-950 text-white flex p-2 rounded-sm items-center w-full sticky top-0'>
      <img
        src="https://images.websitebuilderexpert.com/wp-content/uploads/2019/05/09020529/wbe-short-logo.png"
        alt="Logo"
        className='w-10 h-10 rounded-3xl ml-10'
      />
    <div className='md:w-1/4 ml-4 md:ml-[20%] w-[50%] flex items-center relative'> {/* Add flex and items-center */}
  <input
    type='text'
    placeholder='Search query...'
    className='p-1.5 w-full outline-none text-gray-900 bg-gray-200 rounded-md pl-3 item-center' // Adjusted padding-left to accommodate the search icon
  />
  <IoSearchSharp className='absolute top-1/2 transform -translate-y-1/2 mt-1 right-2 sm:right-1 sm:ml-0  text-gray-600 text-center mr-2'/> {/* Adjust margin and color */}
</div>


      {/* <div className='md:w-1/4 ml-4 md:ml-[20%] w-[50%]'>
      <IoSearchSharp  className='mt-2'/> 
        <input
          type='text'
          placeholder='Search query...'
          className='p-1.5 w-full outline-none text-gray-900 bg-gray-200 rounded-md'
        />
      </div> */}
      <ul className='hidden md:flex justify-around text-sm gap-2 w-[30%] ml-[3%]'>
        <li className='cursor-pointer hover:text-gray-400'>Categories</li>
        <li className='cursor-pointer hover:text-gray-400'>Website Builder</li>
        <li className='cursor-pointer hover:text-gray-400'>Data center</li>
      </ul>
      <div className='md:hidden ml-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 cursor-pointer'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M4 6h16M4 12h16m-7 6h7' />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;


