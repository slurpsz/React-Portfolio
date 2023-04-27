import React from 'react';
import Grid from "@mui/material/Grid";
import Music from '../../assets/projects/Music-Forecast.png';
import Films from '../../assets/projects/Project-Films.png';
import Card from '../Card'


const Portfolio = () => {
  const projects = [
    {
      title: "Music Forecast",
      deploy: "https://kyle-mucerino.github.io/Music-Forecast/",
      repo: "https://github.com/kyle-mucerino/Music-Forecast",
      image: "https://github.com/kyle-mucerino/Music-Forecast/blob/main/assets/images/Screenshot%202023-03-13%20at%2011-35-16%20Music%20Forecast.png?raw=true",
    },
    {
      title: "Project Films",
      deploy: "https://uciprojfilms.herokuapp.com/",
      repo: "https://github.com/JakeDish/movie-database",
      image:
        "https://github.com/JakeDish/movie-database/raw/main/image/home.png",
    },
    {
      title: "Coming Soon!",
      deploy: "https://github.com/",
      repo: "https://github.com/",
      image: "https://picsum.photos/200",
    },
    {
      title: "Coming Soon!",
      deployed: "https://github.com/",
      repo: "https://github.com/",
      image: "https://picsum.photos/200",
    },
    {
      title: "Coming Soon!",
      deploy: "https://github.com/",
      repo: "https://github.com/",
      image: "https://picsum.photos/200",
    },
    {
      title: "Coming Soon!",
      deploy: "https://github.com/",
      repo: "https://github.com/",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <>
    <Grid container justifyContent="center">
      <h1>My Projects</h1>
    </Grid>
    <Grid container spacing={20} padding={20} justifyContent="center">
      {projects.map(project => 
        <Grid item>

          <Card title={project.title} deploy={project.deploy} repo={project.repo} image={project.image} ></Card>

        </Grid>
      )}
    </Grid>
    </>
  )
}

export default Portfolio