import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CommingSoonData } from '../../Assets/data';
import EventCard from './EventCard';


const Event = () => {
  return (
    <Grid container item sx={{width: '100%', height: '100%', pb: '100px'}}>
      {CommingSoonData?.map(data => {
        return(
          <Grid container item direction='column' sx={{width: '15%', height: '100%', mr: '15px'}} justifyContent='flex-start'>
            <Grid container item sx={{height: '20%'}} alignItems='center'>
            <Typography
              fontSize= '1.8rem'
              fontWeight = 'bold'
              sx={{color: 'success.main'}}
              >
                {data.date}
            </Typography>
              <Typography
              fontSize= '1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', mt: '6px'}}
              >
                {data.month}
              </Typography>
            </Grid>
            <Grid container item sx={{height: '80%'}}>
              <EventCard src={data.img} />
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Event
