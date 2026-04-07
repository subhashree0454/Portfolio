import { Mail, Phone, MapPin, Code, Cpu, Database, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const contactInfo = [
    { icon: <Mail size={18} />, text: 'sahusubhashree0454@gmail.com', color: 'hover:bg-purple-600' },
    { icon: <Phone size={18} />, text: '+91 9040270454', color: 'hover:bg-cyan-500' },
    { icon: <MapPin size={18} />, text: 'Bhadrak, Odisha', color: 'hover:bg-blue-600' }
  ]

  return (
    <section id="about" className="py-40 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <span className="text-gradient font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-8">Solving Problems with <span className="text-purple-400">Elegant Code</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I am a passionate and detail-oriented Java Developer based in Odisha. With a strong foundation in Core Java and Spring Boot, I enjoy crafting efficient backend systems that power modern applications.
            </p>
            <div className="flex flex-col space-y-6 text-slate-300">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 glass rounded-2xl flex items-center justify-center transition-all duration-300 ${info.color}`}>
                    {info.icon}
                  </div>
                  <span className="text-sm font-medium">{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
             <div className="glass p-2 rounded-[2.5rem] overflow-hidden translate-y-0 group-hover:-translate-y-4 transition-all duration-700 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Work space illustration" className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute inset-x-0 bottom-8 px-8">
                   <div className="glass-card p-6 backdrop-blur-md">
                      <h4 className="text-white font-bold text-xl mb-1">Architecture & Innovation</h4>
                      <p className="text-slate-400 text-sm">Passionate about building modern software landscapes.</p>
                   </div>
                </div>
             </div>
             
             {/* Abstract Decorations */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/20 blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/20 blur-2xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
