import React from "react";

function About({bio , links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={links.github}>{links.github}</a>
      <a href={links.linkedin}>{links.linkedin}</a>
    </div>
  );
}

export default About;
