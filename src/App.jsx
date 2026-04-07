import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Background from './components/Background'

function App() {
  return (
    <div className="relative selection:bg-cyan-400 selection:text-slate-900 overflow-hidden">
      {/* 2026 Background Landscape */}
      <Background />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      
      {/* 2026 Utility Components */}
      <BackToTop />
    </div>
  )
}

export default App
