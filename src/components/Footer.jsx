import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Morland Investing LLC" className="footer-logo-img" />
        </div>
        <p className="footer-tagline">Morland Investing LLC — A Fair Deal From a Real Person</p>
        <div className="footer-contact">
          <p>📧 morlandinvesting@gmail.com</p>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Morland Investing LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
