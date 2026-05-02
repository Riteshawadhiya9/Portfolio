import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { motion } from 'framer-motion'
import Redefine from '../assets/Redefine.png'
import Image_Editor from '../assets/Image_Editor.png'
import snake_game from '../assets/snake_game.png'
import Task_Organizer from '../assets/Task_Organizer.png'
import Notes_project from '../assets/Notes_project.png'



// Projects Section
const Projects = () => {
  // Project Data - Fill in your own data here
  const projectsData = [
    {
      id: 1,
      image: Redefine,
      title: '3D_Gaming_Website',
      description: 'Experience an interactive 3D gaming platform showcasing next-generation web technologies. This project combines React.js for component management, Three.js for stunning 3D visualizations, GSAP for fluid animations, and Framer Motion for seamless UI transitions. Features include real-time 3D rendering, immersive gaming interfaces, responsive design with Tailwind CSS, and optimized performance with Vite. Perfect for gaming enthusiasts and developers exploring modern web3D capabilities.',
      technologies: ['React.js' , 'Tailwind CSS' , 'Three.js' , 'GSAP' , 'Vite' , 'Framer Motion'],
      links: {
        github: 'https://github.com/Riteshawadhiya9/3D_Gaming_Website',
        live: 'https://redefine-gaming26.netlify.app/'
      }
    },
    {
      id: 2,
      image:  Image_Editor,
      title: 'Image_Editor',
      description: 'Image Editor is a browser-based photo editing tool that allows users to upload and enhance images with adjustable filters for brightness, contrast, saturation, hue, blur, grayscale, and sepia effects. It includes preset filters for quick stylization, offers full undo/redo functionality, and provides real-time previews of all adjustments. Built with vanilla JavaScript for offline use, it enables instant image downloads while displaying file information like dimensions and size.',
      technologies: ['HTML' , 'CSS' , 'JavaScript'],
      links: {
        github: 'https://github.com/Riteshawadhiya9/Image-Editor',
        live: 'https://image-editor26.netlify.app/'
      }
    },
    {
      id: 3,
      image: snake_game,
      title: 'Snake_Game',
      description: 'A classic Snake Game built with vanilla JavaScript where players control a snake to consume food and grow longer. Features include wall and self-collision detection, progressive difficulty, spacebar pause, high score persistence, and arrow key controls with a direction queue system. The game features smooth animations, responsive controls, and a clean, modern UI.',
      technologies: ['HTML' , 'CSS' , 'JavaScript'],
      links: {
        github: 'https://github.com/Riteshawadhiya9/Snake_Game',
        live: 'https://snakeio26.netlify.app/'
      }
    },
    {
      id: 4,
      image: Notes_project,
      title: 'Notes-App',
      description: 'Notes App — A feature-rich frontend note-taking app built with React, Vite, and Tailwind CSS. Designed with a clean, dark-themed UI that adapts seamlessly across devices — offering a two-column layout on desktop and a tabbed interface on mobile. Core features include full CRUD operations, note pinning, real-time search and filtering, clipboard copy, and toast notifications for user feedback. A character counter in the editor adds a small but thoughtful touch to the overall experience.',
      technologies: ['HTML' , 'CSS' , 'JavaScript'],
      links: {
        github: 'https://github.com/Riteshawadhiya9/Notes_Project',
        live: 'https://notes-project-43.vercel.app/'
      }
    },
    {
      id: 5,
      image: '',
      title: '',
      description: '',
      technologies: [],
      links: {
        github: '',
        live: ''
      }
    },
    {
      id: 6,
      image: '',
      title: '',
      description: '',
      technologies: [],
      links: {
        github: '',
        live: ''
      }
    },
  ]

  return (
    <section id="projects" 
    className='min-h-screen w-full py-32 px-6 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden'
    >
      <ParticlesBackground />

      {/* Animated Background Effects */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#1cd8d2]/20 via-[#00bf8f]/20 to-[#1cd8d2]/20 opacity-30 blur-[100px] animate-pulse'/>
        <div className='absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/20 via-teal-600/20 to-cyan-600/20 opacity-30 blur-[100px] animate-pulse delay-700'/>
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl'>
        {/* Heading */}
        <div className='text-center mb-20'>
          <motion.h2 
            className='text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] mb-10'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className='text-gray-400 text-lg max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            
          </motion.p>
        </div>

        {/* Projects Grid - Responsive */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full'>
          {projectsData.filter(project => project.title).map((project, index) => (
            <motion.div
              key={project.id}
              className='w-full'
              style={{ minHeight: '480px' }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: false }}
            >
              <motion.div
                whileHover={{ boxShadow: '0 0 30px rgba(28, 216, 210, 0.4)' }}
                className='h-full'
              >
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  links={project.links}
                  number={index + 1}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


// Project Card Component
const ProjectCard = ({ image, title, description, technologies, links, number }) => {
  return (
    <motion.div 
      className='w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 flex flex-col group relative'
      initial={{ borderColor: 'rgba(6, 182, 212, 0.2)' }}
      whileHover={{ borderColor: 'rgba(0, 191, 143, 0.6)' }}
    >
      <div 
        className='absolute top-2 left-2 bg-slate-800/50 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full z-10'
        style={{ textShadow: '0 0 8px rgba(28, 216, 210, 0.8)' }}
      >
        {number}
      </div>
      {/* Project Image Container */}
      <div className='h-40 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden relative flex-shrink-0'>
        {image ? (
          <motion.img 
            src={image} 
            alt={title} 
            className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500'
            initial={{ scale: 1 }}
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-slate-600'>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [Image goes here]
            </motion.div>
          </div>
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity'/>
      </div>

      {/* Project Info */}
      <div className='p-6 flex flex-col flex-grow'>
        {/* Title */}
        <motion.h3 
          className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2 line-clamp-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title || '[Project Title]'}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className='text-gray-300 text-xs leading-relaxed mb-3 flex-grow overflow-hidden line-clamp-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description || '[Project description goes here]'}
        </motion.p>

        {/* Technologies */}
        <motion.div 
          className='mb-3 flex flex-wrap gap-1'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {technologies && technologies.length > 0 ? (
            technologies.slice(0, 4).map((tech, index) => (
              <motion.span 
                key={index} 
                className='px-2 py-0.5 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/40 rounded-full text-xs font-medium text-cyan-300 hover:border-cyan-300 hover:bg-cyan-500/30 transition-all'
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))
          ) : (
            <span className='px-2 py-0.5 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-500'>
              [Tech]
            </span>
          )}
        </motion.div>

        {/* Links */}
        <motion.div 
          className='flex gap-2 mt-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {links && links.github ? (
            <motion.a 
              href={links.github} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='px-3 py-1.5 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border border-slate-600 hover:border-cyan-400/50 rounded-lg transition-all font-medium text-xs text-white flex-1 text-center'
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          ) : (
            <button disabled className='px-3 py-1.5 bg-slate-700/30 border border-slate-600 rounded-lg text-xs text-slate-600 cursor-not-allowed flex-1'>
              GitHub
            </button>
          )}
          {links && links.live ? (
            <motion.a 
              href={links.live} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 rounded-lg transition-all font-bold text-xs text-white flex-1 text-center'
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Site
            </motion.a>
          ) : (
            <button disabled className='px-3 py-1.5 bg-cyan-600/30 rounded-lg text-xs text-cyan-300/50 cursor-not-allowed flex-1'>
              Live Site
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}



export default Projects
