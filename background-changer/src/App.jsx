import { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const container = document.querySelector('.bg-container');
    if (container) {
      container.style.backgroundColor = color;
    }
  }, [color]);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center bg-container">
        <Content setColor={setColor} />
      </div>
    </>
  );
}

export default App;
