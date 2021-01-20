import React from "react";
import './Style/Projects.css'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Style/slider-animations.css";
import covidTracker from '../media/covid.png'
import google from '../media/googlebksrch.png'

const content = [
  {
    title: "Covid Information Tracker",
    description:
      "I Created this Application to share with my friends and family so they can be updated on covid information regarging total cases, cases by country, recoveries and deaths.",
    button: "Repository",
    repository: "https://github.com/JesusFernandoRios/Covid-19-tracker",
    secondButton: "Live Application",
    live:"https://jesusfernandorios.github.io/Covid-19-tracker/",
    image: covidTracker,
  },
  {
    title: "Google API Book Search",
    description:
      "Search and save book titles using this application. It Takes book information from google books and lets you save them for later",
    button: "Repository",
    repository:"https://github.com/JesusFernandoRios/googleBookSearch",
    secondButton: "Live Application",
    live:"https://sleepy-hollows.herokuapp.com/",
    image: google,
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    secondButton: "Live Application",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  }
];


export default function Projects() {
    return (
        <div id="Projects" className="Projects">
            
            <div className="projects__navbar">
              <h1 className="myProjects">My Projects</h1>
            </div>

            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a className="project-links" href={item.repository} target="_blank">{item.button}</a>
                        <a className="project-links" href={item.live} target="_blank">{item.secondButton}</a>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
