/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = () => {
   const [index, setIndex] = useState(0);
   const [data, setData] = useState([
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
      "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "The best way to predict the future is to create it. - Peter Drucker",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
      "Impossible is just an opinion. - Paulo Coelho",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson"
   ]);

   const nextQuote = () => {
      if (index >= data.length - 1) {
         setIndex(0);
      }else{
         setIndex(index + 1);
      }
   }

   
   const prevQuote = () => {
      if(index > 0){
         setIndex(index - 1);
      }
   }

   return (
      <div className='w-[600px] border rounded-md shadow-md p-3 mt-10'>
         <div className='flex flex-col'>
            <p>{data[index]}</p>

            <div className="btns mt-5 flex gap-4">
               <button className='border text-white font-semibold bg-black p-2 px-4 rounded shadow-md text-sm' onClick={nextQuote}>Next</button>
               <button className='border text-white font-semibold p-2 bg-black px-4 rounded shadow-md text-sm' onClick={prevQuote}>Previous</button>
            </div>
         </div>


      </div>
   )
}

export default Content