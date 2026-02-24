import React from 'react'
import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Your Info',
      description: 'Fill out the short form below with your name, contact info, and a note about your property.'
    },
    {
      number: '2',
      title: 'We Make You an Offer',
      description: 'We\'ll review your property and reach out with a fair, no-obligation cash offer.'
    },
    {
      number: '3',
      title: 'You Get Paid',
      description: 'We handle closing. Funds are sent by check or wire transfer on your timeline.'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="section-title">Three Simple Steps</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
