import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCTAClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    document.getElementById('get-cash-offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div className="header-container">
        <a href="#home" onClick={handleLogoClick} className="logo-link">
          <img src="/logo.png" alt="Morland Investing LLC" className="logo-img" />
        </a>
        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>
              How It Works
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>
              FAQ
            </a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
              Testimonials
            </a>
            <button className="nav-cta-button" onClick={handleCTAClick}>
              Get Your Cash Offer
            </button>
          </nav>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="cta-button desktop-cta" onClick={handleCTAClick}>
            Get Your Cash Offer
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
