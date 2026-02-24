import React from 'react'
import './Header.css'

function Header() {
  const handleCTAClick = (e) => {
    e.preventDefault()
    document.getElementById('get-cash-offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" onClick={handleLogoClick} className="logo-link">
          <img src="/logo.png" alt="Morland Investing LLC" className="logo-img" />
        </a>
        <button className="cta-button" onClick={handleCTAClick}>
          Get Your Cash Offer
        </button>
      </div>
    </header>
  )
}

export default Header
