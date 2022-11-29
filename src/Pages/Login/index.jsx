import styled from "styled-components";
import Grid from "@mui/material/Grid";
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

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5)
    ),
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 55%;
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
      <Grid container sx={{width: '100%', height: '100%'}}>
      <Grid container item sx={{ width: "100%", height: "30%" }}>
          <UnAuthHeader />
      </Grid>
      <Grid container item sx={{ width: "100%", height: "70%" }}>
      <Container>
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
