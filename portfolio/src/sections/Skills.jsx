import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt , FaPython } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiTailwindCssFill } from 'react-icons/ri'
import { GrMysql } from 'react-icons/gr'
import { motion } from 'framer-motion'

const Skills = () => {

  const skills = [
    { icon: <FaJava />, name: "java", color: "#F8A623" },
    { icon: <FaHtml5 />, name: "html", color: "#E34C26" },
    { icon: <FaCss3 />, name: "css", color: "#1572B6" },
    { icon: <FaJs />, name: "javascript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "react", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "nodejs", color: "#68A063" },
    { icon: <SiMongodb />, name: "mongodb", color: "#13AA52" },
    { icon: <FaGitAlt />, name: "git", color: "#F54D27" },
    { icon: <BiLogoTypescript />, name: "typescript", color: "#3178C6" },
    { icon: <RiTailwindCssFill />, name: "tailwindcss", color: "#06B6D4" },
    { icon: <FaPython />, name: "python", color: "#3776AB" },
    { icon: <GrMysql />, name: "mysql", color: "#00758F" },

  ]
  return (
    <section 
    id='skills'
    className='min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden'>

      <ParticlesBackground/>

      <div className='absolute inset-0 pointer-events-none'>

        <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d3] opacity-10 blur-[120px] animate-pulse'/>

        <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d3] opacity-10 blur-[120px] animate-pulse delay-500'/>

      </div>

      <motion.h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent z-10 mb-4'
      
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}

      >
        Skills & Tools
      </motion.h2>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 z-10 max-w-7xl w-full'>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            whileHover={{ y: -5 }}
          >
            <div className='text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3' style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className='text-white font-medium capitalize text-center text-xs sm:text-sm'>{skill.name}</p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills
