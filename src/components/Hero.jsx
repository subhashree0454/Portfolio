import { useRef, useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('.hero-content h3', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
      .from('.hero-content h1', { opacity: 0, y: 50, duration: 1, ease: 'power4.out' }, '-=0.4')
      .from('.hero-content h2', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
      .from('.hero-content p', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
      .from('.hero-image', { opacity: 0, scale: 0.8, duration: 1.2, ease: 'expo.out' }, '-=1')
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10" ref={heroRef}>
        <div className="hero-content">
          <h3 className="text-cyan-400 text-xl font-medium mb-4 tracking-wider uppercase font-space">Hi there, I am</h3>
          <h1 className="text-5xl md:text-8xl font-bold font-space mb-6 leading-tight whitespace-nowrap">
            <span className="text-white">Subhashree</span> <br />
            <span className="text-gradient">Sahu.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-medium mb-8 font-space">Java Developer | Full Stack Enthusiast</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed font-inter">
            Designing and building scalable software architectures with Java & modern frontend ecosystems. 
            I specialize in robust backend systems and premium digital experiences.
          </p>
          <div className="hero-cta flex gap-6">
            <a href="#projects" className="btn-premium flex items-center justify-center">View Work</a>
            <a 
              href="assets/Subhashree.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white/20 px-8 py-3 rounded-xl hover:bg-white/10 transition-all flex items-center text-slate-200 group"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" /> Resume
            </a>
          </div>
        </div>

        <div className="hero-image flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <motion.div 
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [0, 5, 0]
               }}
               transition={{ 
                 duration: 8, 
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="w-full h-full rounded-full overflow-hidden border-8 border-slate-900 bg-slate-800 shadow-2xl relative z-10"
            >
              <img src="assets/img.jpeg" alt="Subhashree Sahu" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
            </motion.div>
            
            {/* Animated Glow Rings */}
            <div className="absolute inset-x-0 bottom-0 top-0 m-auto w-[110%] h-[110%] border-2 border-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-x-0 bottom-0 top-0 m-auto w-[120%] h-[120%] border-2 border-cyan-400/10 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
