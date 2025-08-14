import React from 'react';
import './css/index.css'
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className='bg-[var(--background)] h-[100vh] flex flex-col'>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
