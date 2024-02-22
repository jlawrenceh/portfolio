import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
 

  return (
    <>
      <Header/>
      
      <main className="main">
       <Home/>
       <About/>
      </main>
  
    </>
  )
}

export default App
