import { useState } from 'react'

import Header from './components/Header'
import Content from './components/Content'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)


  return (
    <> 
      <Header/>
      <div className='w-full mt-4 flex justify-center'>
           <Content/>
      </div>
    </>
  )
}

export default App
