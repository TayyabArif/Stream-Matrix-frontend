import React from 'react'
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

const LegalCenter = () => {
  return (
    <Grid container item direction='column' sx={{width: '100%', height: '100%', p: '30px'}}>
      <Grid container item direction='column' sx={{width: '100%', height: '20%'}}>
        <Typography
        fontSize='2.5rem'
        sx={{color: 'white'}}
        >
          Stream Matrix Legal Center
        </Typography>
        <Typography
        sx={{color: 'white'}}>
          Find legal information, policies and guidelines for Stream Matrix products and services.
        </Typography>
      </Grid>
      <Grid container item sx={{width: '100%', height: '20%', mt: '15px', pb: '5px', borderBottom: '5px solid gray'}}>
      <Link
        component="button"
        variant="h5"
        sx={{color: 'white'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Faqs
      </Link>
       <Link
        component="button"
        variant="h5"
        sx={{color: 'white', ml: '30px'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        About
      </Link>
      <Link
        component="button"
        variant="h5"
        sx={{color: 'white', ml: '30px'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Term of use
      </Link>
      <Link
        component="button"
        variant="h5"
        sx={{color: 'white', ml: '30px'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Copyright
      </Link>
      <Link
        component="button"
        variant="h5"
        sx={{color: 'white', ml: '30px'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Privacy & policy
      </Link>
      <Link
        component="button"
        variant="h5"
        sx={{color: 'white', ml: '30px'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Refund Policy
      </Link>
      <Link
        component="button"
        variant="h5"
        sx={{color: 'white', ml: '30px'}}
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Contact
      </Link>
      </Grid>
    </Grid>
  )
}

export default LegalCenter
