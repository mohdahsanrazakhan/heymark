import { SpeedInsights } from '@vercel/speed-insights/react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill';
import './App.css'

function App() {

  return (
    <section className='bg-[#CFC1AE] dark:bg-[#131313]'>
      <Hero />
      <About />
      <Skill />
      <Contact />
      <Footer />
      <SpeedInsights />
      {/* <Work /> */}
    </section>
  )
}

export default App