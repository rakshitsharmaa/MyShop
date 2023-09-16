import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/rakshitsharmaa/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhokb0kvw/image/upload/v1694899948/bkbpes46f92dqxrd7m9l.png"
              alt="Founder"
            />
            <Typography>Rakshit Kumar Sharma</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit linkedin
            </Button>
            <span>
              This is a sample wesbite made by Rakshit kumar Sharma.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Other Social Media Handles</Typography>
            <a href="https://www.instagram.com/irakshitsharma/" target="blank">
              <InstagramIcon className="linkedinSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;