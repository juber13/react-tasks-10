/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = () => {
   const [dark , setDark] = useState(false);

   return (
      <div className={`flex flex-col mt-3 bg-${dark ? "[#000]" :"[#fff]"} text-${dark ? "white" :"black"} items-center justify-center w-full h-[150px]`}>
         <p className='text-2xl font-bold'>Try to toggle the theme and see the change !!!</p>
         <button className={`mt-4 text-white border p-2 bg-${dark ? "[#FFD7C4]" :"[#D23669]"}`} onClick={() => setDark(!dark)}>Toggle Theme</button>
      </div>
   )
}

export default Content