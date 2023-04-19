import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// component for the tech bubbles
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* map over the js tech tree */}
      {technologies.map((technology) =>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default Tech