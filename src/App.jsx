import './Index.css';
import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Resume from './Components/Academics/Resume';
import Portfolio from './Components/Skills/Portfolio';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Projects/Services';
import Pricing from './Components/Certifications/Pricing';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
};

export default App
