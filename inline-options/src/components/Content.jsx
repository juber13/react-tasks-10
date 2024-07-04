/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = () => {
   const [activeValue, setActiveValue] = useState(0);

   const [data, setData] = useState([
      { size: "100ml", isAviable: true },
      { size: "200ml", isAviable: true },
      { size: "400ml", isAviable: true },
      { size: "500ml", isAviable: false },
      { size: "800ml", isAviable: true }
   ]);


   const handleSize = (e, item, index) => {
      const target = parseInt(e.target.getAttribute('data-index'));
      if (target === index && item.isAviable) {
         setActiveValue(target);
      } 

   }

   return (
      <div className='w-[600px] mt-10'>
         <div className='mb-5'>
            <h3>Select Size of Dahi</h3>
         </div>


         <div className='flex'>
            {data.map((item, index) => <div onClick={(e) => handleSize(e, item, index)} key={index}
               className={`border text-black text-xs p-2 px-4 ${index === 0 ? "rounded-tl-2xl" : ""} text-white  
               ${(activeValue === index && item.isAviable) ? "bg-orange-400" : ""} ${item.isAviable ? "cursor-pointer" : "cursor-not-allowed"}`} data-index={index}>{item.size}</div>)}
         </div>
      </div>
   )
}

export default Content