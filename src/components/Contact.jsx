import { useState } from 'react'
import { Linkedin, Github, Mail, Send, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/subhashree-sahu-705026287/', color: 'hover:bg-cyan-500' },
    { icon: <Github size={24} />, href: 'https://github.com/subhashree0454', color: 'hover:bg-white/10' },
    { icon: <Mail size={24} />, href: 'mailto:sahusubhashree0454@gmail.com', color: 'hover:bg-purple-600' }
  ]

  return (
    <section id="contact" className="py-40 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto glass p-10 md:p-24 rounded-[3rem]"
        >
          <div className="grid md:grid-cols-2 gap-24">
            <div className="reveal">
              <h2 className="text-5xl md:text-7xl font-bold font-space mb-10 leading-tight">Let's build <br /><span className="text-gradient">Something.</span></h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed">I'm currently looking for new opportunities. My inbox is always open.</p>
              <div className="flex gap-10">
                {socialLinks.map((link, i) => (
                  <motion.a 
                    key={link.href}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-16 h-16 glass rounded-full flex items-center justify-center transition-all text-2xl ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        required
                        className="w-full bg-slate-800/30 border border-white/5 px-8 py-5 rounded-2xl focus:outline-none focus:border-cyan-400 focus:bg-slate-800/50 transition-all placeholder:text-slate-600 duration-300" 
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        required
                        className="w-full bg-slate-800/30 border border-white/5 px-8 py-5 rounded-2xl focus:outline-none focus:border-cyan-400 focus:bg-slate-800/50 transition-all placeholder:text-slate-600 duration-300" 
                      />
                    </div>
                    <div className="relative group">
                      <textarea 
                        placeholder="Your Message" 
                        rows="5" 
                        required
                        className="w-full bg-slate-800/30 border border-white/5 px-8 py-5 rounded-3xl focus:outline-none focus:border-cyan-400 focus:bg-slate-800/50 transition-all placeholder:text-slate-600 duration-300"
                      ></textarea>
                    </div>
                    <motion.button 
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       className="btn-premium w-full py-5 text-xl flex items-center justify-center gap-3"
                    >
                       <Send size={20} /> Send Message
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                  >
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 animate-bounce">
                       <CheckCircle size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                    <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
