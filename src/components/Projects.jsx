import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'School Management',
      img: 'assets/project-1.png',
      desc: 'Full-featured system for attendance, registration and fees management using Java and React.',
      tags: ['Java', 'React', 'MySQL', 'Spring Boot'],
      color: 'text-purple-400'
    },
    {
      title: 'Library Management',
      img: 'assets/project-2.png',
      desc: 'Desktop application for inventory control and book tracking with JDBC and Swing.',
      tags: ['Java', 'Swing', 'JDBC', 'MySQL'],
      color: 'text-cyan-400'
    },
    {
      title: 'Online Bookstore',
      img: 'assets/project-3.png',
      desc: 'A full-stack e-commerce experience built with Spring Boot REST APIs and React frontend.',
      tags: ['Spring Boot', 'React', 'MySQL', 'Cloud'],
      color: 'text-blue-400'
    }
  ]

  return (
    <section id="projects" className="py-40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-sm">
                   <div className="flex gap-4">
                      <a href="#" className="p-3 bg-white/10 hover:bg-purple-600 rounded-full transition-all text-white"><Github size={20} /></a>
                      <a href="#" className="p-3 bg-white/10 hover:bg-cyan-500 rounded-full transition-all text-white"><ExternalLink size={20} /></a>
                   </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className={`text-2xl font-bold font-space ${project.color} mb-3`}>{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag, ti) => (
                      <span key={ti} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/5 rounded-full text-slate-300 border border-white/5 group-hover:border-white/20 transition-all">
                         {tag}
                      </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
