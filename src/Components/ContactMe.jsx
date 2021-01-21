import React from 'react'
import './Style/ContactMe.css'

export default function ContactMe() {
    return (
        <div id="Contact" className="ContactMe">
            <h1 className="contact__header">Contact Me</h1>

            <div className="contact__form">
                <div className="contact__information">
                    <h2>For a Quick Response Message me here directly
                        Or checkout my social media
                    </h2>
                </div>
                <form action="https://submit-form.com/QL2cL0nQU3o5v4PPw3bMW" target="_self">
                    {/* <div className="form__container"> */}
                    <h3>E-mail</h3>
                    <input type="text" name="email" placeholder="Email"/>
                    <h3>Subject</h3>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <h3>Message</h3>
                    <textarea name="message" placeholder="Message"></textarea>
                    <br/>
                    {/* <!-- A button of type submit --> */}
                    <button className=" project-links submitBtn" type="submit">Send Message</button>
                 {/* </div> */}
                    
                </form>
            </div>
            
        </div>
    )
}
