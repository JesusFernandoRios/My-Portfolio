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
    secondButton: "Live Application",
    image: covidTracker,
  },
  {
    title: "Google API Book Search",
    description:
      "Search and save book titles using this application. It Takes book information from google books and lets you save them for later",
    button: "Repository",
    secondButton: "Live Application",
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
        <div className="Projects">
            <h1 className="myProjects">My Projects</h1>
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
                        <button>{item.button}</button>
                        <button>{item.secondButton}</button>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
