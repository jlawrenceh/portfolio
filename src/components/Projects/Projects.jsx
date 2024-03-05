import React, {useRef} from 'react';
import "./projects.css";

import placeholder from "../../assets/projects/placeholder.webp";
import ferbs from "../../assets/projects/ferbs.png";
import estrellados from "../../assets/projects/estrellados.png";
import {motion, useScroll ,useTransform } from "framer-motion";



function Projects() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
   
  return (
    <section className="projects container section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle"></span>

        
        <motion.div 
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}>
            <div className="projects__container container">
            <h3 className="hidden_title"> Project 1 title</h3>
            <div className="imgContainer">
                <img src={ferbs}></img>
            </div>
            <div>
                <h3>Ferbs</h3>
                <span>
                    An application that uses HTR technology to detect and recognize 
                    handwritten markup language with rendering capabilities. I was responsible for machine learning.
                </span>
            </div>

            <h3 className="hidden_title"> Project 1 title</h3>
            <div className="project__image2">
                <img src={estrellados}></img>
            </div>

            <div>
                <h3>Estrellado's </h3>
                <span>
                    A food ordering app that for with a dashboard for both user and admin respectively.
                    App features CRUD operations using plain PHP, HTML, and CSS.
                </span>
            </div>

            <h3 className="hidden_title"> Project 1 title</h3>
            <div>
                <img src={placeholder}></img>
            </div>
            <div>
                <h3>More projects coming soon</h3>
                <span>
                    I am currently creating a full stack web app. I'll update this section once it's done. 
                </span>
            </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects