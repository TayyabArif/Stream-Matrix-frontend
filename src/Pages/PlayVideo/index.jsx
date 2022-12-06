import { Grid, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../../App.css'
import VideosCard from '../../Components/PlayVideo/VideosCard';
import { borderRadius } from '@mui/system';
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
    borderRadius: '50px'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#c02942',
    },
    '&:hover fieldset': {
      borderColor: '#00d986',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0CCE6B',
    },
  },
  width: '100%',
  marginBottom: '20px',
  color: 'white'
});

const PlayVideo = () => {
  const navigate = useNavigate()
  const id = 1
  return (
    <Grid container item direction='column' sx={{width: '100%', height: '100%'}}>
      <Grid container item sx={{width: '100%', height: '40%'}}>
        <Grid container item direction='column' sx={{width: '42%', height: '100%', ml: '30px', py: '100px', borderBottom:'1px solid gray'}}>
          <Typography
          fontSize= '2rem'
          fontWeight = 'bold'
          sx={{color: 'white'}}
          >
            Badhaai Do
          </Typography>
          <Typography
          fontSize= '0.9rem'
          fontWeight = 'bold'
          sx={{color: 'gray'}}
          >
            Badhaai Do (2022) is a Family/Drama Indian movie starring Rajkummar Rao, Bhumi Pednekar, Chum Darang, Sheeba Chaddha. Badhaai Do (2022) is directed by Harshavardhan Kulkarni, released on Friday, 11 February, 2022. The story revolves around how Shardul Thakur Flaglot and Suman Singh who enter into a marriage of...
          </Typography>
          <Grid container item sx={{width: '100%'}} alignItems='center'>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mr: 1, bgcolor: 'success.main', color: 'white', width: '25%' }}
              onClick = {() => navigate('/play/xcxcx')}
            >
              Watch Now
            </Button>
            <Grid container item direction='column' sx={{width: '30%', mt: 2}} alignItems='center'>
              <AddCircleOutlineIcon sx={{color: 'success.main', fontSize:'2rem'}} />
              <Typography
              fontSize= '0.8rem'
              fontWeight = 'bold'
              sx={{color: 'success.main'}}
              >
                Add to Wishlist
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item className='video-bg' sx={{width: '55%'}}>
        </Grid>
      </Grid>
      <Grid container item sx={{width: '100%', height: '10%', px: '30px'}}>
      <Typography
        fontSize= '1.2rem'
        fontWeight = 'bold'
        sx={{color: 'success.main', mt: '-25px', pb: '10px'}}
        >
          Recommended
        </Typography>
      </Grid>
      {id === 1 &&
      <Grid container item sx={{width: '50%', height: '10%', px: '30px'}}>
        <CssTextField label="Search Episode No#" id="custom-css-outlined-input" sx={{
          input: {
            color: "white",
          }
        }}
        />
      </Grid>
      }
      <Grid container item sx={{width: '100%', height: '40%', flexWrap: 'wrap' }}>
        <VideosCard />
        <VideosCard />
        <VideosCard />
        <VideosCard />
        <VideosCard />
        <VideosCard />
        <VideosCard />
      </Grid>
    </Grid>
  )
}

export default PlayVideo
