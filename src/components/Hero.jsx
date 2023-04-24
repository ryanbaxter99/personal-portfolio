import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";

const Hero = () => {
  const delayStep = 0.2; // Delay for the animation

  return (
    <section className="relative w-full about-padding mx-auto desktop-hero-container">
      <div className={`absolute inset-0 top-[140px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 hero-center`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#38BDF8]' />
          <div className='w-1 sm:h-80 h-40 sky-blue' />
        </div>

        <div className="ml-5 text-content">
          {/* Hero greeting */}
          <motion.h3 className={`text-sky-400 font-light`} initial="hidden" animate="show" exit="hidden" variants={slideIn("left", "spring", 0, 0.5)}>
            Hi, my name is
          </motion.h3>

          {/* Hero name */}
        <motion.h1 className={`text-white font-black md:text-[3.75rem] sm:text-[3.125rem] xs:text-[2.5rem] text-[1.875rem]`}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={slideIn("left", "spring", delayStep, 0.5)}
        >
          Ryan Baxter.
        </motion.h1>

        {/* Hero sub title */}
        <motion.h2 className={`text-sky-400 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={slideIn("right", "spring", delayStep * 2, 0.5)}
        >
          <ReactTypingEffect
            text={['I Make Software.']}
            speed={100}
            eraseSpeed={50}
            typingDelay={1000}
            cursorClassName="text-white"
          />
        </motion.h2>

          {/* Hero About Me */}
          <motion.p
            className={`mt-2 text-white-100 hero-disc sm:small-hero-disc`}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={slideIn("right", "spring", delayStep * 3, 0.5)}
          >
            As a software developer, I have a strong passion for creating web applications that are both functional and 
            aesthetically pleasing. Currently, I am gaining valuable experience as a full stack SWE Intern at 
            &nbsp;<a href="https://www.ncino.com/" className="text-sky-400 hover:text-emerald-400">nCino</a>, 
            while also working as a freelance developer. I have several ongoing projects and I am constantly seeking 
            new opportunities to further hone my skills and expand my knowledge.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
