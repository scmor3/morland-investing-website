import React from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Norbert J.',
      acreage: '2.5 acres',
      text: 'The sale process went very smoothly and it was a pleasure working with Mor and the title company. Everything was handled professionally from start to finish, and I appreciated how straightforward the whole experience was.'
    },
    {
      name: 'Gerald & Gena L.',
      acreage: '20 acres',
      text: 'This property held special memories for our family, but we hadn\'t used it in years. Mor made it so easy for us to sell. He handled everything and we got a fair offer. The whole process was stress-free.'
    },
    {
      name: 'Wendy W.',
      acreage: '2.27 acres',
      text: 'I was helping my parents sell their property and they were really struggling with the process. Mor listened to what we needed and made an offer that worked for everyone. He made a difficult situation so much easier.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What Landowners Are Saying</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-acreage">{testimonial.acreage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
