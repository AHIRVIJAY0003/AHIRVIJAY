import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Collection from './Collection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Layout() {
  return (
    <>
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<Aboutus />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/collection" element={<Collection />} />
              </Routes>
          </Router>
    </>
  )
}
