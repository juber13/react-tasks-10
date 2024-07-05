/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Content = () => {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');
  const [isTrue, setIsTrue] = useState(false);

  const isAnagram = (str1, str2) => {
    // Remove spaces and convert to lowercase
    let newStr1 = str1.replace(/\s/g, '').toLowerCase();
    let newStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the sorted characters are the same
    return newStr1.split('').sort().join('') === newStr2.split('').sort().join('');
  };

  return (
    <div className='w-[600px]'>
      <div className="inputs flex flex-col gap-3">
        <input
          value={firstWord}
          onChange={(e) => setFirstWord(e.target.value)}
          className='border p-2'
          type="text"
          placeholder='Enter the first word or paras'
        />
        <input
          value={secondWord}
          onChange={(e) => setSecondWord(e.target.value)}
          className='border p-2'
          type="text"
          placeholder='Enter the second word or paras'
        />

        <button
          className='bg-green-500 p-2 text-white'
          onClick={() => setIsTrue(isAnagram(firstWord, secondWord))}
        >
          Check Anagrame
        </button>
      </div>

      <div className="result mt-4 text-xl">
        {isTrue ? "The words/phrases are anagrams!" : ""}
      </div>
    </div>
  );
};

export default Content;
