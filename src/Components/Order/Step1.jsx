import { Grid, Typography } from '@mui/material'
import React from 'react'
import Package from './Package'

const package1 = {
  title: "Basic Plan",
  price: "100",
  plan: "Per Month",
  desc: "Rs.100/month. Watch 50+ on-demand channels. This DOES NOT include stream matrix Originals, stream matrix Exclusives, Tensports, Premier League and the ICC Men’s T20 World Cup.",
  alert: "* Once subscribed, PKR 100 will be deducted from your account on a monthly basis. In order to avoid deduction, you may cancel any time."
}
const package2 = {
  title: "Standard",
  price: "499",
  plan: "Per 3 Months",
  desc: "Bringing you all your favourites in only Rs.499/quarter. Whether that is entertainment, Stream Matrix Originals, stream matrix Exclusives, or Sports such as Premier League, ICC Men’s T20 World Cup, etc – you get it all!",
  alert: "* Once subscribed, PKR 199 will be deducted from your account on a 3 months basis. In order to avoid deduction, you may cancel any time."
}
const package3 = {
  title: "Standard",
  price: "999",
  plan: "yearly",
  desc: "The perfect blend of unlimited entertainment and live sports in only Rs.999/yearly. Watch over 50 on-demand channels, All Sports, stream matrix Originals, and Exclusives in the highest quality and enjoy connecting up to 5 simultaneous devices.",
  alert: "* Once subscribed, PKR 999 will be deducted from your account on a yearly basis. In order to avoid deduction, you may cancel any time."
}
const Step1 = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%', p: '20px'}}>
      <Typography
      fontSize='2rem'
      sx={{color: 'primary.main'}}>
        Select Your Package
      </Typography>
      <Grid container item sx={{width: '100%', height: '100%', p: '10px'}}>
        <Package details = {package1} width={280}/>
        <Package details = {package2} width={280}/>
        <Package details = {package3} width={280}/>
      </Grid>
    </Grid>
  )
}

export default Step1
