import React, {useState} from 'react';
import "./Header.css";


function Header() {
  const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            
                <a href="#" className="nav_logo"> 
                    LOGO 
                </a>
                <div className=
                { Toggle ? "nav_menu show-menu" : "nav_menu"}>
                        <ul className="nav_list">
                            <li className="nav_item">
                              
                              <a href="#" className="nav_link">
                                <i className="uil uil-estate nav_icon"></i>
                                Home
                              </a>
                            </li>

                            <li>
                              <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>
                                About
                              </a>
                            </li>
                            <li>

                              <a href="#" className="nav_link">
                              <i className="uil uil-briefcase nav_icon"></i>
                                Projects
                              </a>
                            </li>

                            <li>
                              <a href="#" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Certifications
                              </a>
                            </li>

                            <li>
                              <a href="#" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>
                                Contact
                              </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav_close" 
                           onClick={() =>showMenu(!Toggle)}
                        >    
                        </i>
                </div>

                <div className="nav_toggle" onClick={ () => showMenu(!Toggle)}>
                  <i className="uil uil-apps"></i>
                 </div>
        </nav>
    </header>
  )
}

export default Header