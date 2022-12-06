import { Grid } from '@mui/material';
import React from 'react'
import FeaturedSlider from '../../Components/Home/FeaturedSlider';
import InternationalShowsSlider from '../../Components/Home/InternationShowsSlider';
import KidsShowsSlider from '../../Components/Home/KidsShowSlider';
import LocalShowsSlider from '../../Components/Home/LocalShowsSlider';
import Slider from '../../Components/Home/Slider';
import { Live } from '../../Assets/data';
import Favourites from '../../Components/Movies/Favourites';
import TopVideosCard from '../../Components/Home/TopVideosCard';
import TopVideosSlider from '../../Components/Home/TopVideos';

const LiveContainer = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%'}}>
      <Grid container item sx={{ width: "100%", height: "40%" }}>
        <Slider sliderItems= {Live}/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "15%" }}>
        <TopVideosSlider name = 'Live Matches'/>
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

export default LiveContainer;
