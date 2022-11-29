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
import VerifiedIcon from '@mui/icons-material/Verified';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';

const Image = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 60px;
    border-radius: 50%;
`
export default function Package({details, width}) {
  const navigate = useNavigate()
  const handleChange = (event) => {
    navigate('/offers')
  };
  return (
    <Card sx={{ maxWidth: width, mr: 3 , width: '100%',  bgcolor: 'blackish.main'}} style={{cursor: 'pointer'}} onClick={()=> handleChange()}>
      <CardContent >
        <Grid container item direction='column' sx={{width: '100%', height: '25%'}} >
          <Grid container item sx={{height: '50%', width:'100%'}} justifyContent = 'center'>
          <Typography
            fontSize='1.3rem'
            sx={{color: 'white'}}
            fontWeight = 'bold'
          >
            {details.title}
          </Typography>
          </Grid>
          <Grid container item sx={{height: '50%', width:'100%', mt: '-5px'}} justifyContent = 'center' alignItems='center'>
            <Typography
            fontSize='0.8rem'
            sx={{color: 'white', mr: 0.5}}
            >
              Rs
            </Typography>
            <Typography
            fontSize='1.4rem'
            sx={{color: 'success.main'}}>
              {details.price}
            </Typography>
            <Typography
            fontSize='0.8rem'
            sx={{color: 'white', ml:0.5}}>
              {details.plan}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sx={{height: '50%', width: '100%', mt: '10px'}} alignItems='center'>
          <Grid container item direction='column' sx={{width: '33%'}} justifyContent='center' alignItems='center'>
            <VerifiedIcon sx={{color: 'success.main'}}/>
            <Typography
            fontSize='0.8rem'
            sx={{color: 'white', ml:0.5}}
            >
              720p
            </Typography>
          </Grid>
          <Grid container item direction='column' sx={{width: '33%'}} justifyContent='center' alignItems='center'>
            <ImportantDevicesIcon sx={{color: 'success.main'}}/>
            <Typography
            fontSize='0.8rem'
            sx={{color: 'white', ml:0.5}}>
              1 device
            </Typography>
          </Grid>
          <Grid container item direction='column' sx={{width: '33%'}} justifyContent='center' alignItems='center'>
            <BroadcastOnHomeIcon sx={{color: 'success.main'}}/>
            <Typography
            fontSize='0.8rem'
            sx={{color: 'white', ml:0.5}}>
              casting
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction = 'column' sx={{height: '25%', width: '100%', mt: '10px'}} >
          <Typography
          fontSize='0.8rem'
          fontWeight = 'bold'
          color='gray' >
           {details.desc}
          </Typography>
          <Typography
          fontSize='0.7rem'
          fontWeight = 'bold'
          color='danger.main'
          sx={{mt: '10px'}}
          >
          {details.alert}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
