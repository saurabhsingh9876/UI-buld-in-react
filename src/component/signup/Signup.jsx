import React from 'react';

function Signup() {
  return (
    <div className='mx-auto mt-8 w-full md:w-[70%] lg:w-[80%] xl:w-[90%] flex flex-wrap text-center items-center'>
      <div className='text-2xl text-gray-600 mt-3 w-full md:w-auto'>Signup to get exclusive special deals..</div>
      
       <button className='w-full md:w-[35%] bg-white p-2  flex justify-end rounded-lg md:ml-[21%] mt-4 md:mt-0'>
        <p className='border border-gray-400 bg-blue-500 p-2 w-full md:w-[30%] rounded-lg text-center text-slate-50'> Sign Up</p>
       </button>
    </div>
  );
}

export default Signup;
