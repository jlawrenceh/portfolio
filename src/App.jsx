import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Qualifications from "./components/Qualifications";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
 

  return (
    <>
      <Header/>
      
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
        <Testimonials />
        <Contact/>
      </main>
      
    </>
  )
}

export default App
