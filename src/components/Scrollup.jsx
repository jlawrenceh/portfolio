import React from 'react'
import "../styles/Scrollup.css";


function Scrollup() {

    window.addEventListener("scroll",function () {
        const scrollUp = document.querySelector(".scrollup");
        // when the scroll is higher than 560 viewport height,
        // add the show-scroll class to a tag with scrollup class

        if (this.scrollY >= 560)
        { scrollUp.classList.add("show-scroll");}
        else {
            scrollUp.classList.remove("show-scroll");
        }
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup