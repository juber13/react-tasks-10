/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = () => {
   const [wordCount, setWordCount] = useState(0);
   const [charsCount, setCharsCount] = useState(0);
   const [ParasCount, setParasCount] = useState(0);
   const [text , setText] = useState("");


   const handleCounter = () => {
      if(text.length > 0){
         const wordLength = text.split(" ").length;
         const charLength = text.split("").length;
         const paragraphCount = text.split("\n").length;

         setWordCount(wordLength);
         setCharsCount(charLength);
         setParasCount(paragraphCount)
      }
   }

   const handleClear = () => {
      setWordCount(0)
      setCharsCount(0);
      setParasCount(0);
      setText("");
   }


   return (
      <div className='w-[600px]'>
         <textarea onChange={(e) => setText(e.target.value)} value={text} name="" id="" className=' shadow-md w-full border p-2 text-xl' rows="10"></textarea>
         <div className='actions flex items-start justify-between mt-3 shadow-md p-3'>
            <span>Word : {wordCount}</span>
            <span>Chars : {charsCount}</span>
            <span>Paras : {ParasCount}</span>

            <button className='p-1 border bg-black text-white font-semibold rounded-md text-xs' onClick={handleCounter}>Count</button>
            <button className='p-1 border bg-black text-white font-semibold rounded-md text-xs' onClick={handleClear}>Clear</button>
         </div>
      </div>
   )
}

export default Content