import { useState } from 'react'

import Header from './components/Header'
import Content from './components/Content'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)


  return (
    <> 
      <Header/>
      <div className='w-full h-screen flex items-center justify-center bg-gray-200'>
           <Content/>
      </div>
    </>
  )
}

export default App
