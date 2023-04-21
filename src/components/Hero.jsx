import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">Hero
  
      <div className={`absolute inset-0 top-[140px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#38BDF8]' />
          <div className='w-1 sm:h-80 h-40 sky-blue' />
        </div>

        <div className="ml-5">
          {/* Hero greeting */}
          <h3 className={`text-sky-400 font-light`}>Hi, my name is</h3>

          {/* Hero name */}
          <h1 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Ryan Baxter.</h1>

          {/* Hero sub title */}
          <h2 className={`text-sky-400 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>I can't code for the life of me.</h2>

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

      {/* Scroll down animation */}
      <div className="absolute inset-x-0 bottom-4 w-full flex justify-center items-center">
        <a href='#about'>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-8"
            />
          </div>
        </a>
      </div>
    </section>

  )
}

export default Hero