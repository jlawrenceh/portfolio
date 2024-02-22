import React from 'react';
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

import { FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Home() {
  return (
    <section className="home">

      <div className="home_container ">
          <div className="home_content">
            <div className="info_container">
              <h1 className="myName">
                Lawrence Hernandez
              </h1>
              <h3 className="role">
                Full-Stack Dev
              </h3>
              <div className="description">
                <p>
                  I am a graduate of Bachelor of Science in Computer Science 
                  with specialization in Software Engineering. I am a graduate of Bachelor of Science in Computer Science 
                  with specialization in Software Engineering.
                </p>
              </div>

              <div className="socials_container">
                
              </div>

              <div className="btn_container">
                <a href="#" className="home-btn">
                    Message Me <FaPaperPlane/>
                  </a>
                </div>
              </div>
              
          </div>
            <div className="square">
              <a href="#about" className="square-contents">
                <svg
                    width="32px"
                    height="32px"
                    className="home__scroll-mouse"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                    }}
                  >
                    <path
                      className="wheel"
                      d="M123.359,79.775l0,72.843"
                      style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "20px",
                        }}
                    ></path>
                    <path
                      id="mouse"
                      d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                      style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "20px",
                        }}
                    ></path>
                </svg>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
      </div>
      
    </section>
  )
}

export default Home