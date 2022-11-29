import React from "react";
import Grid from "@mui/material/Grid";
import { Divider } from "@material-ui/core";
import AuthHeader from "../../Components/Headers/AuthHeader";
import Footer from "../../Components/Footer";

const Main = ({ children }) => {
  return (
    <Grid container direction="column" spacing={1} >
      <Grid item flex={2} sx={{ height: "20%" }}>
        <AuthHeader />
      </Grid>
      <Grid item flex={8} sx={{ height: "60%", width: "100%" , bgcolor: 'rgba(0, 0, 0, 0.9)'}}>
        {children}
      </Grid>
      <Grid item flex={1} sx={{ height: '20%'}}>
        <Divider light={true} />
        <Footer />
      </Grid>
    </Grid>
  );
};
export default Main;
