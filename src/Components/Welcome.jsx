import React from 'react'
import './Style/Welcome.css'
function Welcome() {
    return (
        <div className="Welcome">
            <header className="top">
                <div className="logo">
                    <div className="name">Jesus Fernando Rios</div>
                    <div>Full Stack Developer</div>
                </div>
                <div className="navbar">
                    <ul className="links">
                        <li><a href=".AboutMe">About Me</a></li>
                        <li><a href="null">Portfolio</a></li>
                        <li><a href="null">Contact Me</a></li>
                    </ul>
                </div>
            </header>

            <div className="center__content">
                <h1>WELCOME</h1>
                <p>Let's Create Amazing Things Together</p>
            </div>



        </div>
    )
}

export default Welcome
