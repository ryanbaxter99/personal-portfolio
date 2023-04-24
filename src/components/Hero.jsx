import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <section className="relative w-full about-padding mx-auto desktop-hero-container">
      <div className={`absolute inset-0 top-[140px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 hero-center`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#38BDF8]' />
          <div className='w-1 sm:h-80 h-40 sky-blue' />
        </div>

        <div className="ml-5 text-content">
          {/* Hero greeting */}
          <h3 className={`text-sky-400 font-light`}>Hi, my name is</h3>

          {/* Hero name */}
          <h1 className={`text-white font-black md:text-[3.75rem] sm:text-[3.125rem] xs:text-[2.5rem] text-[1.875rem]`}>
            Ryan Baxter.
          </h1>

          {/* Hero sub title */}
          <h2 className={`text-sky-400 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          <ReactTypingEffect
              text={['I Make Software.']}
              speed={100}
              eraseSpeed={50}
              typingDelay={1000}
              cursorClassName="text-white"
            />
          </h2>

          {/* Hero About Me */}
          <p className={`mt-2 text-white-100 hero-disc sm:small-hero-disc`}> 
            As a software developer, I have a strong passion for creating web applications that are both functional and 
            aesthetically pleasing. Currently, I am gaining valuable experience as a full stack SWE Intern at 
            &nbsp;<a href="https://www.ncino.com/" className="text-sky-400 hover:text-emerald-400">nCino</a>, 
            while also working as a freelance developer. I have several ongoing projects and I am constantly seeking 
            new opportunities to further hone my skills and expand my knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
