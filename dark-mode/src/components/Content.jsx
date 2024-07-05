/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = () => {
   const [dark , setDark] = useState(false);

   return (
      <div className={`flex flex-col mt-3 ${dark ? "bg-[#000]" :"bg-[#fff]"} ${dark ? "text-white" :"black"} items-center justify-center w-full h-[150px]`}>
         <p className='text-2xl font-bold'>Try to toggle the theme and see the change !!!</p>
         <button className={`mt-4 ${dark ? "text-black" :"text-white"}  border p-2 ${dark ? "bg-[#FFD7C4]" :"bg-[#D23669]"}`} onClick={() => setDark(!dark)}>Toggle Theme</button>
      </div>
   )
}

export default Content