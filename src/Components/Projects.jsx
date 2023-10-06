import React from "react";
import "./Style/Projects.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Style/slider-animations.css";
import covidTracker from "../media/covid.png";
import google from "../media/googlebksrch.png";
import chatapp from "../media/Chatapp.png";

const content = [
  {
    title: "Covid Information Tracker",
    description:
      "I Created this Application to share with my friends and family so they can be updated on covid information regarging total cases, cases by country, recoveries and deaths.",
    button: "Repository",
    repository: "https://github.com/JesusFernandoRios/Covid-19-tracker",
    secondButton: "Live Application",
    live: "https://jesusfernandorios.github.io/Covid-19-tracker/",
    image: covidTracker,
  },
  {
    title: "Google API Book Search",
    description:
      "Search and save book titles using this application. It Takes book information from google books and lets you save them for later",
    button: "Repository",
    repository: "https://github.com/JesusFernandoRios/googleBookSearch",
    secondButton: "Live Application",
    live: "https://sleepy-hollows.herokuapp.com/",
    image: google,
  },
];

export default function Projects({ color, ringColors }) {
  const titleStyle = {
    marginLeft: "7%",
    color:
      ringColors[color] != "black" ? `dark${ringColors[color]}` : "darkgray",
  };
  return (
    <div id="Projects" className="Projects">
      <div className="projects__content">
        <h1 style={titleStyle}>My Projects</h1>

        <h4>
          I approach all projects with passion, curiosity and a learning
          mentality.
        </h4>

        <h4>Here are some of my completed and ongoing projects</h4>
      </div>

      <Slider className="slider-wrapper-project ">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <a
                className="project-links"
                href={item.repository}
                target="_blank"
                rel="noreferrer"
              >
                {item.button}
              </a>
              <a
                className="project-links"
                href={item.live}
                target="_blank"
                rel="noreferrer"
              >
                {item.secondButton}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
