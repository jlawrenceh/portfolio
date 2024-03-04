import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
 

  return (
    <>
      <Header/>
      
      <main className="main">
        <div className="hero">
          <Home/>
        </div>

        <About/>
        <Skills/>
        <Experience/>
        <Certificates/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
  
    </>
  )
}

export default App
