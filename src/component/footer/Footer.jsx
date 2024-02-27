import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-800 w-full sm:w-[100%] h-auto sm:h-80  flex flex-col sm:flex-row text-gray-400 sm:justify-around pt-14 list-none text-sm sm:flex-wrap'>
      <div className='mb-6 sm:mb-0 text-center'>
        <h1 className='text-slate-100 pb-2 text-lg'>Categories</h1>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data center</li>
          <li>Robotic automation</li>
        </ul>
      </div>
      <div className='mb-6 sm:mb-0 text-center'>
        <h1 className='text-slate-100 pb-2 text-lg'>Contact</h1>
        <ul>
          <li>Contact</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className='text-center mb-2'>
  <h1 className='text-slate-100 pb-2 text-lg'>Select Country</h1>
  <select className='text-gray-400 bg-slate-700 outline-none rounded-md p-2'>
    <option value="">United States</option>
    <option value="">United Kingdom</option>
    <option value="">Canada</option>
    <option value="">Australia</option>
  </select>
</div>

      {/* <div>
        <h1 className='text-slate-100 pb-2 text-lg text-center '>Select Country</h1>
        <select className='text-gray-400 bg-slate-700 outline-none  rounded-md p-2 items-center'>
          <option value="" >United States</option>
          <option value="">United Kingdom</option>
          <option value="">Canada</option>
          <option value="">Australia</option>
        </select>
      </div> */}
    </div>
  );
}

export default Footer;
