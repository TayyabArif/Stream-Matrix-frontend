import { Grid, Typography } from '@mui/material'
import React from 'react'
import {RecommendedVideosData} from '../../Assets/data'
import styled from 'styled-components'
import '../../App.css'

const Image = styled.img`
height: 170px;
width: 140px;
border-radius: 10%;
`
const RecommendedVideos = () => {
  return (
    <Grid container item sx={{width: '100%', height: '50%', bgcolor: '#131c1f', borderRadius: '10px', p: '5px', overflow: 'scroll'}}>
      {RecommendedVideosData.map((data) => {
        return (
          <Grid container item direction= 'column' sx={{width: '100%', height: '100%'}}>
          <Grid container item sx={{width: '100%', height: '20%', mb: '10px'}}>
            <Grid container item sx={{width: '40%'}} justifyContent='space-between'>
            <Image src={data.img} />
            </Grid>
            <Grid container item direction= 'column' sx={{width: '55%'}}>
              <Typography
                fontSize= '1.5rem'
                fontWeight = 'bold'
                sx={{color: 'success.main', width: '100%'}}
                >
                  Wolf Town
              </Typography>
              <Typography
                fontSize= '0.7rem'
                fontWeight = 'bold'
                sx={{color: 'gray',
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "7",
                WebkitBoxOrient: "vertical",}}
                >
                Wolf Town (2011) is a Thriller/Horror movie starring Alicia Ziegler, Levi Fiehler, Max Adler, Josh Kelly. Wolf Town (2011) is directed by Roel Reina, released on Tuesday, 28 February, 2012. The story revolves around how Kyle, a shy college student, finds himself and three of his friends trapped in an old western ghost town by a pack of ferocious wolves and has to overcome his personal fears to confront the wolves and lead his friends to safety.
              </Typography>
            </Grid>
          </Grid>
       </Grid>
        )
      })}
    </Grid>
  )
}

export default RecommendedVideos
