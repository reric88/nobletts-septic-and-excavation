import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className="gmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3164.7270795898066!2d-86.38983913454193!3d37.514354630343874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886f48dca5d65bbd%3A0x466e2ad6973529d1!2sNoblett%20Septic%20%26%20Excavating!5e0!3m2!1sen!2sus!4v1696515772939!5m2!1sen!2sus" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-info">
        <h3>Chris Lashley</h3>
        <p> - Owner/Operator</p>
        <a href="tel:+12702303693">(270) 230-3693</a>
        <h3>Frances Lashley</h3><a href="tel:+12705891245">(270) 589-1245</a>
      </div>
    </div>
  )
}
