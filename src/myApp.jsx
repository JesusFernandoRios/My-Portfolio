import React, { useState } from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

function App() {
  const ringColors = ["blue", "green", "red", "black"];
  const [color, setColor] = useState(0);
  return (
    <>
      <Header />
      <Welcome color={color} ringColors={ringColors} setColor={setColor} />
      <section>
        <AboutMe color={color} ringColors={ringColors} />
        <Projects color={color} ringColors={ringColors} />
        <ContactMe color={color} ringColors={ringColors} />
      </section>
    </>
  );
}

export default App;
