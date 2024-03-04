import React from 'react'
import { Tooltip } from "react-tooltip";

function Frontend() {
  return (
    <div className="skills__content">
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="C++">
                  <i class="devicon-cplusplus-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="C#">
                  <i class="devicon-csharp-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Python">
                  <i class="devicon-python-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Java">
                  <i class="devicon-java-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="HTML">
                  <i class="devicon-html5-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="CSS">
                  <i class="devicon-css3-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="JavaScript">
                  <i class="devicon-javascript-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="React">
                  <i class="devicon-react-original"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Express JS">
                  <i class="devicon-express-original"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Node JS">
                  <i class="devicon-nodejs-plain-wordmark"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="MySQL">
                  <i class="devicon-mysql-original"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="MongoDB">
                  <i class="devicon-mongodb-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Tailwind">
                  <i class="devicon-tailwindcss-original"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Git">
                  <i class="devicon-git-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="PHP">
                  <i class="devicon-php-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Postman">
                  <i class="devicon-postman-plain"></i>
                  </div>
                <div className="skills__data" data-tooltip-id="item-tooltip" data-tooltip-content="Insomnia">
                  <i class="devicon-insomnia-plain"></i>
                  </div>

                  <Tooltip
                    id="item-tooltip"
                    place="bottom"
                    className="example"
                    style={{backgroundColor: "#5b5b5b"}}
                    />
            </div>
        </div>
    </div>
  )
}

export default Frontend