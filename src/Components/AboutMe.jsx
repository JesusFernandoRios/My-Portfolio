import React from "react";
import Me from "../media/me.jpeg";
import "./Style/AboutMe.css";
import html from "../media/skills/ihtml.png";
import css from "../media/skills/icss.png";
import github from "../media/skills/igithub.png";
import jquery from "../media/skills/ijquery.png";
import js from "../media/skills/ijs.png";
import mongo from "../media/skills/imongodb.png";
import mysql from "../media/skills/imysql.png";
import node from "../media/skills/inodejs.png";
import reactjs from "../media/skills/ireact.png";
import npm from "../media/skills/inpm.png";

export default function AboutMe({ color, ringColors }) {
  const myImageStyle = {
    width: "300px",
    borderRadius: "15%",
    marginTop: "30%",
    boxShadow: `0 0 30px gray`,
  };
  console.log(ringColors[color]);
  const titleStyle = {
    color:
      ringColors[color] != "black" ? `dark${ringColors[color]}` : "darkgray",
  };

  return (
    <div id="About" className="AboutMe">
      <div className="left">
        <h1 style={titleStyle}>About Me</h1>
        <div>
          <h4>
            Hi, Im Jesus Rios. A passionate software developer based in Phoenix,
            Arizona
          </h4>
          <p>JavaScript | React | React Native |</p>
        </div>
      </div>
      {/* <div className="right">
        <img style={myImageStyle} src={Me} alt="Jesus Fernando Rios" />
      </div> */}
    </div>
  );
}
