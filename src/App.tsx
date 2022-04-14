import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sizes } from './components/sizesComponent';

const sizes = {
  s: {
    fontSize: 8
  },
  m: {
    fontSize: 10
  },
  l: {
    fontSize: 12
  },
  xl: {
    fontSize: 14
  }
}

export const SizeContext = createContext(sizes.m);

function App() {
  const [currentSize, setCurrentSize] = useState('m' as keyof typeof sizes);
  return (
    <>
      <div className="container">
        <div className="row">
          <button style={{backgroundColor:'orange'}} className="col" onClick={() => setCurrentSize('s')}> Small size</button>
          <button style={{backgroundColor:'red'}} onClick={() => setCurrentSize('m')}> Medium size</button>
          <button style={{backgroundColor:'green'}} className="col" onClick={() => setCurrentSize('l')}> Large size</button>
          <button style={{backgroundColor:'blue'}} className="col" onClick={() => setCurrentSize('xl')}> Extra Large size</button>
        </div>
        <div className="row">
        <SizeContext.Provider value={sizes[currentSize]}>
          <Sizes />
        </SizeContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
