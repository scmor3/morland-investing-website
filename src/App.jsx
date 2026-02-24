import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import FAQ from './components/FAQ'
import WhyWorkWithUs from './components/WhyWorkWithUs'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustBar />
      <FAQ />
      <WhyWorkWithUs />
      <HowItWorks />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
