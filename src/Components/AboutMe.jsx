import React from 'react'
import Me from '../media/me.jpeg'
import './Style/AboutMe.css'

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <div className="left">
                <h1>About Me</h1>
                <h4>
                  I've worked my way up in the Restaurant Industry, which lead me to become Head Sushi Chef at a local Japanese restaurant. 
                    Although this has been fulfilling, I've always been drawn towards my hobbies involving computers. This has pushed me to decide to take a 
                career change and start a new chapter in my life. Having earned my certification from the University of Arizona's Programming Bootcamp. 
                I am eager to refine and evolve my skill set and become more established as a business professional in this field. 
                My goal is to retire my Yanagiba knife and to dive deep into my new career as a Web Developer.

            I am always eager to try new things, and I am always looking towards the future.  
                </h4>
            
            </div>
            <div className="right">
                <img className="myPicture" src={Me} alt="Jesus Fernando Rios" />
            </div>
        </div>
    )
}
