import React from 'react'

function Button({name}) {
  return (
    <button className='w-[24%] md:w-auto h-8 p-4 bg-white text-gray-600 rounded-md mt-2 text-xs inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out shadow-sm ml-6  '>
  {name}
</button>

  )
}

export default Button
