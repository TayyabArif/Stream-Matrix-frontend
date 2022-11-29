import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import FeaturedCard from './FeaturedCard';
import { sliderItems } from "../../Assets/data";
import TopVideosCard from './TopVideosCard';


const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #0CCE6B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -117px;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  margin-top: 10px;
  margin-bottom: 10px;
`
const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
`

const TopVideosSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Grid container direction = 'column' sx={{width: '100%', height: '100%', position: 'relative', overflow: 'scroll'}}>
      <Grid container item sx={{mt: '10px', ml: '15px'}}>
        <Typography
        fontSize= '2rem'
        fontWeight = 'bold'
        sx={{color: 'white'}}
        >
          Top Views Videos
        </Typography>
      </Grid>
      <Grid container item>
     <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <TopVideosCard src='https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1666853074324x432(3).jpg'/>
            <TopVideosCard src='https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1666853074324x432(3).jpg'/>
            <TopVideosCard src='https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1666853074324x432(3).jpg'/>
            <TopVideosCard src='https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1666853074324x432(3).jpg'/>
            <TopVideosCard src='https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1666853074324x432(3).jpg'/>
            <TopVideosCard src='https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1666853074324x432(3).jpg'/>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
      </Grid>
    </Grid>
  )
}

export default TopVideosSlider
