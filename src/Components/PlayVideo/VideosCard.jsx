import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 60px;
    border-radius: 50%;
`
export default function VideosCard() {
  const navigate = useNavigate()
  const handleChange = (event) => {
    navigate('/offers')
  };
  return (
    <Card sx={{ maxWidth: 220, ml: 4, mb: 2 , width: '100%'}} style={{cursor: 'pointer', backgroundImage: 'https://d34080pnh6e62j.cloudfront.net/images/channels/ChannelFeaturedWebthumb/16690988421020x576.jpg'}} onClick={()=> handleChange()}>
      <CardMedia
        component="img"
        height="280"
        image="https://d34080pnh6e62j.cloudfront.net/images/NewVideoOnDemandThumb/1667816533324x432.jpg"
        alt="Featured"
      />
    </Card>
  );
}
