import React from 'react'
import './Style/ContactMe.css'

export default function ContactMe() {
    return (
        <div className="ContactMe">
            <h1 className="contact__header">Contact Me</h1>
            <form action="https://submit-form.com/QL2cL0nQU3o5v4PPw3bMW" target="_self">
                    {/* <div className="form__container"> */}
                    <input type="hidden" name="_redirect" value="https://jesusfernandorios.github.io/react-portfolio/"/>
                    <h3>E-mail</h3>
                    <input type="text" name="email" placeholder="Email"/>
                    <h3>Subject</h3>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <h3>Message</h3>
                    <textarea name="message" placeholder="Message"></textarea>
                    <br/>
                    {/* <!-- A button of type submit --> */}
                    <button type="submit">Submit</button>
                 {/* </div> */}
                    
            </form>
        </div>
    )
}
