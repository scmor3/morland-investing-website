import React from 'react'
import './TrustBar.css'

function TrustBar() {
  const trustSignals = [
    { icon: '✓', text: 'No Obligation Offer' },
    { icon: '✓', text: 'Close in as Little as 20 Days' },
    { icon: '✓', text: 'We Handle All the Paperwork' },
    { icon: '✓', text: 'Any Condition, Any Situation' }
  ]

  return (
    <section className="trust-bar">
      <div className="trust-bar-container">
        {trustSignals.map((signal, index) => (
          <div key={index} className="trust-item">
            <span className="trust-icon">{signal.icon}</span>
            <span className="trust-text">{signal.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
