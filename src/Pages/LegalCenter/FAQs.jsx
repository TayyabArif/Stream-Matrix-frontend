import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../App.css'

const FAQs = () => {
  const [isSubsClick, setIsSubsClick] = useState(false)
  const [isSubsClick1, setIsSubsClick1] = useState(false)
  const [isSubsClick2, setIsSubsClick2] = useState(false)
  const [isplan, setIsplan] = useState(false)
  const [isplan1, setIsplan1] = useState(false)
  const [isSiteIssue, setIsSiteIssue] = useState(false)
  const [isSiteIssue1, setIsSiteIssue1] = useState(false)
  return (
    <Grid container direction='column' sx={{width: '100%', height: '100%'}}>

      {/* Plans */}
      <Grid container item sx={{width: '100%', height: '25%'}}>
        <Typography
          fontSize= '1.8rem'
          fontWeight = 'bold'
          sx={{color: 'white',  mt: 2, mb: 1}}
          >
            Stream Matrix Plans
        </Typography>
        <Grid container item direction='column' sx={{width: '100%', height: '40%'}}>
          <Grid container item onClick={() => setIsplan(!isplan)} sx={{width: '100%', height: '100%', bgcolor: '#131c1f', cursor: 'pointer', py: '10px'}} justifyContent='space-between'>
            <Typography
              fontSize= '1.1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
              Is Stream Matrix a free service?
            </Typography>
            {isplan ?
              <ArrowDropUpIcon sx={{color: 'gray', fontSize: '2rem'}}/> :
              <ArrowDropDownIcon sx={{color: 'gray', fontSize: '2rem'}}/>
            }
            {
              isplan &&
            <Typography
              fontSize= '0.9rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
             >
              You can watch limited collection of movies, web series and Live TV Channels for FREE at Tapamad. STREAM MATRIX TV give free access to 80+ national and regional live news channels, Pakistani Drama Channels and International TV Channels including Hum TV, Express Entertainment, Samaa News, 92 News HD, Baby TV and Cartoon Network. All Indian TV channels, Zee TV Shows, Indian dramas, latest Bollywood movies, English TV shows and are only accessible with STREAM MATRIX Premium.
             </Typography>
            }
          </Grid>
        </Grid>
        <Grid container item direction='column' sx={{width: '100%', height: '40%', mt: '10px'}}>
          <Grid container item onClick={() => setIsplan1(!isplan1)} sx={{width: '100%', height: '100%', bgcolor: '#131c1f', cursor: 'pointer', py: '10px'}} justifyContent='space-between'>
            <Typography
              fontSize= '1.1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
             How much does Stream Matrix cost?
            </Typography>
            {isplan1 ?
              <ArrowDropUpIcon sx={{color: 'gray', fontSize: '2rem'}}/> :
              <ArrowDropDownIcon sx={{color: 'gray', fontSize: '2rem'}}/>
            }
            {
              isplan1 &&
            <Typography
              fontSize= '0.9rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
             >
              Watch Stream Matrix' streaming on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250/month to Rs 999/year a month. No extra costs, no contracts.
             </Typography>
            }
          </Grid>
        </Grid>

        {/* Subscription */}
        <Grid container item sx={{width: '100%', height: '25%', mt: '10px'}}>
        <Typography
          fontSize= '1.8rem'
          fontWeight = 'bold'
          sx={{color: 'white',  mt: 2, mb: 1}}
          >
            Subscription
        </Typography>
        <Grid container item direction='column' sx={{width: '100%', height: '40%'}}>
          <Grid container item onClick={() => setIsSubsClick(!isSubsClick)} sx={{width: '100%', height: '100%', bgcolor: '#131c1f', cursor: 'pointer', py: '10px'}} justifyContent='space-between'>
            <Typography
              fontSize= '1.1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
              How do I subscribe to Stream Matrix
            </Typography>
            {isSubsClick ?
              <ArrowDropUpIcon sx={{color: 'gray', fontSize: '2rem'}}/> :
              <ArrowDropDownIcon sx={{color: 'gray', fontSize: '2rem'}}/>
            }
            {
              isSubsClick &&
            <Typography
              fontSize= '0.9rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
             >
              STREAM MATRIX is Pakistan's leading on-demand video streaming platform that offers sports live and other Streaming of 80+ local, regional and international channels. With STREAM MATRIX Premium app subscription you can instantly watch your favorite web-series, drama serials, TV shows, online movies and live sports anytime anywhere. STREAM MATRIX is an app offers IOS and Android Users to watch Live TV streaming including all Pakistani news channels and 20+ international channels such as BBC World News, CNN, Animal Planet, National Geographic, Discovery, and Voice of America.
             </Typography>
            }
          </Grid>
        </Grid>
        <Grid container item direction='column' sx={{width: '100%', height: '40%', mt: '10px'}}>
          <Grid container item onClick={() => setIsSubsClick1(!isSubsClick1)} sx={{width: '100%', height: '100%', bgcolor: '#131c1f', cursor: 'pointer', py: '10px'}} justifyContent='space-between'>
            <Typography
              fontSize= '1.1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
             How do I unsubscribe from Stream Matrix?
            </Typography>
            {isSubsClick1 ?
              <ArrowDropUpIcon sx={{color: 'gray', fontSize: '2rem'}}/> :
              <ArrowDropDownIcon sx={{color: 'gray', fontSize: '2rem'}}/>
            }
            {
              isSubsClick1 &&
            // <Typography
            //   fontSize= '0.9rem'
            //   fontWeight = 'bold'
            //   sx={{color: 'gray', pl: '15px'}}
            //  >
            //   Watch Stream Matrix' streaming on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250/month to Rs 999/year a month. No extra costs, no contracts.
            //  </Typography>
            <Grid container item direction='column'>
              <Typography
              fontSize= '1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
             To cancel your Streaming subscription follow these steps;
            </Typography>
            <ul>
              <li style={{color: "gray"}}>Log in to your Stream Matrix account (via website).</li>
              <li style={{color: "gray"}}>Click on Account under your name.</li>
              <li style={{color: "gray"}}>Then choose to "edit" your subscription under "Billing Information".</li>
              <li style={{color: "gray"}}>Click on the "cancel" option to cancel or turn off your Stream Matrix subscription.</li>
            </ul>
            </Grid>
            }
          </Grid>
        </Grid>
      </Grid>

      {/* Issues */}
      <Grid container item sx={{width: '100%', height: '25%'}}>
        <Typography
          fontSize= '1.8rem'
          fontWeight = 'bold'
          sx={{color: 'white',  mt: 2, mb: 1}}
          >
            Website Issues
        </Typography>
        <Grid container item direction='column' sx={{width: '100%', height: '40%'}}>
          <Grid container item onClick={() => setIsSiteIssue(!isSiteIssue)} sx={{width: '100%', height: '100%', bgcolor: '#131c1f', cursor: 'pointer', py: '10px'}} justifyContent='space-between'>
            <Typography
              fontSize= '1.1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
             I am having slow streaming or buffering problem.
            </Typography>
            {isSiteIssue ?
              <ArrowDropUpIcon sx={{color: 'gray', fontSize: '2rem'}}/> :
              <ArrowDropDownIcon sx={{color: 'gray', fontSize: '2rem'}}/>
            }
            {
              isSiteIssue &&
            <Typography
              fontSize= '0.9rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
             >
              Site Issues Poor network or bad internet connection is the most common reason for slow streaming or buffering. Check video setting and select a different (lower) quality to stream the video in case of poor internet connection.
             </Typography>
            }
          </Grid>
        </Grid>
        <Grid container item direction='column' sx={{width: '100%', height: '40%', mt: '10px'}}>
          <Grid container item onClick={() => setIsSiteIssue1(!isSiteIssue1)} sx={{width: '100%', height: '100%', bgcolor: '#131c1f', cursor: 'pointer', py: '10px'}} justifyContent='space-between'>
            <Typography
              fontSize= '1.1rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
            >
             I can’t log in / sign up to Stream Matrix Premium, what should I do?
            </Typography>
            {isSiteIssue1 ?
              <ArrowDropUpIcon sx={{color: 'gray', fontSize: '2rem'}}/> :
              <ArrowDropDownIcon sx={{color: 'gray', fontSize: '2rem'}}/>
            }
            {
              isSiteIssue1 &&
            <Typography
              fontSize= '0.9rem'
              fontWeight = 'bold'
              sx={{color: 'gray', pl: '15px'}}
             >
              If you are having trouble logging in or signing up to your Stream Matrix account, then please contact us at techsupport@streammatrix.com. We will get back to you with the best possible solution as soon as possible.
            </Typography>
            }
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  )
}

export default FAQs
