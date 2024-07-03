/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = ({setColor}) => {
   function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
         hexColor += letters[Math.floor(Math.random() * 16)];
      }
      setColor(hexColor)
    }
  
   return (
      <div className='content'>
         <div className="btns text-center mt-3">
            <button className='border border-gray-600 p-3 mr-3 text-sm rounded-md cursor-pointer' onClick={getRandomColor}>Change</button>
         </div>
      </div>
   )
}

export default Content