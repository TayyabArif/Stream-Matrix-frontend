import { Grid } from '@mui/material';
import React from 'react'
import FeaturedSlider from '../../Components/Home/FeaturedSlider';
import InternationalShowsSlider from '../../Components/Home/InternationShowsSlider';
import KidsShowsSlider from '../../Components/Home/KidsShowSlider';
import LocalShowsSlider from '../../Components/Home/LocalShowsSlider';
import Slider from '../../Components/Home/Slider';
import { MoviesSlider } from '../../Assets/data';
import Favourites from '../../Components/Movies/Favourites';
import TopVideosCard from '../../Components/Home/TopVideosCard';
import TopVideosSlider from '../../Components/Home/TopVideos';

const Movies = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%'}}>
      <Grid container item sx={{ width: "100%", height: "20%" }}>
        <Slider sliderItems= {MoviesSlider}/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <Favourites name = 'Bollywood Favourites'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <Favourites name = 'Hollywood Favourites'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Most Watched'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Action'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Romance'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Horror'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Comedy'/>
      </Grid>
      <Grid container item sx={{ width: "100%", height: "10%" }}>
        <TopVideosSlider name= 'Popular Movies'/>
      </Grid>
    </Grid>
  )
}

export default Movies;
