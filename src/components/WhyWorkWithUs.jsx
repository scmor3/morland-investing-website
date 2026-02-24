import React from 'react'
import './WhyWorkWithUs.css'

function WhyWorkWithUs() {
  const benefits = [
    {
      title: 'Fast & Simple',
      description: 'We make a fair offer quickly and handle everything. You don\'t lift a finger.',
      icon: '⚡'
    },
    {
      title: 'No Hidden Costs',
      description: 'No agent commissions, no fees, no surprises. What we offer is what you get.',
      icon: '💰'
    },
    {
      title: 'Any Situation Welcome',
      description: 'Behind on taxes? Inherited land you don\'t want? It doesn\'t matter — we\'re interested.',
      icon: '🤝'
    }
  ]

  return (
    <section id="why-work-with-us" className="why-work-with-us">
      <div className="why-work-with-us-container">
        <h2 className="section-title">Why Landowners Choose Morland Investing</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs
