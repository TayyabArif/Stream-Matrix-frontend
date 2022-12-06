import { Grid, Typography } from '@mui/material'
import React from 'react'

const Refund = () => {
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%'}} >
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        Refund Policy
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray'}}
        >
          To unsubscribe, the user logs in to Stream Matrix and navigates to the User Profile page and click on the 'unsubscribe' button under the 'Current Status' info. A confirmation pops up and after confirming the unsubscription the user is no longer subscribed to the Stream Matrix's services until the next billing period. If you have a monthly subscription, your subscription will be cancelled for the next monthly billing cycle. You will not receive any refund for the remainder of your billing period.
        </Typography>
        <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', mt: 2}}
        >
          After getting subscription to Stream Matrix premium service by paying through the chosen payment method, you'll get the digital access to the content listed on that package on Stream Matrix for the time period for which you paid i.e. weekly, monthly.
        </Typography>
        <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', mt: 2}}
        >
          Office Landline: <span style={{color: '#0CCE6B'}}>+92-317-4685867</span>
        </Typography>
    </Grid>
  )
}

export default Refund
