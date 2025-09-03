import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <>
    <div className='header1'>
        <header>
            <h1>React-Router</h1></header>
        <nav className='navbar1'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/collection">Collection</Link></li>
            </ul>
        </nav>
        
    </div>
    </>
  )
};