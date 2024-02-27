

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Breadcrumb() {
  return (
    <div className='flex items-center text-sm gap-1 md:gap-5 text-gray-600 sm:ml-5 md:ml-[18%] flex-wrap'>

      <p className='p-2 rounded-md mr-2 text-sm'>Home</p>
      <MdOutlineKeyboardArrowRight className='text-gray-500 text-xl' />
      <p className='p-2 rounded-md mx-2 text-sm'>Hosting for all</p>
      <MdOutlineKeyboardArrowRight className='text-gray-500 text-xl' />
      <p className='p-2 rounded-md mx-2'>Hosting</p>
      <MdOutlineKeyboardArrowRight className='text-gray-500 text-xl' />
      <p className='p-2 rounded-md mx-2'>Hosting6</p>
      <MdOutlineKeyboardArrowRight className='text-gray-500 text-xl' />
      <p className='p-2 rounded-md mx-2 text-sm'>Hosting5</p>
    </div>
  );
}

export default Breadcrumb;
