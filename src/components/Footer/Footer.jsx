import React from 'react'
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">LOGO</h1>

            <ul className="footer__list">
                <li>
                    <a href="#" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a 
            href="https:/github.com/jlawrenceh" 
            className="footer__social-link" 
            target="_blank"
            >
                <i className="bx bxl-github"></i>
            </a>

            <a 
            href="https://www.facebook.com" 
            className="footer__social-link" 
            target="_blank"
            >
                <i className="bx bxl-facebook"></i>
            </a>



            <a 
            href="https://www.instagram.com" 
            className="footer__social-link" 
            target="_blank"
            >
                <i className="bx bxl-instagram"></i>
            </a>
            </div>

            <span className = "footer__copy">
                &#169; johnlawrencehernandez. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer