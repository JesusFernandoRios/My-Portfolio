import React from "react";
import "./Style/ContactMe.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function ContactMe({ color, ringColors }) {
  const contactFormStyle = {
    boxShadow: `0 0 50px gray`,
  };
  return (
    <div id="Contact" className="contactMe">
      <h1 className="contact__header">Contact Me</h1>

      <div className="contact__form" style={contactFormStyle}>
        <div className="contact__information">
          <h2>
            For a quick response message me here directly or for more
            information checkout my social media
          </h2>
          <hr className="contact__line" />

          <div className="contact__links">
            <a
              href="https://www.linkedin.com/in/jrios93/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/JesusFernandoRios"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <hr />
        <form
          action="https://submit-form.com/QL2cL0nQU3o5v4PPw3bMW"
          target="_self"
        >
          <input type="hidden" name="_feedback.dark" value="true" />
          <input
            type="hidden"
            name="_feedback.success.title"
            value="Thank You for contacting me!
                            I will get back to you soon."
          />
          {/* <div className="form__container"> */}
          <h3>E-mail</h3>
          <input type="text" name="email" placeholder="Email" />
          <h3>Subject</h3>
          <input type="text" name="subject" placeholder="Subject" />
          <h3>Message</h3>
          <textarea name="message" placeholder="Message"></textarea>
          <br />
          {/* <!-- A button of type submit --> */}
          <button className=" project-links submitBtn" type="submit">
            Send Message
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
