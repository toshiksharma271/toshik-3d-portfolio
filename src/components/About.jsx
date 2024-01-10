import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full transition  duration-1000  hover:duration-0">
    <motion.div
      variants={fadeIn("right", "spring", index, 10)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 40,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Toshik Sharma, a second-year Computer Science student, is a dynamic
        force in the world of technology. Armed with proficiency in MERN stack
        development, open source contributions, and a knack for competitive
        programming, I bring a wealth of skills to the table. My robust project
        portfolio showcases a harmonious blend of theoretical knowledge and
        practical prowess, positioning me as a potent force in the tech
        industry. Fueled by a relentless commitment to excellence, I am poised
        to make a lasting impact and contribute significantly to the
        ever-evolving landscape of web development and open source initiatives.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
