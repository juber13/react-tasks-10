/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Content = () => {
   let [counter, setCounter] = useState(0);
   const [increased, setIncreased] = useState(0);

   const handleIncreamentCounter = () => {
      if (parseInt(increased) > 0) setCounter(counter + parseInt(increased));
      else setCounter(counter + 1)

   }

   const handleDecreamentCounter = () => {
      if (parseInt(increased) > 0) setCounter(counter - parseInt(increased));
      else setCounter(counter - 1);
   }

   return (
      <div className='content'>
         <div className="counter text-center text-3xl">
            <h3>{counter}</h3>
         </div>

         <div className="btns text-center mt-3">
            <button className='border border-gray-600 p-1 mr-3 text-sm rounded-md cursor-pointer' onClick={handleIncreamentCounter}>Increase</button>
            <button className='border border-gray-600 p-1 mr-3 text-sm rounded-md cursor-pointer' onClick={handleDecreamentCounter}>Decrease</button>
         </div>

         <div className='flex flex-col mt-4'>
            <label htmlFor="">Increased / Decreased By </label>
            <input type="number" className='border mt-3' onChange={(e) => setIncreased(e.target.value)} />
         </div>
      </div>
   )
}

export default Content