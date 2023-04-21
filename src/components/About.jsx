import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tech } from "../components";
import { technologies } from "../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionBullet}>Introduction</p>

        <h2 className={styles.sectionHeadText}>About Me</h2>

        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="md:w-2/3 lg:w-1/2 xl:w-5/12">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Hello! My name is Ryan, and I'm a software engineer residing in Ann
              Arbor, MI. I have an insatiable appetite for learning about emerging
              technologies and a fervent passion for programming and software
              development. My forte lies in crafting digital products for the web,
              be it websites, applications, or any other web-based solutions. My
              ultimate objective is to create robust, scalable, and efficient
              software that delivers exceptional user experiences.
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              I'm a Computer Science student at the University of Michigan, where
              I'm sharpening my technical skills. During the 2022 and 2023 calendar
              years, I had the privilege of interning at nCino, where I gained
              invaluable industry experience. Upon graduation in 2023, I will embark
              on a new journey as a Software Development Engineer (SDE I) at{" "}
              <a
                href="https://www.dominos.com/"
                className="text-sky-400 hover:text-emerald-400"
              >
                Domino's.
              </a>
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Here are a few technologies I have worked with:
            </motion.p>

            <ul className="technology-list mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] list-none ">
              {technologies.map((technology) => (
                <li key={technology.name} className="mb-2">
                  {technology.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 lg:w-1/2 xl:w-7/12 flex justify-center lg:block lg:mt-6 mt-6 md:mt-0">
            <div className="mt-4">
              <Tech />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
