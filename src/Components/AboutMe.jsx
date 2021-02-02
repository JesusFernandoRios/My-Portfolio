import React from 'react'
import Me from '../media/me.jpeg'
import './Style/AboutMe.css'

export default function AboutMe() {
    return (
        <div id="About" className="AboutMe">
            <div className="left">
                <h1>About Me</h1>
                <h4>
                    I've worked my way up in the Restaurant Industry, which lead me to become Head Chef at a local Japanese restaurant. 
                    Although this has been fulfilling, I've always been drawn towards my hobbies involving Web development. This has pushed me to make a 
                    career change and start a new chapter in my life. Having earned my certification from the University of Arizona. 
                    I am eager to refine and evolve my skill set and become more established as a business professional in this field. 
                    My goal is to retire my Yanagiba knife and to dive deep into my new career as a Full Stack Developer.

                </h4>
            
            </div>
            <div className="right">
                <img className="myPicture" src={Me} alt="Jesus Fernando Rios" />
            </div>

            
        </div>
    )
}
