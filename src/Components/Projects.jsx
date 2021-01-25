import React from "react";
import './Style/Projects.css'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Style/slider-animations.css";
import covidTracker from '../media/covid.png'
import google from '../media/googlebksrch.png'
import html from '../media/skills/ihtml.png'
import bootstrap from '../media/skills/ibootstrap.png'
import css from '../media/skills/icss.png'
import express from '../media/skills/iexpress.png'
import github from '../media/skills/igithub.png'
import jquery from '../media/skills/ijquery.png'
import js from '../media/skills/ijs.png'
import mongo from '../media/skills/imongodb.png'
import mysql from '../media/skills/imysql.png'
import node from '../media/skills/inodejs.png'
import reactjs from '../media/skills/ireact.png'
import firebase from '../media/skills/ifirebase.png'
import npm from '../media/skills/inpm.png'

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
            
            <div className="projects__content">
              <h1 className="myProjects">My Projects</h1>

              <div className="project__skills">
                <img src={html} alt=""/>
                <img src={css} alt=""/>
                <img src={js} alt=""/>
                <img className="iconBackground" src={jquery} alt=""/>
                <img className="smallIcons" src={express} alt=""/>
                <img className="smallIcons" src={node} alt=""/>
                <img className="bootstrap" src={bootstrap} alt=""/>
                <img className="smallIcons" src={reactjs} alt=""/>
                <img className="smallIcons" src={mongo} alt=""/>
                <img className="smallIcons" src={mysql} alt=""/>
                <img className="npm" src={npm} alt=""/>
                <img className="smallIcons" src={firebase} alt=""/>
                <img className="smallIcons" src={github} alt=""/>
              </div>

              <h4>
                I approach all projects with passion, curiosity and a learning mentality. 
              </h4>

              <h4>Here are some of my completed and ongoing projects</h4>

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
                        <a className="project-links" href={item.repository} target="_blank" rel="noreferrer">{item.button}</a>
                        <a className="project-links" href={item.live} target="_blank" rel="noreferrer">{item.secondButton}</a>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
