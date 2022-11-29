import { Box, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import FormHeader from "../../Components/Headers/FormHeader";
import UnAuthHeader from "../../Components/Headers/UnAuthHeader";
import background from "../../Assets/RegisterBackground.jpg";

const LinkC = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Containerm = styled.div`
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),
    url("https://d34080pnh6e62j.cloudfront.net/images/bilalimages/banners/1668408605Web Banner.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  border: 1px solid;
  border-color: #01334e;
  margin-top: 30px;
  margin-bottom: 65px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Aggrement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
function Register() {
  const dispatch = useDispatch();
  const form = useRef();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState();
  const onImageChange = (e) => {
    setAvatar(e.target.files[0]);
  };
  const handleChange = (e) => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("user[name]", name);
    // formData.append("user[surname]", surname);
    // formData.append("user[email]", email);
    // formData.append("user[password]", password);
    // formData.append("user[avatar]", avatar);
    // dispatch(signup(formData));
    form.current.reset();
  };
  return (
    <div>
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid container item sx={{ width: "100%", height: "30%" }}>
          <UnAuthHeader />
        </Grid>
        <Grid container item sx={{ width: "100%", height: "70%" }}>
          <Containerm>
            <Wrapper>
              <FormHeader name="Register" />
              <Form ref={form} onSubmit={handleChange}>
                <Grid
                  container
                  direction="column"
                  sx={{ height: "100%", width: "100%" }}
                >
                  <Grid
                    container
                    item
                    sx={{ height: "25%" }}
                    justifyContent=" space-between"
                  >
                    <TextField
                      margin="normal"
                      required
                      id="fname"
                      label="First name"
                      name={name}
                      autoComplete="fname"
                      type="text"
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      sx={{ minWidth: "48%" }}
                    />
                    <TextField
                      margin="normal"
                      required
                      id="lname"
                      label="Last name"
                      name={surname}
                      autoComplete="lname"
                      type="text"
                      autoFocus
                      onChange={(e) => setSurname(e.target.value)}
                      sx={{ minWidth: "48%" }}
                    />
                  </Grid>
                  <Grid container item sx={{ height: "25%" }}>
                    <TextField
                      margin="normal"
                      required
                      id="email"
                      label="email"
                      name={email}
                      autoComplete="email"
                      type="email"
                      autoFocus
                      sx={{ width: "100%" }}
                      fontColor="white"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid
                    container
                    item
                    sx={{ height: "25%" }}
                    justifyContent=" space-between"
                  >
                    <TextField
                      margin="normal"
                      required
                      id="password"
                      label="password"
                      name={password}
                      autoComplete="password"
                      type="password"
                      autoFocus
                      sx={{ minWidth: "48%" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      id="confirm-password"
                      label="Confirm password"
                      name={confirmPassword}
                      autoComplete="confirm-password"
                      type="password"
                      autoFocus
                      sx={{ minWidth: "48%" }}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item sx={{ height: "25%" }}>
                    {/* <label></label> */}
                    <Typography
                      fontSize="1.3rem"
                      sx={{ color: "primary.main" }}
                      fontWeight="bold"
                    >
                      Select your Profile Picture:
                    </Typography>
                    <input
                      type="file"
                      name="file"
                      accept="image/*"
                      onChange={onImageChange}
                      required
                    />
                  </Grid>
                  <Aggrement>
                    By creating an account, I consent to the processing of my
                    personal data in accordance with the <b>PRIVACY POLICY</b>
                  </Aggrement>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "20%", mt: 1, mb: 2 }}
                  >
                    Register
                  </Button>
                </Grid>
              </Form>
              {/* <Alert severity="error">
              Signup for Free to Get Amazing features
            </Alert> */}
              <LinkC href="/login">Already Have Account?</LinkC>
            </Wrapper>
          </Containerm>
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
