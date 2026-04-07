import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.5 }}
               className="mb-8"
            >
              <h4 className="text-3xl font-bold font-space text-gradient mb-2 cursor-pointer">SS.</h4>
            </motion.div>
            <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
               Built with precision and passion. A Java Full Stack Portfolio refined for the 2026 digital landscape.
            </p>
            <p className="text-slate-600 text-xs flex items-center justify-center gap-2">
               © 2026 Subhashree Sahu | Made with <motion.span 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-red-500"
               ><Heart size={14} fill="currentColor" /></motion.span> in Dark Mode
            </p>
        </div>
        
        {/* Background Accents (2026 polish) */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-400/5 blur-[120px] pointer-events-none"></div>
    </footer>
  )
}

export default Footer
