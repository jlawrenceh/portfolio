import React from 'react';
import Frontend from "./Techstack";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Tech Stacks</h2>
            <span className="section__subtitle">Technologies that I've used through out my journey</span>

            <div className="skills__container container grid">
              <div className="techstack-box">
                <Frontend/>
              </div>
              
              
            </div>
    </section>
  )
}
export default Skills