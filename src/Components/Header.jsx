import React from 'react'
import './Style/Header.css'

function Header() {
    return (
        <header className="top">
            <div className="print">
                <div className="name">Jesus Fernando Rios</div>
                <div>Full Stack Developer</div>
            </div>
            <div className="welcome__navbar">
                <ul className="links">
                    <li><a id="welcome" href="#About">About Me |</a></li>
                    <li><a id="welcome" href="#Projects">Portfolio |</a></li>
                    <li><a id="welcome" href="#Contact">Contact Me |</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
