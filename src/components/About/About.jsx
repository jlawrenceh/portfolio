import React, {useState} from 'react'
import "./about.css";



function About() {

  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="about section" id="about">
        <div className="about_container container">

            <h2 className="section__title"> About Me</h2>
            <span lassName="section__subtitle"></span>
        <div className="">

        </div>
        
        <div className="details_container">
            <div className="image_container">   
            </div>
            
            <div className="details_tabbed_menu">
                <ul className="menu_title">
                    
                        <li className={ toggleState === 1 ? "tab  active-tab":"tab"}
                            onClick={ () => { setToggleState(1)}}
                        >
                            <h3 className="tab-title">      
                            <i class="uil uil-pen about__icon"></i>        
                                    About
                            </h3>
                                <div className={ toggleState === 1 
                                ? "horizontal-line" : " " }
                                />
                        </li>
                        
                        <li className={ toggleState=== 2 ? "tab  active-tab":"tab"}
                            onClick={ () => { setToggleState(2)}}
                        >
                            <h3 className="tab-title">      
                            <i className="uil uil-graduation-cap 
                            about__icon"></i>
                                    Education
                            </h3>
                            <div className={ toggleState === 2 
                                ? "horizontal-line" : " " }
                                />
                        </li>

                        <li className={ toggleState=== 3 ? "tab  active-tab":"tab"}
                            onClick={ () => { setToggleState(3)}}
                        >
                            <h3 className="tab-title">      
                            <i className="uil uil-briefcase 
                            about__icon"></i>
                                Experience
                            </h3>

                            <div className={ toggleState === 3
                                ? "horizontal-line" : " " }
                                />
                        </li>
                </ul>

                <div className={ toggleState === 1 ? "menu_content active-menu":"menu_content"}>
                    <p>Greetings! I'm Lawrence, a Computer Science enthusiast with a penchant for Software Engineering. My academic journey has been marked by a passion for leading and developing projects, showcasing my knack for logical thinking and programming prowess. Currently, I am immersing myself in the world of front-end development, aiming to further refine my skills in this dynamic field.</p> 
                </div>

                <div className={ toggleState === 2 ? "menu_content active-menu":"menu_content"}>
                    EDUCATION CONTENT --
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae facere porro praesentium inventore id dolore quibusdam ea
                        pariatur magni fuga iusto deleniti commodi quasi, 
                        umque veniam voluptate in. Nam, beatae!
                </div>
                <div className={ toggleState === 3 ? "menu_content active-menu":"menu_content"}>
                    EXPERIENCE CONTENT --
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae facere porro praesentium inventore id dolore quibusdam ea
                        pariatur magni fuga iusto deleniti commodi quasi, 
                        umque veniam voluptate in. Nam, beatae!
                </div>
                
            </div>

        </div>
          
  
        </div>
    </section>
  )
}

export default About