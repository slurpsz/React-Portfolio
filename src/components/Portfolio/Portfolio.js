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
      image:
        "https://github.com/kyle-mucerino/Music-Forecast/blob/main/assets/images/Screenshot%202023-03-13%20at%2011-35-16%20Music%20Forecast.png?raw=true",
    },
    {
      title: "Rest Easy Recipes",
      deploy: "https://stark-fortress-55974.herokuapp.com/",
      repo: "https://github.com/PintoDrop/resteasyrecipe",
      image:
        "https://github.com/PintoDrop/resteasyrecipe/raw/main/client/src/Images/homepage.JPG",
    },

  ];

  return (
    <>
    <Grid container justifyContent="center">
      <div>

      <h1 className='text-3xl font-bold my-4'>My Projects</h1>
      </div>
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