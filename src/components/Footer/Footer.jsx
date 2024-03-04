import React from 'react'
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">JOHN LAWRENCE HERNANDEZ</h1>

            <div className="footer__social">
            <a 
            href="https:/github.com/jlawrenceh" 
            className="footer__social-link" 
            target="_blank"
            >
                <i className="bx bxl-github"></i>
            </a>

            <a 
           href="mailto:jlawrencehernandez@gmail.com"
            className="footer__social-link" 
            target="_blank"
            >
                <i className="bx bxl-gmail"></i>
            </a>



            <a 
            href="https://www.linkedin.com/in/johnlawrencemhernandez/"
            className="footer__social-link" 
            target="_blank"
            >
                <i className="bx bxl-linkedin"></i>
            </a>
            </div>

            <span className = "footer__copy">
                &#169; 2024 John Lawrence Hernandez. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer