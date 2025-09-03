import React from 'react'
import Home from './Home'

export default function Contact() {
  return (
    <>
    <Home />
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
    
    </>
  )
}
