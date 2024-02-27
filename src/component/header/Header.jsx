import React from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";
import Button from '../button/Button';
import { IoAlertCircleOutline } from "react-icons/io5";
import   data  from '../../data/data';


function Header() {
  
  return (
    <div className='bg-slate-50'>
      <div className='text-3xl  font-normal tracking-wide font-sens pt-5 ml-[18%] text-gray-700'>
     
        <h1>Build Website Builder in the US</h1>
      </div>
      <div className='w-full max-w-screen-lg mx-auto border-t border-b border-gray-400 py-2 flex flex-col md:flex-row items-center mt-2'>
       
        <div className='flex justify-center md:w-1/2'>
  <div className='flex items-center'>
    <p className='border border-gray-400 outline-none p-1 text-center mr-2 rounded-full'>
      <IoCheckmarkOutline />
    </p>
    <p className='text-sm text-gray-600'>
      Last update: February 02, 2012
    </p>
  </div>
  <div className='flex items-center ml-6'>
    <p className='text-sm text-gray-600'>
      Advertising disclosure
    </p>
    <p className='outline-none p-2 text-center text-lg  rounded-full ml-2'>
      <IoAlertCircleOutline className='text-red-400' />
    </p>
  </div>
</div>
        <div className='flex justify-end md:w-1/2 mt-4 md:mt-0 mr-5'>
          <select className='p-2 text-sm text-gray-500 rounded-md outline-none shadow-md'>
            <option value=''>Top relevant</option>
            <option value=''>Top relevant</option>
          </select>
        </div>
      </div>
      <div className='max-w-screen-lg mx-auto py-7'>
      <div className='flex justify-evenly flex-wrap '>
        {
        data.map((e)=> <Button  name={e.name}/>)}
         
        </div>
      </div>
       
    </div>
  );
}

export default Header;

