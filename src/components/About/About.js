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
          <Avatar
            alt="picture of me"
            src={selfie}
            sx={{ width: 1, height: 1 }}
          ></Avatar>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={4}>
          <div>
          <h1 className='font-bold text-3xl my-2'>Hi. I'm Halle, pleasure to meet you.</h1>
          </div>
          <div>
          <p className>
            I'm a dedicated and versatile Full Stack Developer with a passion
            for crafting seamless web applications. My journey into the world of
            programming began with a curiosity for technology, and through
            commitment, I've honed my skills in front-end and back-end
            development. I thrive in collaborative environments, continuosuly
            learning and implementing new technologies to enhance user
            experiences. With a strong foundation in various programming
            languages and frameworks, I take pride in delivering efficient,
            scalable, and robust solutions.
          </p>

          </div>

          <div>
          <p className='my-4'>
            When I'm not coding, you'll find me playing pickleball, rock
            climbing, or unwinding with a book. Let's build something amazing
            together!
          </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default About;