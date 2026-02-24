import React from 'react'
import './Hero.css'

function Hero() {
  const handleCTAClick = (e) => {
    e.preventDefault()
    document.getElementById('get-cash-offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-video-section">
            <div className="hero-video-wrapper">
              <div className="hero-video-placeholder">
                <div className="play-icon">▶</div>
                <p>Video coming soon</p>
              </div>
              {/* When ready, replace the placeholder with:
              <iframe 
                src="YOUR_YOUTUBE_EMBED_URL" 
                title="Mor Schlesinger Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>
          <div className="hero-text-section">
            <h1 className="hero-title">We'll Buy Your Vacant Land for Cash</h1>
            <p className="hero-subtitle">
              No fees. No commissions. We cover all closing costs.
            </p>
            <p className="hero-personal-note">
              Hi, I'm Mor — a real person, not a corporation. If you received one of our postcards, this is me.
            </p>
            <button className="hero-cta" onClick={handleCTAClick}>
              Get Your Free Cash Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
