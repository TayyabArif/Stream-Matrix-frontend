import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
// import {styled, alpha} from "styled-components";
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Button } from "@mui/material"
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import "../../App.css"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 10,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const styles = {
  underline: {
    "&:before": {
      borderBottom: "2px solid green"
    },
    "&:hover": {
      // borderBottom: "2px solid blue"
      // color: 'red';
    },
    // "&:after": {
    //   borderBottom: "3px solid purple"
    // }
  },
}

export default function AuthHeader() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container sx={{width: '100%'}} justifyContent="space-between">
          <Grid container item sx={{width: '70%'}} alignItems='center'>
           <Typography variant="h5" component="div" sx={{color: 'success.main'}}
           fontWeight= 'bold'
           style={{cursor: 'pointer'}}
           onClick = {() => navigate('/')}>
            MATRIX
          </Typography>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              navigate('/')
            }}
            // style ={styles.underline}
            className="custom-link"
          >
            Home
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              navigate('/movies')
            }}
          >
            Movies
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              navigate('/live')
            }}
          >
            Live
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              navigate('/shows')
            }}
          >
            Shows
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              navigate('/kids')
            }}
          >
            Kids
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              navigate('/coming-soon')
            }}
          >
            Comming Soon
          </Link>
          </Grid>
          <Grid container item sx={{width: '30%'}} justifyContent='flex-end'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={() => console.log('hello')}
            />
          </Search>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Grid>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <Grid container direction='column' item sx={{width: '100%', height: '100%',}}
                >
                  <Grid container item sx={{width: '100%', height: '30%',px: '30px'}}>
                    <Grid container item sx={{width: '30%', height: '100%'}}>
                      <AccountCircleOutlinedIcon sx={{fontSize: '3rem'}}/>
                    </Grid>
                    <Grid container item direction= 'column' sx={{width: '60%', height: '100%', pl: '13px'}}>
                      <Typography
                      fontSize='1.1rem'
                      fontWeight = 'bold'>
                        Welcome
                      </Typography>
                      <Typography
                      fontSize='0.9rem'
                      >
                        Guest
                      </Typography>
                    </Grid>

                  </Grid>
                  <Grid container item sx={{width: '100%', height: '20%', mt: '12px', ml: '5px', px: '30px'}} alignItems='center'>
                    <ErrorOutlineOutlinedIcon sx={{color: 'gray', fontSize: '1rem'}}/>
                    <Typography
                      fontSize='1.1rem'
                      fontWeight = ''
                      sx={{ml: '10px'}}>
                        About us
                      </Typography>
                  </Grid>
                  <Grid container item sx={{width: '100%', height: '20%', mt: '12px', ml: '5px', px: '30px'}} alignItems='center'>
                    <PsychologyAltOutlinedIcon sx={{color: 'gray', fontSize: '1rem'}}/>
                    <Typography
                      fontSize='1.1rem'
                      fontWeight = ''
                      sx={{ml: '10px'}}>
                        FAQs
                      </Typography>
                  </Grid>
                  <Grid container item sx={{px: '10px'}}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: 'success.main', color: 'white', ml: '5px' }}
                    onClick={() => navigate('/login')}
                  >
                    Log In
                  </Button>
                  </Grid>
                  <Grid container item sx={{px: '10px'}}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{  mb: 2, bgcolor: 'danger.main', color: 'white', ml: '5px' }}
                    onClick={() => navigate('/register')}
                  >
                    Subscribe
                  </Button>
                  </Grid>
                </Grid>
              </Menu>
              </Grid>
            </div>
          )}
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
