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
import "../../Styles/TopVideos.css"

export default function TopVideosCard({src}) {
  const navigate = useNavigate()
  const handleChange = (event) => {
    navigate('/play')
  };
  return (
    <Card sx={{ maxWidth: 190, minWidth: 190, ml: 6 , width: '100%'}} className='card' onClick={()=> handleChange()}>
      <CardMedia
        component="img"
        height="240"
        image={src}
        alt="Featured"
      />
    </Card>
  );
}
