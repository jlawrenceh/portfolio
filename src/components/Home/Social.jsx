import React from 'react'

function Social() {
  return (
    <div className="home__social">
        <a 
            href="https:/github.com/jlawrenceh" 
            className="home__social-icon" 
            target="_blank"
        >
            <i className="uil uil-github-alt"></i>
        </a>

        <a 
            href="https://www.dribbble.com" 
            className="home__social-icon" 
            target="_blank"
        >
            <i className="bx bxl-gmail"></i>
        </a>

       

        <a 
            href="https://www.linkedin.com/in/johnlawrencemhernandez/" 
            className="home__social-icon" 
            target="_blank"
        >
            <i className="uil uil-linkedin-alt"></i>
        </a>
    </div>
  )
}

export default Social