import { Grid, Typography,Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import Package from './Package'

const package1 = {
  title: "Basic Plan",
  price: "100",
  plan: "Per Month",
  desc: "Rs.100/month. Watch 50+ on-demand channels. This DOES NOT include stream matrix Originals, stream matrix Exclusives, Tensports, Premier League and the ICC Men’s T20 World Cup.",
  alert: "* Once subscribed, PKR 100 will be deducted from your account on a monthly basis. In order to avoid deduction, you may cancel any time."
}
const Step2 = () => {
  const [referalCode, setReferalCode]= useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%', p: '20px'}}>
      <Typography
      fontSize='2rem'
      sx={{color: 'primary.main'}}>
        Complete Your Payment
      </Typography>
      <Grid container item sx={{width: '100%', height: '100%', p: '10px'}}>
        <Grid container item sx={{width: '50%', height: '100%'}}>
        <Package details = {package1} width={400} />
        </Grid>
        <Grid container item sx={{width: '50%', height: '100%', mt: '100px'}}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }} justifyContent='center' alignItems='center'>
          <Grid container item sx={{width: '100%'}} alignItems='center'>
          <TextField
            margin="normal"
            sx={{minWidth: '70%'}}
            required
            id="code"
            label="Referal Code"
            name={referalCode}
            autoComplete="code"
            type="text"
            focused
          >
          </TextField>
          <Button
          variant='contained'
          sx={{ml: '10px'}}>
            Apply
          </Button>
          </Grid>
        </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Step2
