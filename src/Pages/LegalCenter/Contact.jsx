import React from 'react'
import { Grid, Typography } from '@mui/material'
import styled from 'styled-components'
 import flag1 from '../../Assets/flag1.png'
 import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
 import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
 import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
const Image = styled.img`
height: 30px;
width: 30px;
border-radius: 50%;
`
const Contact = () => {
  return (
    <Grid container item  direction= 'column' sx={{width: '100%', height: '100%', py: 6}} >
      <Grid container item sx={{width: '100%', mt: '20px'}} justifyContent='center' alignItems='center'>
        <Image src={flag1}  alt='flag'/>
        <Typography
          fontSize= '1.3rem'
          fontWeight = 'bold'
          sx={{color: 'white', ml: 2}}
          >
          Pakistan Office
        </Typography>
      </Grid>
      <Grid container item sx={{width: '100%', mt: '20px', pl: 14}} justifyContent='center' alignItems='center'>
        <LocationOnOutlinedIcon sx={{color: 'success.main'}} />
        <Typography
          fontSize= '1.1rem'
          fontWeight = ''
          sx={{color: 'white', ml: 2}}
          >
          442A Eden Lane Villas2 street #2,<br /> DHA Rahber, Lahore, Pakistan
        </Typography>
      </Grid>
      <Grid container item sx={{width: '100%', mt: '20px', pl: 18}} justifyContent='center' alignItems='center'>
        <MarkEmailReadOutlinedIcon sx={{color: 'success.main'}} />
        <Typography
          fontSize= '1.1rem'
          fontWeight = ''
          sx={{color: 'white', ml: 2}}
          >
          customerservices@streammatrix.com
        </Typography>
      </Grid>
      <Grid container item sx={{width: '100%', mt: '20px', }} justifyContent='center' alignItems='center'>
        <LocalPhoneOutlinedIcon sx={{color: 'success.main'}} />
        <Typography
          fontSize= '1.1rem'
          fontWeight = ''
          sx={{color: 'white', ml: 2}}
          >
          +92-317-4685867
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Contact
