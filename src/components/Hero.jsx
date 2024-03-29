import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
      <div className={`${styles.paddingX} absolute inset-0 top-[10%] sm:top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center sm:mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-2xl sm:text-4xl lg:text-5xl`}>
            Hi, I'm <span className='text-[#915eff]'>Toshik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-xs sm:text-base lg:text-lg`}>
            Passionate Software Engnieer adept at transforming raw data into actionable insights.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute sm:bottom-5 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
