import { Grid } from '@mui/material'
import React from 'react'
import OrderSteps from '../../Components/Order/OrderSteps'

const Order = () => {
  return (
    <Grid container sx={{width: '100%', height: '100%'}} justifyContent='center'>
      <Grid container item sx={{height: '70%', width: '80%', bgcolor: 'white', my: '20px', borderRadius: '10px'}}>
        <OrderSteps />
      </Grid>
    </Grid>
  )
}

export default Order
