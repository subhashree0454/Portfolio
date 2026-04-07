import { Award, Code, Database, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      desc: 'Comprehensive certification covering Core Java, Spring Boot, React, and MySQL.',
      issuer: 'Technical Institute',
      icon: <Award className="text-purple-400" />,
      bg: 'bg-purple-600/10'
    },
    {
      title: 'Modern React & Redux',
      desc: 'Mastery in building scalable frontend applications with React Hooks and State Management.',
      issuer: 'Online Academy',
      icon: <Code className="text-cyan-400" />,
      bg: 'bg-cyan-400/10'
    },
    {
      title: 'SQL & Database Design',
      desc: 'Proficiency in relational database management, complex queries, and optimization.',
      issuer: 'University Workshop',
      icon: <Database className="text-blue-400" />,
      bg: 'bg-blue-500/10'
    }
  ]

  return (
    <section id="certifications" className="py-40 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">My <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] group hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-4 shadow-xl border-white/5 hover:border-white/20"
            >
              <div className={`w-16 h-16 ${cert.bg} rounded-3xl flex items-center justify-center mb-10 transition-all group-hover:scale-110 group-hover:rotate-12`}>
                {cert.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-space">{cert.title}</h3>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed">{cert.desc}</p>
              <div className="flex items-center justify-between">
                 <span className="text-xs text-cyan-400 font-mono tracking-tighter">Issued by: {cert.issuer}</span>
                 <motion.button className="text-slate-400 group-hover:text-white transition-colors">
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
