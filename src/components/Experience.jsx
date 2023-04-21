import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Need to set the expierence card component
const ExperienceCard = ({ experience }) => (
  // not need to set the timeline element
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: '#fff' }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    // work experience icon
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    {/* experience card discription contents */}
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    
    <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
)

// the experience component 
const Experience = () => {
  return (
    <>
      {/* this will make the text animte */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionBullet} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {/* now using the vertical timeline component */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience.${index}`}
              experience={experience}
              />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")