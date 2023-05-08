import React from 'react'
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Grid container justifyContent="center" spacing={2} padding={4}>
        <Grid item>
          <a href="https://github.com/slurpsz">
            <GitHubIcon></GitHubIcon>
          </a>

          <a href="https://www.linkedin.com/in/hallebe">
            <LinkedInIcon></LinkedInIcon>
          </a>

          <a href="https://www.instagram.com/">
            <InstagramIcon></InstagramIcon>
          </a>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer