import { Grid,Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import RecommendedVideos from '../../Components/PlayVideo/RecommendedVideos'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../../App.css'

const Video = () => {
  return (
    <Grid container sx={{width: '100%', height: '100%', p: '20px'}}>
      <Grid container item direction='column' sx={{width: '70%', height: '100%'}}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='90%' />
      <Grid container item sx-={{width: '100%', mt: '10px'}} justifyContent='space-between' alignItems='center'>
        <Typography
          fontSize= '1.8rem'
          fontWeight = 'bold'
          sx={{color: 'white',  mt: 2}}
          >
            Wolf Town
        </Typography>
        <Grid container item direction='column' sx={{width: '30%', mt: 2}} alignItems='center'>
          <AddCircleOutlineIcon sx={{color: 'success.main', fontSize:'2rem'}} />
          <Typography
          fontSize= '0.8rem'
          fontWeight = 'bold'
          sx={{color: 'success.main'}}
          >
            Add to Wishlist
          </Typography>
        </Grid>
      </Grid>
      <Typography
        fontSize= '1.3rem'
        fontWeight = 'bold'
        sx={{color: 'success.main', width: '100%'}}
        >
          Overview
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', width: '90%', mt: 1}}
        >
          Wolf Town (2011) is a Thriller/Horror movie starring Alicia Ziegler, Levi Fiehler, Max Adler, Josh Kelly. Wolf Town (2011) is directed by Roel Reina, released on Tuesday, 28 February, 2012. The story revolves around how Kyle, a shy college student, finds himself and three of his friends trapped in an old western ghost town by a pack of ferocious wolves and has to overcome his personal fears to confront the wolves and lead his friends to safety.
      </Typography>
      </Grid>
      <Grid container item direction='column' sx={{width: '30%', height: '100%', mt: '30px'}}>
      <Typography
        fontSize= '1.7rem'
        fontWeight = 'bold'
        sx={{color: 'white'}}
        >
          Recommended
      </Typography>
        <RecommendedVideos />
      </Grid>
    </Grid>
  )
}

export default Video
