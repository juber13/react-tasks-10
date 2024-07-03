/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import img1 from '../images/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg';
import img2 from '../images/depositphotos_54998613-stock-photo-ginger-cat (1).jpg';
import img3 from '../images/portrait-of-a-brown-cat-against-a-gray-background.jpg';
import img4 from '../images/cat-poses-perfectly.jpg';

const Content = () => {

   const [images, setUrls] = useState([
      { image: img1, id: 2 },
      { image: img2, id: 1 },
      { image: img3, id: 3 },
      { image: img4, id: 4 }
   ]);

   const [selectedImage , setSelectedImage] = useState(null);

   const handleImage = (e) => {
      const url = e.target.getAttribute('src');
      setSelectedImage(url)
   }

   console.log(images)

   return (
      <div className='flex flex-col gap-20'>
         <div className='content w-[1000px] flex mt-4 gap-10 '>
            {images.map((image) => {
               return (
                  <div className='card border p-3' key={image.id}>
                     <img src={image.image}  className='cursor-pointer shadow-lg' onClick={handleImage} />
                  </div>
               )
            })}
         </div>

         <div className='flex items-center justify-center '>
            <img src={selectedImage} alt=""  className='shadow-xl'/>
         </div>
      </div>
   )
}

export default Content