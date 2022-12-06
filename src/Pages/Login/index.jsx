import styled from "styled-components";
import {Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FormHeader from "../../Components/Headers/FormHeader";
import UnAuthHeader from "../../Components/Headers/UnAuthHeader";
import DoneIcon from '@mui/icons-material/Done';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


const Container = styled.div`
  width: 100vw;
  height: 110vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  border: 1px solid;
  border-color: #01334e;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const LinkC = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  font-weigth: bold;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 10px;
`;
function Login() {
  const form = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    form.current.reset();
  };
  return (
    <div>
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid container item sx={{ width: "100%", height: "30%" }}>
          <UnAuthHeader />
        </Grid>
        <Grid container item sx={{ width: "100%", height: "70%" }}>
          <Container>
            <Grid container direction='column' item
              sx={{
                marginTop: 8,
                boxShadow: 5,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: "primary.main",
                borderRadius: "10px",
                borderColor: "primary.light",
                mb: 2,
                mt: 4,
                width: '60%',
                mr: 2
              }}
              >
              <Typography
               component="h1" variant="h5"  fontSize="2rem"
                fontWeight="120px"
                fontFamily="Fantasy"
                sx={{mb: 2, color: 'white'}}>
                Welcome to Stream Matrix
              </Typography>
              <Typography component="h1" variant="h5" sx={{}} fontWeight='bold'
                color='success.main'
                fontSize="1.2rem"
              >
                  World Full of Entertainment
              </Typography>
              <Typography
                fontSize= '1.2rem'
                fontWeight = ''
                sx={{color: 'white', my: 1.5}}
                >
                Enjoy binge worthy originals and a huge catalogue of hit TV series and blockbuster dubbed productions, with features such as Seamless "Streaming, HD Quality, and a Friendly User Interface.
              </Typography>
              <Grid container item direction ='column' sx={{width: '60%', ml:'10px', mt: '10px', borderRadius: '10px', borderColor: 'white', bgcolor: 'success.main', p: '10px'}}>
                <Grid container item sx={{width: '100%', mb: 1}} alignItems = 'center'>
                  <DoneIcon sx={{color: 'primary.main'}} />
                  <Typography
                    fontSize= '1.2rem'
                    fontWeight = 'bold'
                    sx={{color: 'white', ml: 1}}
                    >
                    Get promo codes
                  </Typography>
                </Grid>
                <Grid container item sx={{width: '100%', mb: 1}} alignItems = 'center'>
                  <DoneIcon sx={{color: 'primary.main'}} />
                  <Typography
                    fontSize= '1.2rem'
                    fontWeight = 'bold'
                    sx={{color: 'white', ml: 1}}
                    >
                    Get newly Uploaded Content
                  </Typography>
                </Grid>
                <Grid container item sx={{width: '100%', mb: 1}} alignItems = 'center'>
                  <DoneIcon sx={{color: 'primary.main'}} />
                  <Typography
                    fontSize= '1.2rem'
                    fontWeight = 'bold'
                    sx={{color: 'white', ml: 1}}
                    >
                    Access paid content with latest shows
                  </Typography>
                </Grid>
                <Grid container item sx={{width: '100%', mb: 1}} alignItems = 'center'>
                  <DoneIcon sx={{color: 'primary.main'}} />
                  <Typography
                    fontSize= '1.2rem'
                    fontWeight = 'bold'
                    sx={{color: 'white', ml: 1}}
                    >
                    Enjoy HD live Stream of matches
                  </Typography>
                </Grid>
              </Grid>
              {/* <Typography
                fontSize= '1.2rem'
                fontWeight = ''
                sx={{color: 'white', my: 1.5}}
                >
                Watch anywhere, anytime. Sign in with your Stream Matrix account to watch instantly on the web at streammatrix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              </Typography> */}
              <Grid container item sx={{width: '100%', mt: 3}} alignItems='center'>
                <ArrowCircleRightOutlinedIcon sx={{color: 'success.main'}} />
                <Typography
                  fontSize= '1.2rem'
                  fontWeight = 'bold'
                  sx={{color: 'white', ml: 1}}
                  >
                  Best for Kids
                </Typography>
              </Grid>
              <Grid container item sx={{width: '100%', mt: 1}} alignItems='center'>
                <ArrowCircleRightOutlinedIcon sx={{color: 'success.main'}} />
                <Typography
                  fontSize= '1.2rem'
                  fontWeight = 'bold'
                  sx={{color: 'white', ml: 1}}
                  >
                  All local shows available
                </Typography>
              </Grid>
              <Grid container item sx={{width: '100%', mt: 1}} alignItems='center'>
                <ArrowCircleRightOutlinedIcon sx={{color: 'success.main'}} />
                <Typography
                  fontSize= '1.2rem'
                  fontWeight = 'bold'
                  sx={{color: 'white', ml: 1}}
                  >
                 Spend Your time in watching good
                </Typography>
              </Grid>
            </Grid>
            <Wrapper>
              <FormHeader name="Sign In" />
              <Form ref={form} onSubmit={handleSubmit}>
                <Grid
                  container
                  direction="column"
                  sx={{ height: "100%", width: "100%" }}
                >
                  <Grid item sx={{ height: "50%" }}>
                    <TextField
                      margin="normal"
                      required
                      id="email"
                      label="email"
                      name={email}
                      autoComplete="email"
                      type="email"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "100%" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item sx={{ height: "50%" }}>
                    <TextField
                      margin="normal"
                      required
                      sx={{ width: "100%" }}
                      id="password"
                      label="password"
                      name={password}
                      autoComplete="password"
                      type="password"
                      autoFocus
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Login
                </Button>
                <Grid container justifyContent="center">
                  <LinkC href="">FORGET PASSWORD?</LinkC>
                  <LinkC href="/register">CREATE A NEW ACCOUNT</LinkC>
                </Grid>
              </Form>
            </Wrapper>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
