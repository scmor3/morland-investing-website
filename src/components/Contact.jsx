import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Replace YOUR_FORM_ID with your Formspree form ID
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        alert('There was an error submitting your form. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again.')
    }
  }

  return (
    <section id="get-cash-offer" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Ready to Get Your Cash Offer?</h2>
        <p className="section-subtitle">
          Fill out the form below and we'll be in touch shortly. No obligation, no pressure.
        </p>
        {submitted ? (
          <div className="success-message">
            Thanks! We'll be in touch soon.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message / Tell us about your property</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Optional: Share details about your property..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send My Info</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
