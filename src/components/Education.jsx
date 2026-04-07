import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const experiences = [
    {
      degree: "Bachelor's Degree",
      institution: "Bhadrak, Odisha",
      period: "2021 - 2025",
      desc: "Focused on Computer Science and Java Development. Maintaining a strong academic record and participating in various technical workshops.",
      color: "bg-purple-600",
      accent: "text-purple-400"
    },
    {
      degree: "Higher Secondary",
      institution: "Science Stream",
      period: "2019 - 2021",
      desc: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
      color: "bg-cyan-400",
      accent: "text-cyan-400"
    }
  ]

  return (
    <section id="education" className="py-40 bg-slate-900/30">
        <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
                <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">Academic <span className="text-gradient">Journey</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">My educational background that shaped my technical foundation.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent"></div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`relative pl-12 md:pl-0 md:flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                      >
                        <div className={`md:w-1/2 p-8 glass rounded-3xl relative hover:border-white/20 transition-all group ${i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                           <div className="flex items-center gap-3 mb-4">
                              <span className={`text-[10px] font-bold px-3 py-1 ${exp.color}/20 ${exp.accent} border border-white/10 rounded-full`}>
                                 {exp.period}
                              </span>
                              <div className="bg-slate-700/50 p-2 rounded-lg">
                                <GraduationCap size={16} className={exp.accent} />
                              </div>
                           </div>
                           <h3 className={`text-2xl font-bold ${exp.accent} mb-2`}>{exp.degree}</h3>
                           <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                              <MapPin size={14} /> <span>{exp.institution}</span>
                           </div>
                           <p className="text-slate-300 text-sm leading-relaxed">{exp.desc}</p>
                           
                           {/* Timeline dot */}
                           <div className={`absolute -left-[30px] md:left-auto ${i % 2 === 0 ? 'md:-right-[55px]' : 'md:-left-[55px]'} top-8 w-6 h-6 rounded-full ${exp.color} border-4 border-slate-900 z-10 shadow-[0_0_15px_${exp.color}77]`}></div>
                        </div>
                      </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
