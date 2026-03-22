import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { motion } from 'framer-motion'
import me from '../assets/me.jpg'

const About = () => {

 const stats = [
  {label : "Experience", value : "Fresher"},
  {label : "Specialization", value : "Full Stack "},
  {label : "Focus", value : "Building Scalable Web Applications"},
 ] 

const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] "
]

  return (
   <section id='about' className='min-h-screen w-full flex items-center justify-center bg-black relative text-white overflow-hidden'>

    <ParticlesBackground/>

    <div className='absolute inset-0 pointer-events-none'>
      {glows.map((c,i) => (
        <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}></div>
      ))}
    </div>


    <div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12'>

      <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true , amount: 0.4}}
      
      >

        <motion.div className="relative w-[260px] h-[360px] mg:w-[360px] md:h-[320px] rounded overflow-hidden flex-shrink-0 shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"

        whileHover={{scale:1.05}}
        transition={{type:"spring" , stiffness:200 , damping:18}}
        
        >
          <img src={me} alt="profile_pic" className='absolute inset-0'/>
        </motion.div>

        <div className='flex-1 flex flex-col justify-center text-center md:text-left'>

          <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>Ritesh Awadhiya</h2>

          <p className='font-semibold mt-2 text-lg sm:text-xl text-white/90'>Full-Stack Developer</p>

          <p className='text-lg text-gray-300 mt-4 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl mx-auto md:mx-0'>
            I build scalable, modern applications with a strong focus on clean architecture, performance, and delightful UX. My toolkit spans Java, React, Node.js, MongoDB, and Tailwind CSS - bringing ideas to life with smooth APIs and pixel-perfect interfaces.
          </p>

        <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-xl text-center '>
          {stats.map((item, i) => (
            <motion.div key={i} className='rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-center justify-center'

            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i*0.5 }}
            viewport={{ once: true , amount: 0.4}}
            >

            <div className='text-sm text-gray-400'>{item.label}</div>
            <div className='text-base font-semibold'>{item.value}</div>

            </motion.div>
          ))}
        </div>

        <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
          <a href="#projects" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-300 transition'>View Projects</a>

          <a href="#contact" className='inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition'>Get in Touch</a>
        </div>


        </div>


      </motion.div>
      
      <motion.div className='text-center md:text-left'
      
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true , amount: 0.4}}
      >
        <div className='flex flex-col gap-8 text-center'>
        <h3 className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>About Me</h3>

        <p className='text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl max-w-6xl mx-auto'>I'm a Software Developer and Tech Enthusiast who loves crafting performant, user-centric web experiences. I focus on blending clean UI design with solid engineering - building fast, reliable, and accessible web applications.</p>

        <p className='text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl max-w-6xl mx-auto'>I love turning creative ideas into scalable, user-friendly products that make a real impact. My mission is to build solutions that are beautiful, efficient, and meaningful.</p>

        <p className='text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl max-w-6xl mx-auto'>I love representing my team, leading them, guiding students and juniors, and helping them grow.</p>
        </div>
      </motion.div>
    </div>

   </section>
  )
}

export default About
