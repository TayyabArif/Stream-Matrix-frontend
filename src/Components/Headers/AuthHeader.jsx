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

export default function AuthHeader() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography> */}
          <Grid container sx={{width: '100%'}} justifyContent="space-between">
          <Grid container item sx={{width: '70%'}} alignItems='center'>
           <Typography variant="h5" component="div" sx={{color: 'success.main'}}
           fontWeight= 'bold'>
            MATRIX
          </Typography>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Home
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Movies
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Live
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Shows
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Kids
          </Link>
          <Link
            component="button"
            variant="h6"
            sx={{color: 'white', ml: '30px'}}
            onClick={() => {
              console.info("I'm a button.");
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
