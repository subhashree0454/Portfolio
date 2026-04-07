import { Code, Layout, Database, Settings, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillGroups = [
    {
      title: 'Backend',
      icon: <Code className="text-purple-400" />,
      color: 'border-purple-500',
      bg: 'bg-purple-500/10',
      list: ['Core & Adv Java', 'Spring Boot', 'Hibernate & JPA', 'RESTful APIs']
    },
    {
      title: 'Frontend',
      icon: <Layout className="text-cyan-400" />,
      color: 'border-cyan-400',
      bg: 'bg-cyan-400/10',
      list: ['React.js (v19+)', 'Tailwind CSS v4', 'JavaScript (ES6+)', 'Redux ToolKit']
    },
    {
      title: 'Database',
      icon: <Database className="text-blue-400" />,
      color: 'border-blue-500',
      bg: 'bg-blue-500/10',
      list: ['MySQL Mastery', 'PostgreSQL', 'MongoDB basics', 'Query Optimization']
    },
    {
      title: 'Core Tools',
      icon: <Settings className="text-green-400" />,
      color: 'border-green-400',
      bg: 'bg-green-400/10',
      list: ['Git & Dev Pipeline', 'Docker containers', 'Postman / Swagger', 'Linux / Unix']
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto">Mastering the technologies that power modern web and enterprise applications.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className={`glass p-8 rounded-3xl border-b-4 ${group.color} hover:bg-slate-800/80 transition-all duration-300 transform group hover:-translate-y-2`}
            >
              <div className={`w-14 h-14 ${group.bg} rounded-2xl flex items-center justify-center mb-6 grow-on-hover`}>
                {group.icon}
              </div>
              <h3 className="text-xl font-bold font-space mb-6 whitespace-nowrap">{group.title}</h3>
              <ul className="text-slate-400 space-y-3 text-sm">
                {group.list.map((skill, si) => (
                  <li key={si} className="flex items-center group">
                    <CheckCircle2 size={12} className={`mr-2 transition-all ${group.color.replace('border', 'text')}`} />
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
