import { Grid, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Grid container direction= 'column' sx={{width: '100%', height: '100%'}}>
      {/* first */}
      <Grid container item sx={{width: '100%', height: '30%'}}>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 2}}
        >
          Stream Matrix is a Video Streaming service Provider
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray'}}
        >
          Stream Matrix is an online video streaming platform owned by Matrix Holdings Pte. Ltd. (UEN 301.844390K). Stream Matrix currently offers over thousands of hours of entertainment content across multiple languages, and major sportscontent including live coverage. Highly evolved video streaming technology and a high attention to quality of experience across devices and platforms, makes Tapmad the most complete video destination for Over The Top (OTT) video consumers.
          You can watch few content if you are not a subscriber but you can also watch the complete HD content by subscribing us.
      </Typography>

      {/* middle */}
      <Grid container item sx={{width: '100%', height: '30%'}}>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 2}}
        >
         Goals.
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray'}}
        >
         Stream Matrix has goal to provide the Sports streaming and video streaming combine in one plateform. We have aim to promote our local industry in a huge plateform so they get appriciated.
      </Typography>
      </Grid>

      {/* Last */}
      </Grid>
      <Grid container item sx={{width: '100%', height: '30%'}}>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 2}}
        >
         Let’s Play.
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray'}}
        >
         Enjoy binge worthy originals and a huge catalogue of hit TV series and blockbuster productions, with features such as Seamless "Streaming, HD Quality, and a Friendly User Interfac
      </Typography>
      <Typography
        fontSize= '1.7rem'
        fontWeight = 'bold'
        sx={{color: 'gray', mt: 2}}
        >
        Happy Streaming!
      </Typography>
      </Grid>

    </Grid>
  )
}

export default About
