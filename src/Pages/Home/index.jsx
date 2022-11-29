import { Grid } from '@mui/material';
import React from 'react'
import FeaturedSlider from '../../Components/Home/FeaturedSlider';
import InternationalShowsSlider from '../../Components/Home/InternationShowsSlider';
import KidsShowsSlider from '../../Components/Home/KidsShowSlider';
import LocalShowsSlider from '../../Components/Home/LocalShowsSlider';
import Slider from '../../Components/Home/Slider';
import TopVideosSlider from '../../Components/Home/TopVideos';

const Home = () => {
  return (
    <Grid container sx={{width: '100%', height: '100%'}}>
      <Grid container item sx={{ width: "100%", height: "30%" }}>
        <Slider />
      </Grid>
      <Grid container item sx={{ width: "100%", height: "15%" }}>
        <FeaturedSlider />
      </Grid>
      <Grid container item sx={{ width: "100%", height: "15%" }}>
        <TopVideosSlider />
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <LocalShowsSlider />
      </Grid>
      <Grid container item sx={{ width: "100%", height: "15%" }}>
        <InternationalShowsSlider />
      </Grid>
      <Grid container item sx={{ width: "100%", height: "15%" }}>
        <KidsShowsSlider />
      </Grid>
    </Grid>
  )
}

export default Home;
