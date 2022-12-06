import { Grid } from '@mui/material';
import React from 'react'
import FeaturedSlider from '../../Components/Home/FeaturedSlider';
import InternationalShowsSlider from '../../Components/Home/InternationShowsSlider';
import KidsShowsSlider from '../../Components/Home/KidsShowSlider';
import LocalShowsSlider from '../../Components/Home/LocalShowsSlider';
import Slider from '../../Components/Home/Slider';
import { ShowsSlider } from '../../Assets/data';
import Favourites from '../../Components/Movies/Favourites';
import TopVideosCard from '../../Components/Home/TopVideosCard';
import TopVideosSlider from '../../Components/Home/TopVideos';

const Shows = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%'}}>
      <Grid container item sx={{ width: "100%", height: "20%" }}>
        <Slider sliderItems= {ShowsSlider}/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name = 'Most Watched Shows'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name = 'Kids Shows'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Originals'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Religious Shows'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Talk Shows'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Trending Pakistani Shows'/>
      </Grid>
    </Grid>
  )
}

export default Shows;
