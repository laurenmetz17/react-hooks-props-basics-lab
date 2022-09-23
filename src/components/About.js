import React from "react";
import Links from './Links.js';

function About(props) {
  let bioPresent = true; 
  console.log(props.bio);
  if (props.bio== undefined || props.bio == '') {
    bioPresent = false;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioPresent ? <p>{props.bio}</p> : null};
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}></Links>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
