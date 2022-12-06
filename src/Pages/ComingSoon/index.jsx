import { Grid, Typography } from '@mui/material';
import React from 'react'
import FeaturedSlider from '../../Components/Home/FeaturedSlider';
import InternationalShowsSlider from '../../Components/Home/InternationShowsSlider';
import KidsShowsSlider from '../../Components/Home/KidsShowSlider';
import LocalShowsSlider from '../../Components/Home/LocalShowsSlider';
import Slider from '../../Components/Home/Slider';
import Favourites from '../../Components/Movies/Favourites';
import TopVideosCard from '../../Components/Home/TopVideosCard';
import TopVideosSlider from '../../Components/Home/TopVideos';
import { CommingSoonData } from '../../Assets/data';
import Event from '../../Components/ComingSoon/Event';

const CommingSoon = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%', p: '10px'}}>
      <Grid container item sx={{ width: "100%", height: "30%", p: '10px' }}>
      <Typography
        fontSize= '2rem'
        fontWeight = 'bold'
        sx={{color: 'white'}}
        >
          Comming Soon
        </Typography>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "60%", p: '10px' }}>
        <Event />
      </Grid>
      {/* <Grid container item sx={{ width: "100%", height: "15%" }}>
        <TopVideosSlider name = 'Kids Tv Shows'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "15%" }}>
        <TopVideosSlider name= 'Kids Educational Shows'/>
      </Grid> */}
    </Grid>
  )
}

export default CommingSoon;
