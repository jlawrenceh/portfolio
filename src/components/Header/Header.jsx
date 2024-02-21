import React, {useState} from 'react';
import "./Header.css";


function Header() {

  return (
    <header className="header">
        <nav className="nav container">
            
                <a href="#" className="nav_logo"> 
                    LOGO 
                </a>
                <div className="nav_menu">
                        <ul className="nav_list">
                            <li><a href="#" className="nav_link">Home</a></li>
                            <li><a href="#" className="nav_link">About</a></li>
                            <li><a href="#" className="nav_link">Projects</a></li>
                            <li><a href="#" className="nav_link">Certifications</a></li>
                            <li><a href="#" className="nav_link">Contact</a></li>
                        </ul>
                </div>
        </nav>
    </header>
  )
}

export default Header