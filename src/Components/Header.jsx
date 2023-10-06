import React from 'react'
import './Style/Header.css'

function Header() {
    return (
        <header className="top">
            <div className="print">
                <div className="name__div">
                    <a className="name" href="#home">Jesus Fernando Rios</a>
                </div>
                <div className="title">Software Developer</div>
            </div>
            <div className="navbar">
                <ul className="links">
                    <li><a id="welcome" href="#About">|About </a></li>
            
                    <li><a id="welcome" href="#Projects">|Portfolio </a></li>
                    
                    <li><a id="welcome" href="#Contact">|Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
