import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Will you lowball me on the offer?',
      answer: 'No. We make fair, market-based offers. Our goal is a win-win transaction where you get a fair price and we can make a reasonable profit. We\'re transparent about our process and happy to explain how we arrived at our offer.'
    },
    {
      question: 'How do I know you\'re legitimate?',
      answer: 'Morland Investing LLC is a licensed business. We\'ve successfully closed many land purchases and have satisfied sellers who are happy to share their experience. You can verify our legitimacy through our testimonials and by speaking with us directly.'
    },
    {
      question: 'What if I\'m not ready to sell yet?',
      answer: 'That\'s completely fine. There\'s no pressure or obligation. Get an offer, take your time to think about it, and decide when you\'re ready. We\'re here when you need us.'
    },
    {
      question: 'Do I really pay no fees or commissions?',
      answer: 'Yes. We cover all closing costs, and there are no agent commissions or hidden fees. The offer we make is the amount you receive. It\'s that simple.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Typically, we can close in as little as 20 days, sometimes faster. The timeline depends on your needs and the property details. We work on your schedule, not ours.'
    },
    {
      question: 'What if my land has issues (back taxes, liens, etc.)?',
      answer: 'We work with all situations. Behind on taxes? Inherited land you don\'t want? Liens or other issues? We\'ve handled it all. We can work through most situations and still make you a fair offer.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="section-title">Common Questions</h2>
        <p className="section-subtitle">
          We want you to feel completely comfortable. Here are answers to questions we hear often.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
