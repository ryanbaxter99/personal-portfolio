import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from "../utils/motion";

// need to devine the service card component 
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45, 
          scale: 1, 
          speed: 450,
          }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt="web-development" 
            className="w-16 h-16 object-contain" 
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className={styles.sectionSubText}> 
          Introduction
        </p>

        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>

        {/* Overview expierence */}
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus illo laudantium asperiores est. 
            Dolorem distinctio possimus debitis consequatur sequi quibusdam, quo assumenda qui, harum iste laborum adipisci voluptatem, 
            sint suscipit ex vitae maiores. Temporibus culpa impedit molestiae voluptatum beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quia molestiae asperiores minima laboriosam consequatur quas rerum repellat voluptas esse fugit voluptates facilis et, 
            maxime ullam adipisci corrupti? Dolores eveniet eos mollitia dicta perspiciatis nobis laboriosam velit sed! Reprehenderit, nemo alias.
        </motion.p>

        {/* Expiernce Cards */}
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, 'about');