/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Content = () => {
   const [activeValue, setActiveValue] = useState(0);

   const [data, setData] = useState([
      { title: "Content of Tab 1:", text: 'HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more.' },

      { title: "Content of Tab 2:", text: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML." },

      { title: "Content of Tab 3:", text: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code." }
   ])

   console.log(activeValue)

   return (
      <div className='w-[600px] border rounded-2xl'>
         <div className='flex'>
            {data.map((item, index) => <div onClick={(e) => setActiveValue(parseInt(e.target.getAttribute('data-index')))} key={index}
               className={`p-2 px-6 ${index === 0 ? "rounded-tl-2xl" : ""} text-white cursor-pointer ${activeValue === index ? "bg-blue-400" : "bg-[#ADD8E6]"}`} data-index={index}>Tab{index + 1}</div>)}
         </div>
         {data.map((item, index) => {
            return (
               <div className={` mt-3 p-3 ${activeValue === index ? "block" : "hidden"}`} key={index}>
                  <div >
                     <h4 className='font-bold text-2xl'>{item.title}</h4>
                     <p className='mt-4'>{item.text}</p>
                  </div>
               </div>
            )
         })
         }

      </div>
   )
}

export default Content