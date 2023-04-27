import React from 'react'
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import selfie from '../../assets/images/selfie.jpg'

const About = () => {
  return (
    <>
    <Grid container padding={4} spacing={4}>
      <Grid item md={1}></Grid>
      <Grid item xs={12} md={4}>
        <Avatar alt="picture of me" src={selfie} sx={{width: 1, height: 1}}></Avatar>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item xs={12} md={4}>
        <h1>Halle Be</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum odit porro placeat distinctio. Eligendi obcaecati pariatur qui quo magni inventore eos, temporibus consequatur repellat odit, ipsum dolor quod hic?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et fugit sapiente incidunt necessitatibus dolores recusandae, voluptates, possimus cum provident ipsum maxime esse laudantium dolorum perferendis dicta nihil omnis dolor.</p>
      </Grid>
    </Grid>
    </>
  )
}

export default About;