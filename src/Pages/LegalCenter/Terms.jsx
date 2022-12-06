import { Grid, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const packages = ['Basic: Rs.100/month', 'Standard: Rs.299/3-months', 'Premium: Rs.999/year']
const Terms = () => {
  return (
    <Grid container direction= 'column' sx={{width: '100%', height: '100%'}}>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
          STREAM MATRIX TERMS OF USE
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', pl: 1}}
        >
          Please read these Stream Matrix Terms of Use ("Terms") carefully before using the Application
      </Typography>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
          Sign Up
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', pl: 1}}
        >
        If you wish to sign up to one of our packages, you may be asked to provide certain information relevant to your Purchase including, without limitation, your mobile number, debit/card details, and/or Easypaisa and Jazzcash information.
      </Typography>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        Subscriptions
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', pl: 1}}
        >
          Stream Matrix Services are billed on a subscription. You will be billed in advance on a recurring charge for every month, quarterly or yearly . The price, however, will vary depending on the package you have subscribed. For more details regarding Billing, please refer to the Billing section below.
      </Typography>
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        Packages:
      </Typography>
      {
        packages.map( (data, index) => {
          return(
            <Grid container item key ={index} sx={{width: '100%'}} alignItems = 'center'>
              <DoneIcon sx={{color: 'success.main'}} />
              <Typography
                fontSize= '0.9rem'
                fontWeight = 'bold'
                sx={{color: 'gray', mb: 0.5, ml: 2}}
                >
                {data}
              </Typography>
            </Grid>
          )
        })
      }
      <Typography
        fontSize= '1.8rem'
        fontWeight = 'bold'
        sx={{color: 'white',  mt: 2, mb: 1}}
        >
        Choice of Law and Forum
      </Typography>
      <Typography
        fontSize= '1rem'
        fontWeight = 'bold'
        sx={{color: 'gray', pl: 1}}
        >
          These Terms of Use are governed by, and construed in accordance with, the laws of Pakistan and the laws and courts of Singapore without giving effect to principles of conflicts of law.The place Integration, Amendment, and Severability.Please note that these Terms of Use, including Stream Matrix's Privacy Policy which is incorporated in these Terms and any end user license agreement that might accompany Stream Matrix authorized applications, features and devices, constitute the entire legal agreement between you and Stream Matrix and govern your use of the Stream Matrix Services (including your use of the Content) (but excludes any services, if any, that Stream Matrix may provide to you under a separate signed written agreement), and completely replaces any prior agreements between you and Stream Matrix in relation to the Stream Matrix Services. Except as set forth in Section 2 above, these Terms may not be amended or varied except in a writing signed by Stream Matrix. Although we understand that electronic or digital signatures are frequently viewed as the equivalent of traditional written signatures these days, for these purposes, a signature or "signed" writing or written agreement may not include an electronic or digital signature. These Terms of Use operate to the fullest extent permissible by law. If any provision of these Terms is held to be unlawful, void, or unenforceable, you and we agree that the provision will be deemed severable from these Terms and will not affect the validity and enforceability of any remaining provisions.
        </Typography>
    </Grid>
  )
}

export default Terms
