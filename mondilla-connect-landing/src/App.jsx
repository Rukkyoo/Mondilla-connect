import React from 'react';
import './css/index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[var(--background)] h-[100vh] flex flex-col'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
