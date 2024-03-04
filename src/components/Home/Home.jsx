import React from 'react';
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <div className="home" id="home">
    <section className="home section">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <Data/>
            </div>
        </div>
    </section>
    <ScrollDown/>
    </div>
  )
}

export default Home